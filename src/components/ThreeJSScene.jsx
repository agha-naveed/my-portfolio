import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import computerModel from "../../public/model/untitled.glb";


const ThreeJSScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 2);
  
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio * 0.5);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;
    
  
    // Environment without setting the background
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load(
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/billiard_hall_1k.hdr",
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      }
    );
  
    function getScaleForDevice() {
      const width = window.innerWidth;
      const height = window.innerHeight;
    
      // Set a scale factor depending on the screen width
      if (width <= 600) {  // If it's a mobile screen size
        return 1.2; // smaller scale for mobile
      } else if (width <= 1024) {  // Tablet size
        return 2.0; // medium scale for tablet
      } else {  // Desktop size
        return 2.7; // larger scale for desktop
      }
    }


    // Load GLTF Model
    let model;
    const loader = new GLTFLoader();
    loader.load(
      computerModel,
      (gltf) => {
        model = gltf.scene;
        model.rotation.y = 0;

        const scaleFactor = getScaleForDevice();

        model.rotationAutoUpdate = false;
        model.scale.set(scaleFactor, scaleFactor, scaleFactor);
        model.position.set(0, -0.5, 0);
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );
  
    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = false;
    controls.enabled = false;
  
    // Resize Listener
    const handleResize = () => {
      
      const scaleFactor = getScaleForDevice();

      renderer.setSize(scaleFactor, scaleFactor);
      camera.aspect = scaleFactor / scaleFactor;
      camera.updateProjectionMatrix();
    };
  
    window.addEventListener("resize", handleResize);
  
    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
  
      if (model) {
        model.rotation.y += 0.01;  
      }
  
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  
    // Cleanup on Component Unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      controls.dispose();
    };
  }, []);
  

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }} className="canvas-height"
    />
  );
};

export default ThreeJSScene;
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import computerModel from "../../public/model/programmer_desktop_3d_pc.glb";
// import computerModel from "../../public/model/imac_computer.glb";
// import computerModel from "../../public/model/computer.glb";
import computerModel from "../../public/model/4k_monitor_lg_32_inches.glb";


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
    camera.position.set(0, 1, 2);
  
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
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
  
    // Load GLTF Model
    let model;
    const loader = new GLTFLoader();
    loader.load(
      computerModel,
      (gltf) => {
        model = gltf.scene;
        model.rotation.y = 0;
        model.rotationAutoUpdate = false;
        model.scale.set(3.5, 3.5, 3.5);
        model.position.set(0, -1, 0);
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
    controls.enableZoom = true;
  
    // Resize Listener
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
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
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
};

export default ThreeJSScene;
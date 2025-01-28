import { useState } from 'react';
import { Link } from 'react-router'
import weatherApp from '../assets/img/project-hover-img/weather_app.webp'

export default function OtherProject() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        
        setMousePosition({ x: offsetX, y: offsetY });
    };

    return (
        <>
            <ul className='flex flex-col gap-3 w-[500px]'>
                <li><h3 className='text-[24px] text-yellow-text font-poppins-semibold relative left-[-18px]'>Archives</h3></li>
                <li className='list-[circle] text-white font-poppins-regular'>
                    <Link to="https://agha-naveed.github.io/weather-app/" className='z-[200] group relative hover:text-yellow-text hover-text hover:px-[10px] transition-all' target='_blank' onMouseMove={handleMouseMove}>
                        Weather App
                        <div className='absolute top-5 left-10 w-[200px] z-[200]'>
                            <img src={weatherApp} className='w-full hidden group-hover:block' alt="Weather App Image" style={{
                                transform: `translate(${(mousePosition.x / 20) * 10 - 5}%, ${(mousePosition.y / 20) * 10 - 5}%)`,
                                }} />
                        </div>
                    </Link>
                </li>
                
                
            </ul>
            
            <ul className='flex flex-col gap-3 w-[500px]'>
                <li><h3 className='text-[24px] text-yellow-text font-poppins-semibold relative left-[-18px]'>Random</h3></li>
                <li className='list-[circle] text-white font-poppins-regular'>Old Portfolio</li>
            </ul>
        </>
    )
}

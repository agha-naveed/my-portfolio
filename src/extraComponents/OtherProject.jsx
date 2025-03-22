import { useState } from 'react';
import { Link } from 'react-router'
import weatherApp from '../assets/img/project-hover-img/weather_app.webp'
import twitterClone from '../assets/img/project-hover-img/twitter_clone.webp'
import passStrength from '../assets/img/project-hover-img/pass_strength.webp'
import oldPortfolio from '../assets/img/project-hover-img/old_portfolio.webp'

export default function OtherProject() {
    const [hover, setHover] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        
        setMousePosition({ x: offsetX, y: offsetY });
    };

    return (
        <div className='flex flex-wrap gap-4 relative z-20'>
            <ul className='flex flex-col gap-4 lg:w-[500px]'>
                <li><h3 className='text-[24px] text-yellow-text font-poppins-semibold relative left-[-18px]'>Archives</h3></li>
                <li className='list-[circle] text-white font-poppins-regular relative hover:z-[200]'>
                    <Link to="https://agha-naveed.github.io/weather-app/" className='z-[10] group relative hover:text-yellow-text hover-text hover:px-[10px] transition-all' target='_blank' onMouseMove={handleMouseMove}>
                        Weather App
                        <div className={`absolute top-6 hover:hidden left-10 w-0 transition-all h-[112.5px] group-hover:w-[200px] z-[200]`}>
                            <img src={weatherApp} className='w-full h-full object-cover' alt="Weather App Image" style={{
                                transform: `translate(${(mousePosition.x / 20) * 5}%, ${(mousePosition.y / 20) * 5}%)`,
                                }} />
                        </div>
                    </Link>
                </li>

                <li className='list-[circle] text-white font-poppins-regular relative hover:z-[200]'>
                    <Link to="https://agha-naveed.github.io/twitter/" className='z-[10] group relative hover:text-yellow-text hover-text hover:px-[10px] transition-all' target='_blank' onMouseMove={handleMouseMove}>
                        Twitter Clone
                        <div className='absolute top-6 hover:hidden left-10 w-0 transition-all h-[112.5px] group-hover:w-[200px] z-[200]'>
                            <img src={twitterClone} className='w-full h-full object-cover' alt="Twitter Clone" style={{
                                transform: `translate(${(mousePosition.x / 20) * 5}%, ${(mousePosition.y / 20) * 5}%)`,
                                }} />
                        </div>
                    </Link>
                </li>

                <li className='list-[circle] text-white font-poppins-regular relative hover:z-[200]'>
                    <Link to="https://agha-naveed.github.io/password-strength-checker/" className='z-[10] group relative hover:text-yellow-text hover-text hover:px-[10px] transition-all' target='_blank' onMouseMove={handleMouseMove}>
                        Password Strength Checker
                        <div className='absolute top-6 hover:hidden left-10 w-0 transition-all h-[112.5px] group-hover:w-[200px] z-[200]'>
                            <img src={passStrength} className='w-full h-full object-cover' alt="Password Strength Checker" style={{
                                transform: `translate(${(mousePosition.x / 20) * 5}%, ${(mousePosition.y / 20) * 5}%)`,
                                }} />
                        </div>
                    </Link>
                </li>
            </ul>
            
            <ul className='flex flex-col gap-4'>
                <li><h3 className='text-[24px] text-yellow-text font-poppins-semibold relative left-[-18px]'>Random</h3></li>
                <li className='list-[circle] text-white font-poppins-regular relative hover:z-[200]'>
                    <Link to="https://agha-naveed.github.io/old-portfolio/" className='z-[10] group relative hover:text-yellow-text hover-text hover:px-[10px] transition-all' target='_blank' onMouseMove={handleMouseMove}>
                        Old Portfolio
                        <div className='absolute top-6 hover:hidden left-10 w-0 transition-all h-[112.5px] group-hover:w-[200px] z-[200]'>
                            <img src={oldPortfolio} className='w-full h-full object-cover' alt="Agha Naveed Old Portfolio" style={{
                                transform: `translate(${(mousePosition.x / 20) * 5}%, ${(mousePosition.y / 20) * 5}%)`,
                                }} />
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

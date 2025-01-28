import React from 'react'
import Button from '../extraComponents/Button'
import SocialLogos from '../extraComponents/SocialLogos'

export default function Footer() {
    return (
        <footer className='relative'>
            <div className='w-full bg-light-gray pb-12'>
                <div className='md:flex grid items-center place-content-center md:gap-14 relative -top-[30px]'>
                    <div className='w-full h-1 bg-yellow-text md:block hidden'></div>
                    <div className='text-[40px] text-white font-poppins-semibold'>Contact</div>
                    <div className='md:w-full w-24 h-1 bg-yellow-text justify-self-center'></div>
                </div>
                <div className='container mx-auto py-6'>
                    <Button />
                </div>
            </div>
            <div className='w-full bg-dark-gray'>
                <div className='md:flex grid items-center md:gap-14 gap-2 relative -top-[20px]'>
                    <div className='w-full h-1 bg-yellow-text md:block hidden'></div>
                    <SocialLogos display={"flex"} hidden={"hidden"} margin={0} />
                    <div className='md:w-full w-24 h-1 bg-yellow-text justify-self-center'></div>
                </div>
                <p className='text-white font-poppins-regular text-center p-2 text-[15px]'>Designed @AghaNaveed_ 2025</p>
            </div>
        </footer>
    )
}
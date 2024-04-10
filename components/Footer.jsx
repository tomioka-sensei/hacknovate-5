import React from 'react'
import { FaGithub, FaLinkedin, FaYoutube, FaHashnode, FaTwitter, FaInstagram } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { Anton } from "next/font/google";
import Image from 'next/image'

const anton = Anton({
    subsets: ["latin-ext"],
    weight: ["400"],
});
function Footer() {
    return (
        <>
            <footer className={`px-6 sm:px-12 md:px-24 py-10 border-white gap-x-[25rem] mt-9 bg-black ${anton.className} tracking-widest border-t border-gray-500`}>
                <div className='grid grid-cols-1 grid-rows-[0.8fr_0.2fr] lg:grid-cols-2 lg:grid-rows-1 justify-items-center lg:justify-items-end'>
                    <div className='grid justify-items-center lg:justify-items-start w-[100%]'>
                        <img src="gta5.svg" alt="logo" width={200} height={50} className='mb-2'/>

                        <div className='flex flex-col md:flex-row justify-center items-center gap-8 my-5'>
                            <p className='text-white text-[16px]'>About</p>
                            <p className='text-white text-[16px]'>Prizes</p>
                            <p className='text-white text-[16px]'>Sponsors</p>
                            <p className='text-white text-[16px]'>Team</p>
                            <p className='text-white text-[16px]'>Events</p>
                            <p className='text-white text-[16px]'>Register</p>
                        </div>

                        <div className='w-[100%] justify-items-center grid lg:justify-items-start'>
                            <div className='flex items-center justify-center gap-1'>
                                <MdAlternateEmail className='text-white' />
                                <p className='text-white'>hacknovate@abesit.edu.in</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='text-white text-center text-lg mb-2'>Find us at</p>

                        <div className='flex justify-center items-center gap-4'>
                            <FaTwitter className='text-gray-500 transition-all text-3xl hover:text-blue-500 hover:scale-90' />
                            <FaLinkedin className='text-gray-500 transition-all text-3xl hover:text-indigo-400 hover:scale-90' />
                            <IoLogoDiscord className='text-gray-500 transition-all text-3xl hover:text-indigo-600 hover:scale-90' />
                            <FaYoutube className='text-gray-500 transition-all text-3xl hover:text-red-600 hover:scale-90' />
                            <FaInstagram className='text-gray-500 transition-all text-3xl hover:text-pink-600 hover:scale-90' />
                        </div>
                    </div>
                </div>

                <hr className='mt-6' />

                <div className='mt-6'>
                    <div className='w-full'>
                        <p className='text-sm text-white text-center md:text-left'>© Copyright ABESIT. All Right Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
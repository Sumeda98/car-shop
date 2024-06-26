import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from "@/components";

const Navbar = () => {
  return (
    <header className='w-full  z-10 bg-white border-b  fixed'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href='/' className='flex justify-center items-center'>
                <Image 
                src='/logo.svg'
                alt='Dream Car'
                width={118}
                height={18}
                className='object-contain'
                />
            </Link>
            <CustomButton
            title='Sign In'
            btnType='button'
            containerStyles=' text-white rounded-full bg-primary-blue min-w-[130px]'
            />
        </nav>
    </header>
  )
}

export default Navbar
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MainView() {
  return (
    <div className='flex flex-row m-3 p-3'>
        <div className='flex flex-col text-[#fdf0d5] w-1/2 text-center m-auto'>
            <h4 className='text-2xl'>Hello, I'm Kutubu.</h4>
            <h1 className='text-6xl text-[#ffd60a]'>Frontend <br/> Developer</h1>
            <Link href='./' className='text-2xl underline mt-2'>Contact Me</Link>
        </div>
        <div className='w-1/2 ml-8'>
            <Image
            src="/kutubu.jpeg"
            alt='my picture'
            width='300'
            height='300'
            className='border-none rounded-3xl hover:translate-x-2'
            />
        </div>
      
    </div>
  )
}

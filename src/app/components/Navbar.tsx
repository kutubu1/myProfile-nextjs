import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className='w-full flex sm:flex-row flex-nowrap text-2xl justify-between p-3'>
        <div className='font-bold text-inherit border-none rounded-md mt-2'>
            <h3 className='p-1 text-[#fdf0d5] text-center border-none rounded-full bg-inherit hover:bg-[#669bbc]'>Kutubu Coder</h3>
        </div>
        <div className='mt-2'>
            <ul className='text-[#fdf0d5] text-center flex flex-row'>
                <li><Link href="./" className='p-1 text-center m-3 border-none rounded-full bg-inherit hover:bg-[#669bbc]'>Home</Link></li>
                <li><Link href="./" className='p-1 text-center m-3 border-none rounded-full bg-inherit hover:bg-[#669bbc]'>About</Link></li>
                <li><Link href="./" className='p-1 text-center m-3 border-none rounded-full bg-inherit hover:bg-[#669bbc]'>Work</Link></li>
            </ul>
        </div>
        <div className='mt-2'>
            <Image
            src="/github-2.png" 
            alt="my profile picture" 
            width="50"
            height="50"
            />
        </div>
        
      
    </div>
  )
} 

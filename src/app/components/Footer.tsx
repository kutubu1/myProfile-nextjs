import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-row justify-center'>
        <div className='text-[#fdf0d5] text-center m-4'>
            <h2 className='font-bold text-3xl font-sans'>HTML</h2>
            <p className='text-xs underline'>Experience over 5 years</p>
        </div>
        <div className='text-[#fdf0d5] text-center m-4'> 
            <h2 className='font-bold text-3xl font-sans'>Tailwind CSS</h2>
            <p className='text-xs underline'>Expereince over 3 years</p>
        </div>
        <div className='text-[#fdf0d5] text-center m-4'>
            <h2 className='font-bold text-3xl font-sans'>JAVASCRIPT</h2>
            <p className='text-xs underline'>Experience over 6 months</p>
        </div>

        <div className='text-[#fdf0d5] text-center m-4'>
            <h2 className='font-bold text-3xl font-sans'>React/NextJS</h2>
            <p className='text-xs underline'>Experience over 3 months</p>
        </div>
      
    </div>
  )
}

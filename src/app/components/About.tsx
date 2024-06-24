import React from 'react'
import { MdHorizontalRule } from "react-icons/md";

export default function About() {
  return (
    <div className='mb-5 mt-5'>
      <div className='flex flex-row'>
        <div className='1/6'></div>
        <h2 className='text-[#fdf0d5] w-1/6 text-right'>about</h2>
        <p className='w-4/6 mr-5'><MdHorizontalRule className='w-full h-2 bg-white m-2'/></p>
       
      </div>
      <div className='flex'>
        <div className='w-2/6'></div>
        <p className='text-[#fdf0d5] text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptatum itaque similique fugiat laborum possimus, eveniet praesentium eum distinctio. Blanditiis vitae, aperiam molestiae itaque alias natus odit fugit rerum eius?</p>
        <div className='w-2/6'></div>
      </div>
    </div>
  )
}

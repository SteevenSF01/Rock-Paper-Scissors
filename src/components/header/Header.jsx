import React from 'react'
import Logo from './../../images/logo.svg'

export default function 
() {
  return (
    <div className='border-2 border-[#606e85] mt-[40px] rounded-xl w-[20rem] h-[7rem] flex justify-between items-center p-4 '>
        <img src={Logo} alt="" className='w-[33%] h-[80%] ' />
        <div className='w-[30%] h-[100%] bg-white rounded-xl leading-6 flex flex-col justify-center items-center '>
            <h1 className='text-[12px] text-[#2a46c0] font-semibold tracking-widest '>SCORE</h1>
            <p className='text-[36px] font-semibold pb-2 text-[#3b4363] shadow-2xl '>12</p>
        </div>
    </div>
  )
}

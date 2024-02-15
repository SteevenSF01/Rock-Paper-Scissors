import React from 'react'
import PAPER from './../../images/icon-paper.svg'

export default function Paper() {
  return (
    <button className='bg-white w-[35%] h-[35%] flex justify-center items-center mt-5 ms-5 rounded-full  border-[#4665F3ff] border-[10px] [box-shadow:0px_5px_5px_0px_rgba(0,0,0,0.75)]'>
        <img src={PAPER} alt="" className='w-[45%] ' />
    </button>
  )
}

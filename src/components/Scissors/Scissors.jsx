import React from 'react'
import SCISSORS from './../../images/icon-scissors.svg'

export default function Scissors() {
  return (
    <button className='bg-white w-[110px] h-[110px]  flex justify-center items-center me-5 mt-5 rounded-full  border-[#EDA620ff] border-[10px] [box-shadow:0px_5px_5px_0px_rgba(0,0,0,0.75)]'>
        <img src={SCISSORS} alt="" className='w-[45%] ' />
    </button>
  )
}

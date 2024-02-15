import React from 'react'
import ROCK from './../../images/icon-rock.svg'

export default function Rock() {
  return (
    <button className='bg-white w-[110px] h-[110px]  flex justify-center items-center  rounded-full  border-[#DE3B56ff] border-[10px] [box-shadow:0px_5px_5px_0px_rgba(0,0,0,0.75)]'>
        <img src={ROCK} alt="" className='w-[45%] ' />
    </button>
  )
}

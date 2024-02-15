import React from 'react'
import RulesGame from './../../images/image-rules.svg'
import Close from './../../images/icon-close.svg'

export default function Rules() {
  return (
    <div className='bg-white w-[100vw] h-[100vh] flex items-center'>
        <div className=" w-[100%] h-[75%] flex flex-col justify-between items-center ">
            <h1 className='text-[#3b4363] text-[30px] font-semibold '>RULES</h1>
            <img src={RulesGame} alt="" className='w-[75%] ' />
            <img src={Close} alt="" className='w-[5%] ' />
        </div>
    </div>
  )
}

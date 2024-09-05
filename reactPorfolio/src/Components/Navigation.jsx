import React from 'react'

function Navigation() {
  return (
    <div className='w-full flex items-center justify-between  px-8 p-5 bg-slate-200 h-[80px] shadow-md'> 
      <h2 className='font-sans font-extrabold text-[24px]' >Where in the World?</h2>
      <span className='flex gap-2 items-center justify-center'>
      <img src="" alt="icon" />
      <p className='font-sans font-semibold tex-[16px]'>Dark Mode</p>
      </span>
     
    </div>
  )
}

export default Navigation

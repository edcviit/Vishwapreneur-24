import React from 'react'
import svgg from './atom-motion-css-preloader.svg'
import './loader1.css'
const Loader1 = () => {
  return (
    <div className='flex flex-col h-screen w-screen  items-center justify-center loader_screen ' >
      <img src={svgg}  alt="Loading"  />
      {/* <h1 class="linear-wipe main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8" style={{color:"#655FD1"}}>VISHWAPRENEUR'24...</h1> */}
    </div>
  )
}

export default Loader1

import React from 'react'

const LeftPanel = () => {
  return (
    <div className="border-2 border-black h-screen bg-black flex justify-end">
        <div className=" mx-auto flex flex-col items-center justify-center gap-3">
            <img src='./logo.png' alt='logo' />
            <h1 className='font-semibold text-white'>Code Deck</h1>
            <h3 className='font-semibold text-white'>Code. Compile. Debug</h3>

        </div>
    </div>

  )
}

export default LeftPanel
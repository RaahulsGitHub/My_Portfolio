import React from 'react'
import Aside from './Aside/Aside'
import Main from './Main/Main'

const Body = () => {
  return (
    <div className='bg-[#14131a] flex w-screen h-screen'>
        <Aside/>
        <Main/>
    </div>
  )
}

export default Body
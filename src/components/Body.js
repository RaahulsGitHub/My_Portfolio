import React, { useState } from 'react'
import Aside from './Aside/Aside'
import Main from './Main/Main'
import MenuContext from './utils/MenuContext'

const Body = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(true)


  return (
    <MenuContext.Provider value={{showMenu: isMenuOpen, setIsMenuOpen}}>
    <div className='bg-[#14131a] flex w-screen h-screen relative'>
        <Aside/>
        <Main/>
    </div>
    </MenuContext.Provider>
  )
}

export default Body
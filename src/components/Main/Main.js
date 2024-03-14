import React, { useContext, useState } from 'react'
import MenuContext from '../utils/MenuContext'


const Main = () => {

    const {showMenu, setIsMenuOpen} = useContext(MenuContext)
   
    const onClickMenu = ()=>{
        setIsMenuOpen(!showMenu)
    }
  return (
    <div className={'border w-[80%] h-full flex justify-end'}>
        
        <div>
            <button onClick={()=>onClickMenu()} className="mt-[100px] text-[#3a3942] py-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="flex  cursor-pointer hover:text-[#8b8a91] transition-colors"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        
    </div>
  )
}

export default Main
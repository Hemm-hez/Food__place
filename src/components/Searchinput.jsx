import React from 'react'
import { useGlobalContext } from '../hooks/context'
import { useRef } from 'react';

const Searchinput = () => {
  const {searchValue, setSearchValue} = useGlobalContext();
  const whenClicked =(e)=>{
    e.preventDefault()
  }
  const searchInfo =()=>{
    setSearchValue(inputContainer.current.value)
  }
  const inputContainer= useRef()
  return (
   <>
   <p className='text-center fw-bold fs-4 text-success my-2'>Search for Your Favorite Meals</p>
   <div className='search_box' onSubmit={whenClicked}>
      <input type="text" 
      ref={inputContainer} onChange={searchInfo} placeholder='Explore our meals shop'/>
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
   </>
  )
}

export default Searchinput
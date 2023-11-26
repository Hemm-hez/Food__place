import React from 'react'
import bg_image from '../assets/green_pp.jpg'

const Herosection = () => {
  return (
    <div className='bg_text' style={{backgroundImage:`url(${bg_image})`}}>
      <div className="text_id">
        <p >Healthy Foods</p>
        <p className='text-light fs-1 fw-semibold'>Explore different meals</p>
        <button><a href="#below">See more Below</a></button>
      </div>
    </div>
  )
}

export default Herosection
import React from 'react'
import '../assets/load.css'

const Loading = () => {
  return (
    <div className='loader'>
        <span className='loader_dot' style={{"--d":"400ms"}}></span>
        <span className='loader_dot' style={{"--d":"800ms"}}></span>
        <span className='loader_dot' style={{"--d":"1200ms"}}></span>
        <span className='loader_dot' style={{"--d":"1600ms"}}></span>
        <span className='loader_dot' style={{"--d":"2000ms"}}></span>
    </div>
  )
}

export default Loading
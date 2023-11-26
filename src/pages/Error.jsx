import React from 'react'
import error from '../assets/404 Error-bro.png'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error_four'>
      <div text>
      <img src={error} alt="" />
      <h4>Error Loading page.</h4>
      <button><a href="/">Go to Homepage</a></button>
      </div>
    </div>
  )
}

export default Error
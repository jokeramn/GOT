import React from 'react'
import './errorMessage.css'
import img from './Joffrey.jpg'
const ErrorMessage = () => {
  return (
    <>
      <img src={img} alt='err' className='error'></img>
      <span className='error-message'>Something goes wrong</span>
    </>
  )
}

export default ErrorMessage
import React from 'react';
import './Button.css'

const Button = ({ name, link }) => {
  return (
    <a href={link}><button className='button'>{name}</button></a>
  )
}

export default Button
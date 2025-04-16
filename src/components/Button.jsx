import React from 'react';
import './Button.css'

const Button = ({ name, link, target }) => {
  return (
    <a href={link} target={target}><button className='button'>{name}</button></a>
  )
}

export default Button
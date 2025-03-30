import React from 'react'

function Button({className, text}) {
  return (
    <button className={`rounded-full cursor-pointer ${className}`}>{text}</button>
  )
}

export default Button
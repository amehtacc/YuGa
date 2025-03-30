import React from 'react'

function Button({className, text}) {
  return (
    <button className={`rounded-full ${className}`}>{text}</button>
  )
}

export default Button
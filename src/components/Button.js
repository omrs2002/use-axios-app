import React, { useRef } from 'react'

export const Button = ({counter,label}) => {
const renderRef = useRef(0);
console.log(renderRef.current++);
  return (
    <button className='btn btn-primary mt-3'
                onClick={counter}>{label}</button>

  )
}

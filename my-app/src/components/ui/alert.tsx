import React from 'react'

type AlertProps = {
  children: React.ReactNode
}

const Alert = ({ children}: AlertProps) => {
  return (
    <div className='border-indigo-500 border rounded bg-red-200'>alert</div>
  )
}

export {Alert};
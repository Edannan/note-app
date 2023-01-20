import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='bg-red-700 flex justify-center items-center py-2.5 max-w-4xl mx-auto rounded-md'>{children}</div>
  )
}

export default Modal
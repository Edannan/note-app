import React from 'react'

const Button = ({children, lever}) => {
  return (
    <button className='bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-50 dark:hover:bg-slate-200 dark:text-black px-4 py-1 rounded-md text-xs' onClick={lever}>{children}</button>
  )
}

export default Button
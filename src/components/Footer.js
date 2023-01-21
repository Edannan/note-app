import React from 'react'
// import {FaRegCopyright} from 'react-icons/fa'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className='bg-gray-600 text-white flex justify-center items-center fixed bottom-0 w-full text-xs p-3'>
    <p>Created By<span className='hover:text-indigo-700'><a href="https://www.linkedin.com/in/emmanuel-danso-annan-2aa777226/"> Emmanuel Danso Annan </a></span>| ©️ {year} All rights reserved.</p>
    </footer>
  )
}

export default Footer
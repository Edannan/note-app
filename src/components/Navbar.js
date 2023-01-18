import React from 'react'
import Button from './Button';
import { useState, useEffect } from 'react';
import {BsFillMoonFill, BsSun} from 'react-icons/bs';

const Navbar = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className='h-14 bg-gradient-to-r from-purple-500 to-pink-500 sticky top-0 z-10'>
      <section className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
      <div><h1><span className='text-xl'>🗈</span> NotesApp</h1></div>
      <Button lever={handleThemeSwitch}>{theme === "dark" ?<BsSun/>:<BsFillMoonFill/>}</Button>
      </section>
      </nav>
  )
}

export default Navbar
import React from 'react'
// import { MdSearch } from 'react-icons/md';

const Search = ({handleSearch}) => {
  return (
    <div className='max-w-4xl mx-auto p-4 flex justify-center items-center'>
    {/* <MdSearch /> */}
    <input className='w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        type='text'
        placeholder='Type to search...'
        onChange={(event) => handleSearch(event.target.value)}
    />
</div>
  )
}

export default Search
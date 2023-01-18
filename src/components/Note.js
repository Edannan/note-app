import React from 'react'
import {MdDeleteForever} from 'react-icons/md';
import Button from './Button';

const Note = ({id, text, date, noteDel}) => {

  return (
    <div className='bg-yellow-400 text-black rounded-md p-4 flex justify-between flex-col h-44 min-h-full whitespace-pre-wrap overflow-auto break-words'>
        <span className='text-sm'>{text}</span>
        <div className='flex justify-between items-baseline'>
        <small><strong>{date}</strong></small>
        <Button lever={() => noteDel(id)}><MdDeleteForever /></Button>

        </div>

    </div>
  )
}

export default Note
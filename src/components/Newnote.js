import React, { useState } from 'react'
import Button from './Button'
import {TfiSave} from 'react-icons/tfi'

const Newnote = ({addNote}) => {

  const [notetext, setNotetext] = useState('')
  const characterCount = notetext.length;

  const handleChange = (event) => {
		// if (characterLimit - event.target.value.length >= 0) {
			setNotetext(event.target.value);
		// }
	};

  const saveClick = () => {
		if (notetext.trim().length > 0) {
			addNote(notetext);
			setNotetext('');
		}
  }
    
  return (
    <div className='bg-indigo-700 rounded-md p-4 flex justify-between flex-col h-44 min-h-full whitespace-pre-wrap text-sm'>
        <textarea className='focus:outline-none resize-none border-none bg-indigo-700'
				rows='8'
				cols='10'
				placeholder='Type to add a note...' value={notetext} onChange={handleChange}
			></textarea>
        <div className='flex justify-between items-center'>
        <small><strong>{characterCount} characters entered..</strong></small>
        <Button lever={saveClick}><TfiSave /></Button>

        </div>

    </div>
  )
}

export default Newnote
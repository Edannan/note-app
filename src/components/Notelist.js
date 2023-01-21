import React from 'react'
import Note from './Note'
import Newnote from './Newnote'

const Notelist = ({notes}) => {
  return (
    <div className='max-w-4xl mx-auto p-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 font-mono'>
      {notes.map((note)=>{
        return(
            <Note key={note.id} {...note} />   
        )
    })}
    <Newnote />
    </div>
  )
}

export default Notelist
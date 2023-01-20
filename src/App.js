import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Notelist from './components/Notelist';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react';

function App() {
  const [searchWord, setSearchWord] = useState('');
  const [mode, setMode] = useState(false);

  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: 'Today is my Dad\'s birthday!',
    date: '05/01/2022',
  },
  {
    id: nanoid(),
    text: 'Today is my Mum\'s birthday',
    date: '10/07/2022',
  },
  {
    id: nanoid(),
    text: 'Today is my bestfriend\'s birthday!',
    date: '09/03/2022',
  },
  {
    id: nanoid(),
    text: 'Today is my birthday',
    date: '12/11/2022',
  }])

  useEffect(() => {
		localStorage.setItem(
			'danso-note-app',
			JSON.stringify(notes)
		);
	}, [notes]);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('danso-note-app')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

  useEffect(()=>{
    document.title = `Danso's noteApp(${notes.length})`
  }, [notes])

  useEffect(()=>{
    setTimeout(()=>{
      setMode(false)
    }, 3000)
  }, [mode])

  const noteAdd = (text)=>{
    const date = new Date();
    const newest = {id:nanoid(), text:text, date:date.toLocaleDateString()}
    const newNotess = [...notes, newest];
    // console.log(newNotess);
    setNotes(newNotess);
  }

  const delNote = (id) =>{
    const filtered = notes.filter((note) => note.id !== id)
    setNotes(filtered)
  }

  return (
    <div className='bg-white text-black dark:bg-black dark:text-white min-h-screen pb-20'>
      <Navbar />
      <Search handleSearch={setSearchWord}/>
      {mode && <Modal>Please enter text to create a note</Modal>}
      <Notelist notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchWord.toLowerCase())
					)} noteAdd={noteAdd} noteDel={delNote} setMode={setMode}  />
      <Footer />
    </div>
  );
}

export default App;
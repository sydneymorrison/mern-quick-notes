import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NoteForm from '../../components/NoteForm/NoteForm';
import NoteList from '../../components/NoteList/NoteList'
import { getAllNotes } from '../../utilities/notes-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [noteItems, setNoteItems] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
    try {
      const notes = await getAllNotes();
      setNoteItems(notes);
    } catch (error) {
      console.log('Failed to retrieve notes:', error);
    }
  }
    fetchNotes();
}, []);


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <NoteForm user={user} setUser={setUser} />
            <NoteList user={user} setUser={setUser} noteItems={noteItems} />
          </>
          :
          <AuthPage setUser={setUser} /> 
      }
    </main>
  );
}

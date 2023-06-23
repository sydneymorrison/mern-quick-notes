import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NoteForm from '../../components/NoteForm/NoteForm';
import NoteListPage from '../NoteListPage/NoteListPage'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <NoteForm />
            {/* <NoteListPage /> */}
          </>
          :
          <AuthPage setUser={setUser} /> 
      }
    </main>
  );
}

import { useState, useEffect } from 'react';
// import * as notesAPI from '../../utilities/notes-api'
import NoteListItem from '../NoteListItem/NoteListItem';
// import { getAllNotes } from '../../utilities/notes-api';


export default function NoteList( { noteItems }) {
  
    return (
      <div className="noteList">

        {noteItems.length > 0 ? (
          //Render the list of notes
          <ul>
            {noteItems.map((note) => (
              <NoteListItem key={note._id} noteItem={note} />
            ))}
          </ul>
        ) : (
          //Render no notes
          <p>No Notes Yet!</p>
        )}
      </div>
    );
  }
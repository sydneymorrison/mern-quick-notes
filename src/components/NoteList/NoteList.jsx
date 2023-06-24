import { useState, useEffect } from 'react';
import NoteListItem from '../NoteListItem/NoteListItem';


export default function NoteList( { noteItems }) {
  
    return (
      <div className="noteList">

        {noteItems.length > 0 ? (
          //Render the list of notes
          <div className="noteListContainer">
            {noteItems.map((note) => (
              <NoteListItem key={note._id} noteItem={note} />
            ))}
          </div>
        ) : (
          //Render no notes
          <p>No Notes Yet!</p>
        )}
      </div>
    );
  }
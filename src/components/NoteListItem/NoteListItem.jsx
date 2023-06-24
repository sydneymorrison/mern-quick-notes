import React from 'react';

export default function NoteListItem({ noteItem }) {
  
    return (
        <div className="noteListItem">
            <div> Note Text: {noteItem.text}</div>
            <div> Created At: {new Date(noteItem.createdAt).toLocaleString()}</div>
      </div>
  );
}
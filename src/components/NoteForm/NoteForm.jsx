import { useState } from 'react';
import { createNote } from '../../utilities/notes-api';


export default function NoteForm( { user, setUser }) {

    const [formData, setFormData] = useState({
        note: "",
    });

    // Create Handle Function
    function handleChange(evt) {
    evt.preventDefault();
    const newFormData = { ...FormData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
    }

    //Submit Form
    async function handleSubmit(evt) {
        evt.preventDefault();
        //Send a post request to create a new note
        const newNote = await createNote({ note: formData.note })
        //Clear the form data
        setFormData({ note: ''});

    }


    return(
        <div className="formContainer"> 
            <h1>Add A New Note</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputContainer">
                {/* //Add Input Field */}
                <textarea
                    className="textAreaInput"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                >
                </textarea>

                {/* //Add Add Note Button */}
                <button 
                className="button"
                type="submit" 
                >
                ADD NOTE
                </button>
                </div>
            </form>
        </div>
    );
}
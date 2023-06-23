import { useState } from 'react';


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

    



    return(
        <div> 
            <h1>Add A New Note</h1>
            <form>
                {/* //Add Input Field */}
                <textarea
                    name="note"
                    className="textAreaInput"
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
            </form>
        </div>
    );
}
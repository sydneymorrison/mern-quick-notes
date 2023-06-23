import sendRequest from "./send-request";
const BASE_URL = '/api/notes';


//Create a Note
export async function createNote(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
  }


//Get all of the Notes
  export async function getAllNotes() {
    return sendRequest(BASE_URL);
  }
  
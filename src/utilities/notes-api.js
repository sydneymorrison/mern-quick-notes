import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function createNote(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
  }
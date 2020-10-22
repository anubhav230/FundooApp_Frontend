import axios from 'axios';

const URL = "http://localhost:4000"

class NoteService {
    createNote(token) {
        return axios.post(URL + '/create-note', token)
    }

    getNote(data) {
        return axios.post(URL + '/get-note', data)
    }
}

export default new NoteService();
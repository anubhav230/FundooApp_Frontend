import axios from 'axios';

const URL = "http://localhost:4000"

class NoteService {
    createNote(data) {
        return axios.post(URL + '/create-note', data)
    }
}

export default new NoteService();
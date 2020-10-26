import axios from 'axios';

const URL = "http://localhost:4000"

class NoteService {
    create(token) {

        return axios.post(URL + '/create-note', token)
    }

    get(data) {
        return axios.post(URL + '/get-note', data)
    }

    delete(noteData) {
        return axios.post(URL + '/delete-note', noteData)
    }

    update(noteData) {
        return axios.put(URL + '/update-note', noteData)
    }
}

export default new NoteService();
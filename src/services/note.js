import axios from 'axios';

const URL = "http://localhost:4000"

class NoteService {
    createNote(token) {

        return axios.post(URL + '/create-note', token)
    }

    getNote(data) {
        console.log("////" + process.env)
        return axios.post(URL + '/get-note', data)
    }

    deleteNote(nodeData) {
        let data = nodeData
        console.log(data)
        return axios.delete(URL + '/delete-note', nodeData)
    }
}

export default new NoteService();
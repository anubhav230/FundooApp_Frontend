import axios from 'axios';

const URL = "http://localhost:4000"

class NoteService {
    create(token) {

        return axios.post(URL + '/create-note', token)
    }

    get(data) {
        console.log("////" + process.env)
        return axios.post(URL + '/get-note', data)
    }

    delete(nodeData) {
        return axios.post(URL + '/delete-note', nodeData)
    }
}

export default new NoteService();
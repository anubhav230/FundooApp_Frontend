import Axios from 'axios';

const URL = "http://localhost:4000"

class UserService {

    signin(data) {
        return Axios.post(URL + '/login', data)
    }

    register(data) {
        // console.log(data)
        return Axios.post(URL + '/register', data)
    }

    forgetpassword(data){
        console.log(data)
        return Axios.post(URL + '/forgot-password', data)
    }
}

export default new UserService();
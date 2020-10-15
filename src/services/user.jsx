import axios from 'axios';

const URL = "http://localhost:4000"

class UserService {

    signin(data) {
        return axios.post(URL + '/login', data)
    }

    register(data) {
        // console.log(data)
        return axios.post(URL + '/register', data)
    }

    forgetpassword(data){
        console.log(data)
        return axios.post(URL + `/forgot-password`, data)
    }

    resetpassword(data){
        console.log('////fron axios'+data)
        return axios.post(URL + `/reset-password/token=`, data)
    }


}

export default new UserService();
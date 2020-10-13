import Axios from 'axios';

const URL = "http://localhost:4000"

class UserService {
    state = {};

    // ApiCall(data, url, method){
    //     return new Promise((resolve, reject)=>{
    //         Axios({method, url, data}
    //         ).then((response)=>{
    //             resolve(response);
    //             console.log(response);
    //         })
    //         .catch((err)=>{
    //             reject(err);
    //         });
    //     });
    // }

    // signin(data){
    //     return this.ApiCall(data, `${URL}/login`,"POST");
    // }

    signin(data) {
        console.log(data)
        return new Promise((resolve, reject) => {
            Axios.post(URL+'/login',data)
             .then((response) => {
                 console.log(response)
                resolve(response)
            })
             .catch((error) => {
                reject(error)
            })
      })
    }

    register(data) {
        console.log(data)
        return new Promise((resolve, reject) => {
            Axios.post(URL+'/register',data)
             .then((response) => {
                 console.log(response)
                resolve(response)
            })
             .catch((error) => {
                reject(error)
            })
      })
    }



}

export default new UserService();

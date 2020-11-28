import axios from "axios";
// import dotenv from 'dotenv'
const url = "/api/users/";

// const api = axios.create({
//     baseURL: url,
// });

class postUsers {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    resolve(response.data.data)
                })
                .catch(error => reject(error));
        });
    }

    static getOneUser(_id) {
        return new Promise((resolve, reject) => {
            axios.get(url + _id)
                .then((result) => {
                    console.log(result);
                    resolve(result.data.data);
                })
                .catch(err => reject(err));
        })
    }

    static createUser(data){
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then((result) => {
                    console.log(result);
                    resolve(result)
                })
                .catch(err => reject(err));
        })
    }

    static loginUser() {
        return new Promise((resolve, reject) => {
            axios.post(url)
                .then((result) => {
                    console.log(result);
                    resolve(result.data);
                })
                .catch(err => reject(err));
        })
    }
}

export default postUsers; 
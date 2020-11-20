import axios from "axios";
// import dotenv from 'dotenv'
const url = "/api/users/";

// const api = axios.create({
//     baseURL: url,
// });

class postUsers {
    static getUsers() {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    resolve(response.data.data)
                })
                .catch(error => reject(error));
        });
    }
}

export default postUsers; 
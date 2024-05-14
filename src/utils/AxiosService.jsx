import axios from "axios"

const AxiosService = axios.create({
    baseURL:"https://recipe-app-0vb7.onrender.com",
    headers:{
        "Content-Type":"application/json"
    }
})


export default AxiosService


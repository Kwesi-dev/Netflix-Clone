import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://kwesidevnetflix.herokuapp.com/api/"
})
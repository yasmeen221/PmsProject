import axios from "axios";

//instead os wrirting the base url in every request
export const axiosInstance = axios.create({
    baseURL: ""
})
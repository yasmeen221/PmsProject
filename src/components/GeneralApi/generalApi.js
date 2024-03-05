import axios from "axios";
const Url = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: Url,
});

export default axiosInstance;

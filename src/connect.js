import axios from "axios";
const baseUrl = axios.create({
    baseURL: import.meta.env.VITE_BEURL
});
export default baseUrl
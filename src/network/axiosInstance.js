import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "0ee420ebc88af79d1ef074481bb9251d"
    }
});

export default axiosInstance;
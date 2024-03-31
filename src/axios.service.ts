import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((req: any) => {
    const BaseUrl = 'https://unogs-unogs-v1.p.rapidapi.com';
    req.url = BaseUrl + req.url;
    req.headers = {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
    }
    req.params = {
        order_by: 'date',
        type: 'movie'
    }
    return req;
})
export default axiosInstance;
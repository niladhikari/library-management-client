import axios from "axios";

const instance = axios.create({
    baseURL: 'https://library-management-server-three.vercel.app',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    
  });

const useAxios = () => {
    return instance;

};

export default useAxios;
import axios, { AxiosResponse } from "axios";

export const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Accept: 'application/json'
    }
});

export const api = {
    get: (url:string):Promise<AxiosResponse> => {
        return instance.get(url)
    },
    post: (url: string, body:unknown):Promise<AxiosResponse> =>{
        return instance.post(url, body)
    }
}
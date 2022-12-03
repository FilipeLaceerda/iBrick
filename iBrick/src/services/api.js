import axios from 'axios';

const { HOST } = '10.0.0.2';

export const user = axios.create({
    baseURL: `http://0.0.0.0:3001`
})

export const feeds = axios.create({
    baseURL: `http://10.0.0.2:3002`
})

export const details = axios.create({
    baseURL: `http://0.0.0.0:3003`
});
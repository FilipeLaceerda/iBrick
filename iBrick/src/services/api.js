import axios from 'axios';

const { HOST } = process.env;

export const user = axios.create({
    baseURL: `http://0.0.0.0:3001`
})

export const feeds = axios.create({
    baseURL: 'http://172.21.0.5:3002'
})

export const details = axios.create({
    baseURL: `http://0.0.0.0:3003`
});
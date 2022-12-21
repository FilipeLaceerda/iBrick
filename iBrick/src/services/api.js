import axios from 'axios';

export const user = axios.create({
    baseURL: `http://10.0.2.2:3001`
})

export const feeds = axios.create({
    baseURL: 'http://10.0.2.2:3002'
})

export const details = axios.create({
    baseURL: `http://10.0.2.2:3003`
});
import axios from 'axios';

export const api = axios.create({
    baseURL: '' // IP + Localhost door
});
// initializes the api to conect to nodejs server

import { create } from 'apisauce';

const api = create({
    baseURL: 'http://10.0.2.2:8080'
})

export default api;

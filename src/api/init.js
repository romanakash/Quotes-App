// initializes the api to conect to nodejs server

import { create } from 'apisauce';

const api = create({
    baseURL: 'https://q-s.herokuapp.com/'
})

export default api;

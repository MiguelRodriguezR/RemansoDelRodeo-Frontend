import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'https://remansodelrodeo.herokuapp.com/'
});

export default clientAxios;
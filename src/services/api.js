import axios from 'axios'

const api = axios.create({
    baseURL: 'https://projeto-api-node-js-e-bd.onrender.com'
})

export default api
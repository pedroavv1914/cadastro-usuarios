import axios from 'axios'

const api = axios.create({
    baseURL: 'https://projeto-api-node-js-e-bd.vercel.app'
})

export default api
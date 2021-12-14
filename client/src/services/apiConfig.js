import axios from 'axios';

// 'https://martial-mart-api.herokuapp.com/'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://martial-mart-api.herokuapp.com/' : 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl,
})

export default api
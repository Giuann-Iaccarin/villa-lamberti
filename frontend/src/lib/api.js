import axios from 'axios'

const api = axios.create({ baseURL: '/api' })

export const sendContact = (data) => api.post('/contact', data)
export const getInfo = () => api.get('/info')

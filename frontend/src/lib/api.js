import axios from 'axios'

const api = axios.create({ baseURL: '/api' })

export const sendContact      = (data) => api.post('/contact', data)
export const sendBooking      = (data) => api.post('/booking', data)
export const checkAvailability = (room, checkIn, checkOut) =>
  api.get('/availability', { params: { room, checkIn, checkOut } })
export const getInfo = () => api.get('/info')

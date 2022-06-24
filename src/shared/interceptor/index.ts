import axios from 'axios'

const axiosInterceptor = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export default axiosInterceptor

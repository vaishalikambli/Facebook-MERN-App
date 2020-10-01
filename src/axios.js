import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://fb-mern-app.herokuapp.com'
})

export default instance
import axios from 'axios'

const api = axios.create({

     baseURL: './api.json'

})

export default api

// Here we save the api which is serving the appliction

import axios from 'axios'

const api = axios.create({

     baseURL: 'https://rtavaresramos.github.io/english.json/#'
    //  baseURL: 'https://opentdb.com/api.php?amount=30&category=9&type=multiple'

})

export default api

// Here we save the api which is serving the appliction

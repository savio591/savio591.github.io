import Axios from 'axios'

const savilFetch = Axios.create({
    baseURL: 'https://raw.githubusercontent.com/savio591/savio591/main/'
})

export default savilFetch
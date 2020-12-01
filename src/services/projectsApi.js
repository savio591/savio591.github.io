import Axios from 'axios'

const projectsFetch = Axios.create({
    baseURL: 'https://raw.githubusercontent.com/savio591/savio591/main/projects'
})

export default projectsFetch
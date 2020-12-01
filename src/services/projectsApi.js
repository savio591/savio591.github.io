import Axios from 'axios'

const projectsGet = Axios.create({
    baseURL: 'https://raw.githubusercontent.com/savio591/savio591/main/projects'
})

export default projectsGet
import axios from 'axios'
import store from '@/store'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            console.log("有token，在请求头中加入token")
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => { return response },
    error => {
        console.log("err:", error)
        return Promise.reject(error)
    }
)

export default service
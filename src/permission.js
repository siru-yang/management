import router from './router'
import { getToken } from './utils/auth'

router.beforeEach((to, from, next) => {
    let token = getToken()
    if(token){

    }else{
        this.router.push("/login")
    }
})
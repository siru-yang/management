import router from './router'
import { getToken } from './utils/auth'
import store from './store'

const whiteList = ["/login"]

router.beforeEach(async (to, from, next) => {
    let token = getToken()
    console.log("两种token获取方式：",token, store.getters.token)
    if (token) {
        console.log("路由跳转有token：", token)
        if (to.path == '/login') {
            next({ path: "/" })
        } else {
            let roles = store.getters.roles
            if (roles) {
                next()
            } else {
                roles = await store.dispatch('getRoles', token)
                let accessRoutes = await store.dispatch('generatRoutes', roles)
                console.log(accessRoutes)
                router.addRoutes(accessRoutes)
                next()
            }
        }
        next()
    } else {
        console.log("to:", to)
        console.log("路由跳转没有token")
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})
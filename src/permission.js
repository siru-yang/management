import router from './router'
import { getToken } from './utils/auth'
import store from './store'

const whiteList = ["/login"]

router.beforeEach(async (to, from, next) => {
    let token = getToken()
    console.log("to:", to)
    console.log("token：", token)
    console.log("store.getters.token：", store.getters.token)
    if (token) {
        console.log("路由跳转有token：", token)
        if (to.path == '/login') {
            next({ path: "/" })
        } else {
            let roles = store.getters.roles
            if (roles.length > 0) {
                console.log("有roles:", roles)
                next()
            } else {
                console.log("没有roles，获取roles")
                try {
                    roles = await store.dispatch('getInfo', token)
                    console.log("获取到的roles：", roles)
                    console.log("store.getters.roles", store.getters.roles)
                    let accessRoutes = await store.dispatch('generateRoutes', roles)
                    console.log("accessRoutes:", accessRoutes)
                    router.addRoutes(accessRoutes)
                    console.log("next之前")
                    next({ ...to ,replace: true})
                    // next()
                    console.log("next之后")
                    // next({ ...to, replace: true })
                } catch {
                    console.log("获取roles错误，重新登陆")
                    await store.dispatch('removeToken')
                    next({ path: '/login' })
                }
            }
        }
    } else {
        console.log("路由跳转没有token")
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})
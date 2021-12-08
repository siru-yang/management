import { constRoutes, asynRoutes } from "../../router"

function hasPermission(route, roles) {
    if(route.meta && route.meta.roles){
        return roles.some(role => route.meta.roles.includes(role))
    }else{
        return true
    }
}

function filterAsynRoutes(routes, roles) {
    let accessedRoutes = []
    routes.forEach(route => {
        let tmp = {...route}
        if(hasPermission(tmp, roles)){
            if(tmp.children){
                tmp.children = filterAsynRoutes(tmp.children, roles)
            }
            accessedRoutes.push(tmp)
        }
    })
    return accessedRoutes
}

const permission = {
    state: {
        routes: []
    },
    mutations: {
        SET_ROUTES(state, routes) {
            state.routes = constRoutes.concat(routes)
        }
    },
    action: {
        generatRoutes({ commit }, roles) {
            new Promise(resolve => {
                let routes = filterAsynRoutes(asynRoutes, roles)
                commit('SET_ROUTES', routes)
                resolve(routes)
            })
        }
    }
}
export default permission
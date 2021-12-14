import { getToken, setToken, removeToken } from "../../utils/auth"
import { login, getInfo } from "@/api/user";

const user = {
    state: {
        token: getToken(),
        roles: []
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        REMOVE_TOKEN(state) {
            removeToken()
            state.token = ""
        },
        SET_ROLES(state, roles) {
            state.roles = roles
        }
    },
    actions: {
        login({ commit }, data) {
            return new Promise((resolve, reject) => {
                login(data).then((rsp) => {
                    if (rsp.code == 0) {
                        commit('SET_TOKEN', rsp.data)
                        setToken(rsp.data)
                        resolve()
                    }
                }).catch((error) => {
                    reject(error)
                });
            })

        },
        getInfo({ state, commit }) {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(rsp => {
                    if (!rsp.data) {
                        reject("未登录")
                    }
                    else if (rsp.data.roles && rsp.data.roles.length <= 0) {
                        reject("roles无效")
                    }
                    else if (rsp.data.roles && rsp.data.roles.length > 0) {
                        commit('SET_ROLES', rsp.data.roles)
                        resolve(rsp.data.roles)
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
        removeToken({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', "")
                commit('SET_ROLES', [])
                removeToken()
                resolve()
            })
        }
    },
}
export default user
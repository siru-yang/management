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
        login({ state, commit }, data) {
            return new Promise((resolve, reject) => {
                login(data).then((rsp) => {
                    if (rsp.code == 0) {
                        console.log("登录返回：", rsp)
                        commit('SET_TOKEN', rsp.data)
                        setToken(rsp.data)
                        console.log("登录后设置token：", getToken(), state.token)
                        resolve()
                    }
                }).catch((error) => {
                    reject(error)
                });
            })

        },
        getRoles({ state, commit }) {
            return new Promise((resolve, reject) => {
                console.log("state.token:", state.token)
                getInfo(state.token).then(rsp => {
                    console.log("getRoles:", rsp)
                    if (!rsp.data) {
                        reject("未登录")
                    }
                    if (rsp.data.roles && rsp.data.roles.length < 0) {
                        reject("roles无效")
                    }
                    commit('SET_ROLES', rsp.data.roles)
                    resolve(rsp.data.roles)
                }).catch((error) => { reject(error) })
            })
        }
    },
}
export default user
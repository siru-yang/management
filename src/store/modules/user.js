import { getToken, setToken, removeToken } from "../../utils/auth"
import { getRoles } from "../../api/roles"
import { login } from "@/api/user";

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
        login({ state,commit }, data) {
            return new Promise((resolve, reject) => {
                login(data).then((rsp) => {
                    if (rsp.code == 0) {
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
            return new Promise(resolve => {
                getRoles(state.token).then(rsp => {
                    console.log("getRoles:", rsp)
                    if (rsp.data.roles && rsp.data.roles.length > 0) {
                        commit('SET_TOKEN', rsp.roles)
                    }
                    resolve(rsp.data.roles)
                })
            })
        }
    },
}
export default user
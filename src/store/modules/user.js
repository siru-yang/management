import { getToken,removeToken } from "../../utils/auth"
import { getRoles } from "../../api/roles"

const user = {
    state: {
        token: getToken(),
        roles:[]
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        REMOVE_TOKEN(state) {
            removeToken()
            state.token = ""
        },
        SET_ROLES(state, roles){
            state.roles = roles
        }
    },
    actions: {
        getRoles({state, commit}) {
            getRoles(state.token).then(rsp => {
                console.log("getRoles:", rsp)
                commit('SET_TOKEN', rsp.roles)
            })
        }
    },
}
export default user
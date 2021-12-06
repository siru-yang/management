import request from "@/utils/request"

export function getRoles(token){
    request({
        url:'/user/info?token=' + token,
        method:'get',
    })
}
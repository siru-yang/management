// 首先引入Mock
const Mock = require('mockjs');
const user = require('./user')

const apiArray = [...user]

// // 设置拦截ajax请求的相应时间
// Mock.setup({
//     timeout: '200-600'
// });

// 注册所有的mock服务
apiArray.forEach((item) => {
    Mock.mock(item.url, item.type, item.response)
})
// const tokens = {
//     admin: {
//         token: 'admin-token'
//     },
//     editor: {
//         token: 'editor-token'
//     }
// }

// Mock.mock('/user/login', 'post', config => {
//     console.log("config:", config)
//     const { username } = JSON.parse(config.body)
//     const token = tokens[username]

//     // mock error
//     if (!token) {
//         return {
//             code: 60204,
//             message: 'Account and password are incorrect.'
//         }
//     }

//     return {
//         code: 0,
//         data: token
//     }
// })
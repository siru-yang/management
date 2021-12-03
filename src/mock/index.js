// 首先引入Mock
const Mock = require('mockjs');
const user = require('./user')

const apiArray = [...user]
console.log("user:",user)
console.log("apiArray:",apiArray)

// // 设置拦截ajax请求的相应时间
// Mock.setup({
//     timeout: '200-600'
// });

// 注册所有的mock服务
apiArray.forEach((item) => {
    Mock.mock(item.url, item.type, item.response)
})

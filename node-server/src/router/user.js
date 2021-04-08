const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 获取cookie的过期时间
const getCookieExpires = () => {
    const d = new Date()
    d.setTime(d.getTime() = (24 * 60 * 60 * 1000))
    return d.toGMTString()
}

const handleUseRouter = (req, res) => {
    const method = req.method
    // 登录
    if (method == 'POST' && req.path == '/api/user/login') {
        const { username, password } = req.body
        const result = login(username, password)
        return result.then(data => {
            if (data.username) {
                res.setHeader('Set-Cookie', `username=${data.username};path=/;httpOnly;expires=${getCookieExpires()}`)

                return new SuccessModel()
            }
            return new ErrorModel('登录失败')
        })

    }


}
module.exports = handleUseRouter
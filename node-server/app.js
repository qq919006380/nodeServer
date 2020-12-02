const querystring = require('querystring')
const handleUseRouter = require('./src/router/user')
const handleBlogRouter = require('./src/router/blog')
const serverHandle = (req, res) => {
    // 设置返回的格式json
    res.setHeader('Content-type', 'application/json')

    // 获取path
    const url = req.url
    req.path = url.split('?')[0]

    // 解析query
    req.query = querystring.parse(url.split('?')[0])

    // 处理blog路由
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
        res.end(JSON.stringify(blogData))
        return
    }

    // 处理user路由
    const userData = handleUseRouter(req, res)
    if (userData) {
        res.end(JSON.stringify(userData))
        return
    }

    // 未命中路由返回404
    res.writeHead(404, { 'Content-type': 'text/plain' })
    res.write('404 Not fund\n')
    res.end()
}
module.exports = serverHandle
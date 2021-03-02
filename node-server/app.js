const querystring = require('querystring')
const handleUseRouter = require('./src/router/user')
const handleBlogRouter = require('./src/router/blog')
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
    return promise
}
const serverHandle = (req, res) => {
    // 设置返回的格式json
    res.setHeader('Content-type', 'application/json')

    // 获取path
    const url = req.url
    req.path = url.split('?')[0]

    // 解析query
    req.query = querystring.parse(url.split('?')[1])

    // 解析cookie
    req.cookie = {}
    const cookieStr = req.headers.cookie || ''
    console.log(cookieStr);
    cookieStr.split(';').forEach(item => {
        if (!item) {
            return
        }
        const arr = item.split('=')
        const key = arr[0].trim()
        const val = arr[1].trim()
        req.cookie[key] = val
    })
    console.log(req.cookie)

    // 处理post data
    getPostData(req).then(postData => {
        req.body = postData

        // 处理blog路由
        const blogResult = handleBlogRouter(req, res)
        if (blogResult) {
            blogResult.then(blogData => {
                res.end(JSON.stringify(blogData))
            })
            return
        }

        // const blogData = handleBlogRouter(req, res)
        // if (blogData) {
        //     res.end(JSON.stringify(blogData))
        //     return
        // }

        // 处理user路由
        // const userData = handleUseRouter(req, res)
        // if (userData) {
        //     res.end(JSON.stringify(userData))
        //     return
        // }


        const userResult = handleUseRouter(req, res)
        if (userResult) {
            userResult.then(userData => {
                res.end(
                    JSON.stringify(userData)
                )
            })
            return
        }

        // 未命中路由返回404
        res.writeHead(404, { 'Content-type': 'text/plain' })
        res.write('404 Not fund\n')
        res.end()
    })


}
module.exports = serverHandle
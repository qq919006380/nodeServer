const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
    const method = req.method
    // 获取博客列表
    if (method == 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)

        return new SuccessModel(listData)
    }

    // 获取博客详情
    if (method == 'GET' && req.path === '/api/blog/detail') {
        return {
            mes: "这是获取博客详情的接口"
        }
    }
    // 新建一篇博客
    if (method == 'POST' && req.path === '/api/blog/new') {
        return {
            mes: "这是获取博客列表的接口"
        }
    }

    // 更新一篇博客
    if (method == 'POST' && req.path === '/api/blog/update') {
        return {
            mes: "这是更新博客列表的接口"
        }
    }

    // 删除一篇博客
    if (method == 'POST' && req.path === '/api/blog/update') {
        return {
            mes: "这是删除博客列表的接口"
        }
    }
}

module.exports = handleBlogRouter 
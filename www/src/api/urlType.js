/**
 * @param {String} name 接口名称
 * @param {String} url  接口url
 * @param {String} type 接口请求类型分别支持json, form, micro
 */
export const blog = [
  // 博客列表
  {
    name: 'list',
    url: '/api/blog/list',
    type: "get"
  },
  // 新增博客
  {
    name: 'new',
    url: '/api/blog/new',
    type: "post"
  },
  // 博客详情
  {
    name: 'detail',
    url: '/api/blog/detail',
    type: "post"
  },
   // 博客详情
   {
    name: 'del',
    url: '/api/blog/del',
    type: "get"
  },
  
]

export const user = [
  {
    name: 'login',
    url: '/api/user/login',
    type: "post"
  },
]



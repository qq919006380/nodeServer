const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog");
const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require("../model/resModel");
const loginCheck = require("../middleware/loginCheck.js");

router.prefix("/api/blog");

router.get("/list", async function (ctx, next) {
  const author = ctx.query.author || "";
  const keyword = ctx.query.keyword || "";

  const listData = await getList(author, keyword);
  ctx.body = new SuccessModel(listData);
});

router.get("/detail", async function (ctx, next) {
  const data = await getDetail(ctx.query.id);
  ctx.body = new SuccessModel(data);
});

router.post("/new", loginCheck, async function (ctx, next) {
  const body = ctx.request.body;
  body.author = ctx.session.username;
  const data = await newBlog(body);
  ctx.body = new SuccessModel(data);
});

router.post("/update", loginCheck, async function (ctx, next) {
  const val = await updateBlog(ctx.query.id, ctx.body);
  if (val) {
    ctx.body = new SuccessModel();
  } else {
    ctx.body = new ErrorModel("更新内容失败");
  }
});

router.get("/del", loginCheck, async function (ctx, next) {
  const author = ctx.session.usename;
  const val = await delBlog(ctx.query.id, author);
  if (val) {
    ctx.body = new SuccessModel();
  } else {
    ctx.body = new ErrorModel("删除博客失败");
  }
});

module.exports = router;

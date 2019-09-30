const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// http://localhost:3000/?ddd=122
router.get('/', function (ctx, next) {

    console.log(ctx.query);  //{ aid: '123' }       获取的是对象   用的最多的方式  **推荐
    console.log(ctx.querystring);  //aid=123&name=zhangsan      获取的是一个字符串
    console.log(ctx.url);   //获取url地址

    ctx.body=ctx.query;
});

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000,()=>{
    console.log('starting at port 3000');
});
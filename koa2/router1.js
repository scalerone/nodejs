const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

//获取get传值
//http://localhost:3000/newscontent?aid=123
//注册路由
router.get('/', function (ctx, next) {
    ctx.body="Hello JSPang";
})
.get('/newscontent', function (ctx, next) {
    //从ctx中读取get传值

    console.log(ctx.query);  //{ aid: '123' }       获取的是对象   用的最多的方式  **推荐
    console.log(ctx.querystring);  //aid=123&name=zhangsan      获取的是一个字符串
    console.log(ctx.url);   //获取url地址

    //ctx里面的request里面获取get传值

    console.log(ctx.request.url);
    console.log(ctx.request.query);   //{ aid: '123', name: 'zhangsan' }  对象
    console.log(ctx.request.querystring);   //aid=123&name=zhangsan

    ctx.body="Hello koa-router todo page";
});
/*启动路由*/
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('starting at port 3000');
});
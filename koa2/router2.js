const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

// const router = new Router();

//设置路由前缀
// const router = new Router({
//     prefix:'/test'
// })

//http://localhost:3000/home/todo
let home = new Router();
home.get('/', function (ctx, next) {
    ctx.body="home hello";
})
    .get('/todo',(ctx,next)=>{
        ctx.body="home Todo "
    });

//http://localhost:3000/page/todo
let page = new Router();
page.get('/jspang',async(ctx)=>{
    ctx.body="Page hello";
}).get('/todo',async(ctx)=>{
    ctx.body ='Page ToDo';
})

//装载所有子路由
let router = new Router();
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());

//加载路由中间件
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('starting at port 3000');
});
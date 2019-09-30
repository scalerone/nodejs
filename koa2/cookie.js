const Koa  = require('koa');
const app = new Koa();


// ctx.cookies.get(name,[optins]):读取上下文请求中的cookie。
// ctx.cookies.set(name,value,[options])：在上下文中写入cookie
// app.use(async(ctx)=>{
//     if(ctx.url=== '/index'){
//         ctx.cookies.set(
//             'MyName','JSPang'
//         );
//         ctx.body = 'cookie is ok';
//     }else{
//         ctx.body = 'hello world'
//     }
// });

// domain：写入cookie所在的域名
// path：写入cookie所在的路径
// maxAge：Cookie最大有效时长
// expires：cookie失效时间
// httpOnly:是否只用http请求中获得
// overwirte：是否允许重写

app.use(async(ctx)=>{
    if(ctx.url=== '/index'){
        ctx.cookies.set(
            'Name','JSPang',{
                domain:'127.0.0.1', // 写cookie所在的域名
                path:'/index',       // 写cookie所在的路径
                maxAge:1000*60*60*24,   // cookie有效时长
                expires:new Date('2019-12-31'), // cookie失效时间
                httpOnly:false,  // 是否只用于http请求中获取
                overwrite:true  // 是否允许重写
            }
        );
        ctx.body = 'cookie is ok';
    }else{
        if( ctx.cookies.get('Name')){
            ctx.body = ctx.cookies.get('MyName');
        }else{
            ctx.body = 'Cookie is none';
        }

    }
});



app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})
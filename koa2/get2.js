const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    let url =ctx.url;

    //从request中获取GET请求
    let request =ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;

    //从上下文中直接获取
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;

    ctx.body={
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }

});

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});
//http://127.0.0.1:3000?user=jspang&age=18
//{"url":"/?user=jspang&age=18","req_query":{"user":"jspang","age":"18"},"req_querystring":"user=jspang&age=18","ctx_query":{"user":"jspang","age":"18"},"ctx_querystring":"user=jspang&age=18"}
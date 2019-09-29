const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    console.log(ctx)
    let url =ctx.url;
    let request =ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;

    ctx.body={
        url,
        req_query,
        req_querystring
    }

});

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});
//http://127.0.0.1:3000?user=jspang&age=18
//{"url":"/?user=jspang&age=18","req_query":{"user":"jspang","age":"18"},"req_querystring":"user=jspang&age=18"}
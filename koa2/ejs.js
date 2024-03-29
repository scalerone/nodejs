const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

// 加载模板引擎
console.log(__dirname);//项目的根路径
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

app.use( async ( ctx ) => {
    let title = 'hello koa2'
    console.log("__dirname = %s", path.resolve(__dirname));
    await ctx.render('index', {
        title
    })
})

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})
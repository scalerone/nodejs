const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()


const staticPath = './static'

// 声明使用静态中间件
app.use(static(
    path.join( __dirname,  staticPath)
))

// http://127.0.0.1:3000/default.png
app.use( async ( ctx ) => {
    ctx.body = 'hello world'
})

app.listen(3000, () => {
    console.log('[demo] static-use-middleware is starting at port 3000')
})
const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {
    ctx.body = 'hello koa2'
})

app.listen(3012)
console.log('[demo] start-quick is starting at port 3012')
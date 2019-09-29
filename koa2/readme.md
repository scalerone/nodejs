## 获取Post请求的步骤：

1.解析上下文ctx中的原生nodex.js对象req。
2.将POST表单数据解析成query string-字符串.(例如:user=jspang&age=18)
3.将字符串转换成JSON格式。

## ctx.request和ctx.req的区别

ctx.request:是Koa2中context经过封装的请求对象，它用起来更直观和简单。
ctx.req:是context提供的node.js原生HTTP请求对象。这个虽然不那么直观，但是可以得到更多的内容，适合我们深度编程。
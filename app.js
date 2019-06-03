var express = require('express')
var bodyParser = require('body-parser')
var router = require('./router')
var app = express()
// 配置模板引擎
app.engine('html', require('express-art-template'))
// 配置解析表里的body 当post的时候
app.use(bodyParser.urlencoded({ extend: false}))
app.use(bodyParser.json())
//使用静态资源服务
app.use('/public/', express.static('./public/'))
// 把路由挂载到 app 服务中
app.use(router)
app.listen(3000, () => console.log('app is running at http:127.0.0.1:3000'))
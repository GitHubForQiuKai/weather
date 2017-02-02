/*
 *@Description 一灯学堂Vue SPA单页系统
 *@Author yuanzhijia@yidengxuetang.com
 *@Date 2016-12-01
 */
'use strict';
import Koa from 'koa';
import convert from 'koa-convert'; //koa1 转换器
import errorHandler from './Libs/errorHandler';
import serve from 'koa-static';
import router from 'koa-simple-router';
import path from 'path';
import config from './Config/config';
import controllers from './Controllers/controllerInit';
import render from 'koa-swig';
import co from 'co';
import views from 'koa-views';
import "babel-core/register";
import "babel-polyfill";
import historyApiFallback from "koa-history-api-fallback";
const app = new Koa();
app.use(views(config.get('viewDir'), {
    map: {
        html: 'swig'
    }
}));
app.use(convert(historyApiFallback()));
errorHandler.error(app); //处理页面错误的处理句柄
controllers.getAllrouters(app, router); //初始化controllers
app.use(convert(serve(config.get('staticDir')))); // 静态资源文件
//监听端口🐂😊
app.listen(config.get('port'));
console.log('ydxtVueSystem listening on port %s', config.get('port'));
export
default app;
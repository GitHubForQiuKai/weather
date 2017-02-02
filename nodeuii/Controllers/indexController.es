/*
 *@Description 一灯学堂学习系统主路由
 *@Author yuanzhijia@yidengxuetang.com
 *@Date 2016-07-19
 */
'use strict';
const data = {
    title: "yd vue framework"
};
const indexController = {
    index() {
        return async(ctx, next) => {
            await ctx.render('index.html', data);
        }
    }
};
export
default indexController;
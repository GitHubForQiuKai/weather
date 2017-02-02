/*
 *@Description controllers 初始化类
 *@Author yuanzhijia@yidengxuetang.com
 *@Date 2015-07-28
 */
'use strict';
import index from './indexController';
const controllerInit = {
    getAllrouters(app, router) {
        app.use(router(_ => {
            _.get('/', index.index());
            _.get('/index', index.index());
            _.get('/index.html', index.index());
            _.get('/index/index', index.index());
        }));
    }
};
export
default controllerInit;
/*
 *@Description基础请求类
 *@Date 2015-04-06
 *@Author yuanzhijia@jikexueyuan.com
 */
'use strict';
import rpA from 'request-promise';
import config from '../config/config';
export
default class SafeRequest {
    constructor(ctx, url, data) {
        this.ctx = ctx;
        this.url = url;
        this.data = data;
    }
    request() {
        const rpOptions = {
            method: 'POST',
            uri: config.apiUrl + this.url,
            form: {
                params: JSON.stringify(this.data)
            },
            headers: {
                'content-type': 'application/x-www-form-urlencoded' // Set automatically 
            },
            //json: true // Automatically stringifies the body to JSON 
        }
        return new Promise((resolve, reject) => {
            (async() => {
                await rpA(rpOptions).then(function(result) {
                    const resp = JSON.parse(result);
                    console.log('纯输出结果', resp);
                    if (resp) {
                        if (resp.error_code == 0) {
                            resolve({
                                error_code: 0,
                                result: resp.result
                            });
                        } else {
                            resolve({
                                error_code: 1,
                                result: resp.msg
                            });
                        }
                    } else {
                        resolve({
                            error_code: 1,
                            result: 'Fail to parse http response'
                        });
                    }
                }).catch(function(err) {
                    reject({
                        error_code: 1,
                        result: err
                    });
                });
            })();
        });
    }
};
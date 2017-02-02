//应用配置文件
import path from 'path';
let configMap = new Map();
configMap.set('port', 3000);
configMap.set('viewDir', path.join(__dirname, '..', 'views'));
configMap.set('logDir', path.join(__dirname, '..', 'logs'));
configMap.set('staticDir', path.join(__dirname, '..'));
//本地Map配置
const local = () => {
    configMap.set('apiUrl', '192.168.1.1');
};
//服务端Map配置
const server = () => {
    configMap.set('apiUrl', '0.0.0.0');
};
process.env.NODE_ENV = "development"; //production
if (process.env.NODE_ENV === 'development') {
    local();
} else {
    server();
}
export
default configMap;
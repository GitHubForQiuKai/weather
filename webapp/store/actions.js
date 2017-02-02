import * as types from './mutation-types.js';
/*
var dataSK = {
    "nameen": "beijing",
    "cityname": "北京",
    "city": "101010100",
    "temp": "-1",
    "tempf": "30",
    "WD": "西北风",
    "wde": "NW ",
    "WS": "2级",
    "wse": "&lt;12km/h",
    "SD": "84%",
    "time": "20:30",
    "weather": "多云",
    "weathere": "Cloudy",
    "weathercode": "n01",
    "qy": "1020",
    "njd": "暂无实况",
    "sd": "84%",
    "rain": "0",
    "rain24h": "0",
    "aqi": "28",
    "limitnumber": "不限行",
    "aqi_pm25": "28",
    "date": "01月08日(星期日)"
}
*/

export const weatherDt = ({
    commit
}, me) => {
    var geolocation = new qq.maps.Geolocation("OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77", "myapp");
    geolocation.getLocation(function(option) {
            commit(types.WEATHER_DT, {
                txt: JSON.stringify(option, null, 4)
            });
            //天气预报
            var msg = JSON.parse(JSON.stringify(option, null, 4)),
                weather_json = {};
            me.jsonp('http://d3.weather.com.cn/webgis_rain_new/webgis/ele?lat=' + msg.lat + '&lon=' + msg.lng).then(function(response) {
                //拼接数据
                weather_json.msg = response.body.msg;
                weather_json.ph = response.body.ph;
                weather_json.time = response.body.time;

                commit(types.WEATHER_TODAY, {
                    txt: weather_json
                });
            });

            //温度、风
            loadScript("http://d1.weather.com.cn/sk_2d/101010100.html?_=" + new Date().getTime() * 1000, function() {
                commit(types.WEATHER_DETAIL, {
                    txt: dataSK
                });
            })

        },
        function() {
            commit(types.WEATHER_DT, {
                txt: "定位失败"
            });
        }, {
            timeout: 14000000
        });
};
//locationPicher的action
export const pickingLocation = ({
    commit
}, {
    loc,
    me
}) => {
    me.$http.jsonp('http://apis.map.qq.com/ws/geocoder/v1/?location=' + loc.latlng.lat + ',' + loc.latlng.lng + '&key=EB5BZ-46LCI-HR4GA-523UC-LVWTS-LUFNH&get_poi=0&output=jsonp').then(function(response) {
        commit(types.PICKING_LOCATION, response.body.result);
        //进行路由跳转：
        me.$router.push('/');
    });
};
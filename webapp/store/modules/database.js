import * as types from '../mutation-types.js'
const state = {
    map_message: {},
    weather: {},
    weather_dtai: {}
}

// mutations
const mutations = {
    [types.WEATHER_DT](state, {
        txt
    }) {
        if (txt == "定位失败") {
            state.map_message = {
                error: "定位失败"
            };
        } else {

            state.map_message = JSON.parse(txt);
        }
    },
    [types.WEATHER_TODAY](state, {
        txt
    }) {
        state.weather = txt;
    },
    [types.WEATHER_DETAIL](state, {
        txt
    }) {
        state.weather_dtai = txt;
    },
    //locationsPicker的mutations
    [types.PICKING_LOCATION](state, data) {
        if (data) {
            state.map_message.district = data.address_component.district;
            state.map_message.lat = data.location.lat;
            state.map_message.lng = data.location.lng;
            state.map_message.city = data.address_component.city;
            state.map_message.addr = data.address;
        } else {
            state.map_message.city = "定位失败";
            state.map_message.district = "请重试";
        }
    }
}

export default {
    state,
    mutations
}
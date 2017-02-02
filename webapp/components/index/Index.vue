<style src="./index.css"></style>
<template>
  <div class="components-index">
  	<div class="bgbox" v-bind:class="[weather_class]">
      <div class="topbox">
        <div class="l_satnav">  <router-link to="/locationpicker">{{ addcity }} | {{ addarea}}</router-link> <p>{{ adddetal }}</p></div>
        <div class="r_icon">{{ updateT }}分钟前更新</div>
      </div>
      <div class="centbox">
        <p class="temperature">
          <span>{{ temperature }}</span>
        </p>
        <p class="weather">
          <span v-bind:class="{ lticon:islightrain }">{{ weather_name }}</span>
           | {{ wind }} {{ windlev }}
        </p>
        <!--
        <p class="txt">预报不准？</p>
        -->
      </div>
      <div class="weather_curve">
        
      </div>
      <p class="future_w">{{ futureweather }}</p>
      <div class="toprediction"><span>24小时预报 ></span></div>
      <div class="upslid"><span></span><span></span></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'


/* css一一对应：
fogbg:isfog, //雾
cloudybg:iscloudy, //多云
overcastbg:isovercast, //阴天
rainbg:israin, //雨  (css已修改)
sandbg:issand, //沙尘
smogbg:issmog, //雾霾
snowbg:issnow, //雪   (css已修改)
sunnybg:issunny, //晴天
thundershowerbg:isthundershower//雷阵雨
*/

export default {
  name: 'index',
  data:function(){
   
      /*
      isfog:false,//雾
      iscloudy:false,//多云
      isovercast:false,//阴天
      israin:false,//雨
      issand:false,//沙尘
      issmog:false,//雾霾
      issnow:false,//雪
      issunny:false,//晴天
      isthundershower:false,//雷阵雨
      */
      var res = {
        weather_class:"",
        addcity:"定位不准",//城市
        addarea:"点我",//区  
        adddetal:"空",//详细地址
        updateT:'2',//多少分钟前更新
        temperature:'未知',//温度
        islightrain:true,//天气小图标
        weather_name:"预报不准",//天气
        wind:'未知',//风
        windlev:'未知',//风级
        futureweather:"预报不准"
      };
      
      return res;    
    
  },
  created:function(){
    //天气
     // console.log("天气",this.weather);
     if(this.weather && this.weather.ph){
         this.weather_class = this.weather.ph;   //天气的样式
         this.weather_name = this.weather.ph;     //天气类型
         this.futureweather = this.weather.msg;   //天气预报信息
      }
      //地理位置
      // console.log("地理位置",this.data); 
      if(this.data && this.data.city){
        this.addcity = this.data.city;       //城市
        this.addarea = this.data.district;   //区域
        this.adddetal = this.data.addr;      //详细地址
      }
      //温度、湿度、风
     // console.log("温度、湿度、风向",this.weather_dtai);
      if(this.weather_dtai && this.weather_dtai.WD){
          this.wind = this.weather_dtai.WD;   //风项
          this.windlev = this.weather_dtai.WS;  //风级
          this.temperature = this.weather_dtai.temp;  //温度 
      }
  },
  computed:mapState({ 
       data: state=>state.database.map_message,
       weather:state=>state.database.weather,
       weather_dtai:state=>state.database.weather_dtai
  })
}
</script>

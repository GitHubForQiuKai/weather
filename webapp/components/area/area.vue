<template>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'parea',
  created:function(){
 	 this.getLocation();
  },
  methods:{
  	getLocation:function(){
  		var me = this.$http;
  		this.$store.dispatch('weatherDt',me);
  	}
  }
}
</script>

<style src="./locationPicker.css"></style>
<template>
	<div class="components-location-picker">
<!-- 		<div class="head">
			<span>当前选择位置：</span>
			<span class="picked-content" v-text="data"></span>
		</div> -->
		<iframe id="mapPage" width="100%" height="100%" frameborder=0 
	    	src="http://apis.map.qq.com/tools/locpicker?search=1&type=1&key=2J4BZ-PBHH2-VYGU4-CODCH-C4EA2-W4BAU&referer=jsyb">
		</iframe> 
	</div>
</template>
<script>
import { mapState } from 'vuex'
	export default {
		name:"components-location-picker",
		computed:mapState({ 
  			data: state =>state.database.map_message.addr
		}),
		methods:{
			pickingLocation(data){
				this.$store.dispatch('pickingLocation',data);
			}
		}, 
		created: function () {
			const me = this;
            //监听window上的message
            window.addEventListener('message', function(event) {
				let loc = event.data;
				if (loc && loc.module == 'locationPicker') {
					me.pickingLocation({loc:loc,me:me});
			}
		}, false);
      
	}
}
</script>
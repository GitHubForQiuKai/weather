<template>
  <div id="app">
     <parea></parea>
     <router-view></router-view>
  </div>
</template>

<script>
import parea from './area/area.vue';
export default {
  name:"app",
  components: {parea}
}
</script>

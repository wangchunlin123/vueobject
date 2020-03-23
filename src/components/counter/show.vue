<template>
    <h1>你一共点击了{{count1}}次</h1>
</template>
<script>
import {mapState} from "vuex";
export default {
  
  // created(){
  //   console.log(this);
  // },
  computed:{
    ...mapState("counter",{
      count1:state=>state.count,
    }),
  }
};

</script>
<style scoped>
</style>

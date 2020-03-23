
<template>
     <div>
            TYPES:
            <span style="color:red;" v-if="showType=='all'">all</span>
            <a @click.prevent="footerclick('all')" href="#" v-else>all</a>
            <span style="color:red;" v-if="showType=='wancheng'">wancheng</span>
            <a @click.prevent="footerclick('wancheng')" href="#" v-else>wancheng</a>
            <span style="color:red;" v-if="showType=='weiwancheng'">weiwancheng</span>
            <a @click.prevent="footerclick('weiwancheng')" href="#" v-else>weiwancheng</a>
            </div>
</template>
<script>
import {mapState,mapGetters,mapMutations} from "vuex";
export default {
    name:"allbutton",
  // props: {
  //   showType: {
  //     default: "all"
  //   }
  // },
  created(){
    console.log(this.showType);
  },
   computed:{
    ...mapState("todolist",["showType"]),
    
  },
  methods: {
        // ...mapMutations(["footclick","showType"]),
    footerclick(showType) {
      this.$store.commit("todolist/footclick", showType);
    },
    // ...mapMutations(["filtertodos"]),
  }
};
</script>
<style scoped>
</style>
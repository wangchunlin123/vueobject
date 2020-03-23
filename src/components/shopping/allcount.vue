<template>
 <div>
    <p>总量:{{sumcount}}总价:{{priceSum}}<button>清空购物车</button></p>
 </div>
</template>
<script>
    import {mapState,mapMutations,mapGetters} from "vuex";
    export default {
    name:"allcount",
  // props: {
  //   todos: {
  //     default:()=> []
  //   }
  // },
  computed:{
        ...mapGetters("shopping",["sumcount","priceSum"])
  },
//   created(){
//     console.log(this.goods);
//   },
//   getters: {
    // sumcoumt() {
    //   this.$store.commit("sumcoumt");
    // },
    // priceSum() {
    //   this.$store.commit("priceSum");
    // },
//   }
};
</script>
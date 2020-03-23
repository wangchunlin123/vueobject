<template>
<div style="display:flex">SCREEN:
    <div :key="item" style="margin-left:10px;" v-for="(item) in showTypes">
        <span style="color:red" v-if="showType==item">{{item}}</span>
        <a @click.prevent="alterType(item)" v-else href="#">{{item}}</a>
    </div>
    <span style="margin-left:10px;">{{todon}}/{{todosAll}}</span>
</div>
</template>

<script>
import {mapState,mapGetters} from "vuex"
export default {
  props: {
    showTypes:{
        default:()=>["ALL", "COMPLETE", "NOCOMPLETE"]
        }
  },
  computed: {
    ...mapState(["showType"]),
    ...mapGetters(["todosAll","todon"])
  },
  methods: {
    alterType(item) {
      this.$emit("click", item);
    }
  }
};
</script>

<style>
</style>
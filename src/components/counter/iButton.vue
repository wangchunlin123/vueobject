<template>
     <input @click="click" type="button" :value="name"/>
</template>
<script>
import {mapMutations} from "vuex";

export default {
  methods: {
    click() {
      this.$emit("click"); //暴露方法
    }
  },
  props: {
    name: {
      default: "mm"
    }
  }
};
</script>
<style scoped>
</style>
<template>
    <div>
        <show />
            <iButton name="+" @click="add"/>
            <iButton name="-" @click="sub"/>
    </div>
</template>
<script>
import {mapMutations} from "vuex";
export default {
  // data() {
  //   return {
  //     count: 1
  //   };
  // },
  name:"counter",
  methods: {
    ...mapMutations("counter",["add","sub"]),
  } //方法写在容器组件的methods
};
</script>
<style scoped>
</style>
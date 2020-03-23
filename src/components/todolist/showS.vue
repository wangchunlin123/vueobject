
<template>
    <div>
        <input v-model="todopush" key="text" type="text" />
        <input @click="addtodo(todopush)" key="btn" type="button" value="增加" />
    </div>
</template>
<script>
import {mapState,mapMutations} from "vuex";
export default {

  name: "showS",
  data() {
    return {
      todopush: ""
    };
  },
  // computed:{
  //   ...mapState(["todos"]),
  // },
  //   created(){
  //   console.log(this.$store.commit);
  // },
  //  methods: {
  //   ...mapMutations(["addtodo"]),
    
  // },
  methods: {
    addtodo(todopush) {
      this.$store.commit("todolist/addbtn", todopush);
      this.todopush = "";
    }
  }
};
</script>
<style scoped>
</style>
<template>
<div>
    <addTodo @click="addTodo" />
    <todos @click="alter" />
    <filters @click="alterType" />
</div>
</template>

<script>
import {mapMutations,mapGetters} from "vuex";
export default {
  name:"todolist",
  methods: {
    ...mapMutations(["addTodo","alter","alterType"])
  }
};
</script>

<style>
</style>
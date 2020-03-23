<template>
    <div>
        <input ref="addTdText" type="text"/>    
        <input @click="addTodo" type="button" value="addTodo"/>
    </div>
</template>

<script>
export default {
  methods: {
    addTodo() {
      this.$store.commit("addTodo",this.$refs.addTdText.value)
      this.$refs.addTdText.value = "";
    }
  }
};
</script>

<style>
</style>

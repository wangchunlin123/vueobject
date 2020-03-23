
<template>
    <div>
      <showS />
      <todolist/>
      <allbutton />
    </div>
</template>
<script>
export default {
  name: "mains",
  // data() {
  //   return {
  //     todos: [
  //       {
  //         id: 1,
  //         text: "HTML",
  //         finally: false
  //       },
  //       {
  //         id: 2,
  //         text: "CSS",
  //         finally: true
  //       },
  //       {
  //         id: 3,
  //         text: "JS",
  //         finally: false
  //       }
  //     ],
  //     index: 4,
  //     showType: "all"
  //   };
  // },
  methods: {
    // todoclick(item) {
    //   item.finally = !item.finally;
    // },
    // addbtn(todopush) {
    //   this.todos.push({
    //     id: this.index,
    //     text: todopush,
    //     finally: true
    //   });
    //   this.index++;
    // },
    // footclick(type) {
    //   this.showType = type;
    // },
    // filtertodos() {
    //   switch (this.showType) {
    //     case "all":
    //       return this.todos;
    //     case "wancheng":
    //       return this.todos.filter(item => item.finally);
    //     case "weiwancheng":
    //       return this.todos.filter(item => item.finally == false);
    //   }
    // }
  }
};
</script>
<style scoped>

</style>

<template>
    <div>
            <ul>
                <li :key="item.id" style="listStyle:none" @click="todoclick(item)" :class={finally:item.finally} v-for="(item) in todos">{{item.text}}</li>
            </ul>
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from "vuex";

export default {
    name:"todolist",
  // props: {
  //   todos: {
  //     default:()=> []
  //   }
  // },
  computed:{
        ...mapGetters("todolist",{todos:"filtertodos"})
  },
  // created(){
  //   console.log(this.todos);
  // },
  methods: {
    ...mapMutations("todolist",["todoclick"]),
  }
};

</script>
<style scoped>
.finally {
  text-decoration: line-through;
  color: red;
}
</style>
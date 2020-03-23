<template>
<ul>
    <li :key="item.id" @click="alter(item)" :class="{stex:item.t}" v-for="(item) in todos">{{item.text}}</li>
</ul>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  computed: {
    ...mapGetters({todos:"filterArr"})
  },
  methods: {
    alter(item) {
      this.$emit("click", item);
    }
  }
};
</script>

<style scoped>
.stex {
  color: red;
  text-decoration: line-through;
}
</style>
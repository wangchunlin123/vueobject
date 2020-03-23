<template>
    <div>
       <table>
           <thead>
               <tr>
                   <th>id</th>
                   <th>name</th>
                   <th>age</th>
                   <th>gender</th>
                   <th>job</th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="(item) in rows" :key="item.id">
                   <td>{{item._id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td>{{item.gender}}</td>
                    <td>{{item.job}}</td>
               </tr>
           </tbody>
          
           
       </table>
        <div>
               当前页:
               <select name="" id="" :value="curpage" @change="setCurPage($event.target.value)">
               <option value="" :key="n" v-for="(n) in maxpage">{{n}}</option>
               </select>
               每页显示条数：<input :value="eachpage" @blur="setEachPage($event.target.value)" type="text"/>
                总条数：<span>{{total}}</span>
                总页数：<span>{{maxpage}}</span>
           </div>

    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "getname",
  created() {
    
    this.asyncgetnames();
  },
  computed: {
    
    ...mapState("getname", ["curpage", "eachpage", "maxpage", "rows", "total"])
  },
  watch: {
    curpage() {
      this.asyncgetnames();
    },
    eachpage() {
      this.asyncgetnames();
    }
  },
  methods: {
     ...mapMutations("getname", ["setCurPage", "setEachPage"]),
    ...mapActions("getname", ["asyncgetnames"]),
   
  }
};
</script>
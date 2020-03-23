<template>
   <div>
                <table border=1>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>商品名称</th>
                            <th>数量</th>
                            <th>单价</th>
                            <th>总价</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key=item.id v-for="(item) in goods">
                            <td>{{item.id}}</td>
                            <td>{{item.name}}</td>
                           <td> <input @click="addcount(item.id)" type="button" value="+"/>{{item.count}}<input type="button"  @click="subcount(item.id)" value="-"/></td>
                            <td>{{item.price}}</td>
                            <td>{{item.price*item.count}}</td>
                        </tr>    
                    </tbody>

                </table>
            </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from "vuex";
    export default {
    name:"shoptable",
  // props: {
  //   todos: {
  //     default:()=> []
  //   }
  // },
  computed:{
        ...mapState("shopping",["goods"])
  },
//   created(){
//     console.log(this.goods);
//   },
  methods: {
    addcount(id) {
      this.$store.commit("shopping/addcount", id);
    },
    subcount(id) {
      this.$store.commit("shopping/subcount", id);
    },
  }
};
</script>
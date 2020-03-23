<template>
    <div>
      <!-- <table>
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
               <option  :key="n" v-for="(n) in maxpage">{{n}}</option>
               </select>
               每页显示条数：<input :value="eachpage" @blur="setEachPage($event.target.value)" type="text"/>
                总条数：<span>{{total}}</span>
                总页数：<span>{{maxpage}}</span>
           </div> -->
    <el-table
    :data="rows"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="_id"
      label="id"
      width="200">
    </el-table-column>
    <el-table-column
      
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="120">
    </el-table-column>
    <el-table-column
      prop="gender"
      label="性别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="job"
      label="工作"
      width="120">
    </el-table-column>
    <el-table-column
      
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @size-change="setEachPage"
      @current-change="setCurPage"
      :current-page="curpage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="eachpage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
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
    ...mapActions("getname", ["asyncgetnames"])
  }
};
</script>
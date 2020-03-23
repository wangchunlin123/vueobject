<template>
  <div>
    <el-menu router 
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b" >
      <el-menu-item index="counter">计数器</el-menu-item>
      <el-menu-item index="mains">记事本</el-menu-item>
      <el-menu-item index="shopping">购物车</el-menu-item>
      <el-submenu index="2">
        <template slot="title">员工</template>
        <el-menu-item index="getname">员工列表</el-menu-item>
        <el-menu-item index="2-2">查找员工</el-menu-item>
        
      </el-submenu>
    </el-menu>
    <router-view/>
  </div>
  
</template>
<script>
export default {
  name: "info",

 
 
};
</script>
<style>
 
</style>

<template>
    <div>
        infosdadadasdsadasdas
        <h1>sdasdasdas</h1>
     <ul>
      <li><router-link to="/counter">计数器</router-link></li> 
      <li><router-link to="/mains">记事本</router-link></li>
      <li><router-link to="/shopping">购物车</router-link></li>

      <li><router-link to="/getname">员工列表</router-link></li>

    </ul>
    <router-view/>
    </div>
</template>
<script>
export default {
  name: "info"
};
</script>
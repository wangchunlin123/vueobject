<template>
    <div>
        <p>账号：<input v-model="usename" type="text"></p>
        <p>账号：<input type="password"></p>
        
        <input @click="login" type="button" value="注册">

    </div>
</template>
<script>
     export default {
        name:"reg",
        data(){
            return{
                 usename:"1111"
            }
           
        },
        methods:{
            login(){
                this.$router.push(`/login/${this.usename}`);

            },
            
        }
    }
</script>
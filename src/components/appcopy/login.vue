<template>
    <div>
        <p>账号：<input v-model="username" type="text"/></p>
        <p>账号：<input type="password"></p>
        <input @click="login" type="button" value="登录">
        <input @click="reg" type="button" value="注册">

    </div>
</template>
<script>
     export default {
        name:"login",
        data(){
            return{
                username:""
            }
        },
        beforeMount() {
            // this.usename=
            // console.log(this.$route.params.username);
            this.username=this.$route.params.username;
        },
        methods:{
            login(){
                this.$router.push("/info");
            },
             reg(){
                this.$router.push("/reg");
            }
        }
    }
</script>
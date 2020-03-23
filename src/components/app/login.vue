<template>
    <el-form  label-width="80px">
        <el-form-item label="用户名">
            <el-input v-model="username" style="width: 400px;"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input style="width: 400px;"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button @click="reg">注册</el-button>
        </el-form-item>
    </el-form>
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
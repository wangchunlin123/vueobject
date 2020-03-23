<template>
   <el-form label-width="80px">
        <el-form-item label="用户名">
            <el-input v-model="usename" style="width: 400px;"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input style="width: 400px;"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">注册</el-button>
        </el-form-item>
    </el-form>
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
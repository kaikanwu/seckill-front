<template>

    <div id="portal-template">
        <img class="portal-logo" src="../assets/images/logo.png" alt="秒杀logo">
        <div id="login">
            <el-form label-position="top" label-width="80px" :model="user" ref="userValid" :rules="rules">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="user.username" placeholder="请输入用户名">  
                    </el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="user.password" placeholder="请输入密码" @keypress.enter.native="login('userValid')">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="submit-btn" @click="login('userValid')">登录</el-button>
                </el-form-item>

            </el-form>
            
        </div>

    </div>
    
</template>

<script>
export default{
    name: 'login',
    data () {
        return{
            user:{
                username:'',
                password:''
            },
            rules: {
            username:[
                  {required:true, message:'用户名不能为空', trigger:'blur'}
            ],
            password: [
                {required:true, message:'密码不能为空',trigger:'blur'}
            ]            
            }
        }

    },
    methods:{
        login(){
            //get
            // this.axios.get('/api/login?username=k&password=1234')
            // .then((response) =>{
            //     console.log(response);
            // })
            // .catch((error) =>{
            //     console.log('error:' + error);
            // })
            //post

            var self = this;
            self.axios.post('/api/login', qs.stringify({username: self.user.username, password: self.user.password}))
      
            .then((response) =>{
                if(response.data.code == 200){
                    self.$message.success(response.data.message)
                    //成功后跳转到foo
                    self.$router.push('/foo')
                }else{
                    self.$message.error(response.data.message)
                }                
            })
            .catch((error) =>{
                self.$message.error('请刷新重试!')
            })
        }
    }

}

</script>

<style lang="scss">
@import '../assets/css/portal-template.css'
</style>
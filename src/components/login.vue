<template>
	<div class="wrap">
	    <el-form class="form" label-position="top" label-width="80px">
	      <h1>用户登录</h1>
	      <el-form-item label="用户名">
	        <el-input v-model="formdata.username"></el-input>
	      </el-form-item>
	      <el-form-item label="密码">
	        <el-input v-model="formdata.password"></el-input>
	      </el-form-item>
	      <el-button type="primary" class="btn" @click.prevent="handleLogin()">登录</el-button>
	    </el-form>
    </div>
</template>

<script type="text/javascript">
	export default{
		data() {
			return {
				formdata : {
					username : '',
					password : ''
				}
			}
		},
		methods : {
			async handleLogin() {
				const res = await this.$http.post('login', this.formdata);
				const {meta : {status, msg}, data} = res.data;
				if(status === 200) {
					localStorage.setItem('token', data.token);
					this.$router.push({name : 'home'});
				}else{
					this.$message.error(msg);
				}
			}
		}
	}
</script>

<style>
	.wrap {
  height: 100%;
  /* 取色计 */
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrap .form {
  background-color: #ffffff;
  border-radius: 10px;
  width: 400px;
  padding: 30px;
}

.wrap .form .btn {
  width: 100%;
}
</style>
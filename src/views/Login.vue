<template>
  <div class="login-container" v-loading.body="loading">
    <h3 class="title">系统登录</h3>
    <el-form :model="form" :rules="rules" ref="form" label-width="0px" class="login-form">
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="密码" v-model="form.password"
                  @keyup.enter.native="submitForm('form')"></el-input>
      </el-form-item>
      <div v-show="hasError" class="error">{{errorMessage}}</div>
      <div class="login-btn">
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </div>
      <p class="tips">Tips : 用户名和密码随便填。</p>
    </el-form>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        hasError: false,
        errorMessage: '',
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      ...mapGetters({ loading: 'loading' })
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$http.post('/login', { username: this.form.username, password: this.form.password }).then(result => {
              if (result.success) {
                this.$store.dispatch('login', result.data);
                const redirect = decodeURIComponent(this.$route.query.redirect || '/index');
                this.$router.push({
                  path: redirect
                })
              } else {
                this.errorMessage = result.message;
                this.hasError = true;
              }
            }).catch(error => {
              console.log(error);
            })
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style lang='less' rel='stylesheet/less' scoped>
  .login-container {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(56, 157, 170, 0.82);

    .title {
      position: absolute;
      top: 50%;
      width: 100%;
      margin-top: -230px;
      text-align: center;
      font-size: 30px;
      color: #fff;
    }

    .login-form {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 380px;
      height: 240px;
      margin: -150px 0 0 -190px;
      padding: 40px;
      border-radius: 5px;
      background: #fff;

      .login-btn {
        text-align: center;

        button {
          width: 100%;
          height: 36px;
        }
      }

      .tips {
        font-size:12px;
        line-height:30px;
        color:#999;
      }
    }
  }
</style>

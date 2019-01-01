<template>
  <div class="wss-container">

    <div class="wss-login">
      <el-card>
        <div class="wss-login__box">
          <div class="wss-login__box-title">
            信息科排班系统
          </div>

          <div class="wss-login__box-form">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
              <el-form-item prop="name">
                <el-input v-model="ruleForm.name">
                  <template slot="prepend">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-yonghuming"></use>
                    </svg>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item prop="pwd">
                <el-input v-model="ruleForm.pwd" type="password">
                  <template slot="prepend">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-mima"></use>
                    </svg>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
              </el-form-item>
            </el-form>
          </div>

        </div>
      </el-card>
    </div>

    <div class="wss-account-test">
      <el-card>
        <div class="wss-account-test-title">
          请选择测试的账号
        </div>
        <div class="wss-account-test-accounts">
          <div class="wss-account-test-accounts_admin" @click="onChangeAccount('admin')">admin</div>
          <div class="wss-account-test-accounts_user" @click="onChangeAccount('user')">user</div>
        </div>
      </el-card>
    </div>

  </div>
</template>

<script>
  export default {
    layout: 'default',
    data() {
      return {
        name: 'login-page',
        ruleForm: {
          name: '',
          pwd: '',
        },
        rules: {
          name: [{required: true, message: '输入您的账号', trigger: 'blur'}],
          pwd: [{required: true, message: '密码', trigger: 'blur'}],
        },

        accountList: {
          admin: {
            name: 'admin',
            pwd: '123456'
          },
          user: {
            name: 'user',
            pwd: '123456'
          },
        }
      }
    },

    methods: {
      // 提交表单
      submitForm(formName) {

        const pageList = {
          admin: '/adminPage',
          user: '/userPage',
        }
        const account = this.ruleForm.name

        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            const path = pageList[account]
            this.$router.push({
              path,
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      // 切换测试账号和密码
      onChangeAccount(account) {
        const type = this.accountList[account]
        Object.assign(this.ruleForm, type)
      }
    }
  }
</script>

<style scoped>
  .wss-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wss-login {
    width: 450px;
  }

  .wss-account-test {
    position: fixed;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    text-align: center;
  }

  .wss-account-test-title {
    font-size: 24px;
    font-weight: 600;
  }

  .wss-account-test-accounts {
    margin-top: 10px;
    background-color: antiquewhite;
  }

  .wss-account-test-accounts_admin, .wss-account-test-accounts_user {
    cursor: pointer;
    padding: 8px 0;
  }

  .wss-account-test-accounts_admin:hover, .wss-account-test-accounts_user:hover {
    background-color: mediumslateblue;
    color: #fff;
  }

  .wss-login__box {
    text-align: center;
  }

  .wss-login__box-title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .wss-login__box-form {
    /*width: 50%;*/
    display: flex;
    justify-content: center;
  }
</style>

<template>
  <div class="wss-container">
    <el-card>
      <div class="wss-login-box">
        <div class="wss-login-box__title">
          排班系统
          {{input3}}

          普通
          {{normal}}
        </div>

        <div class="wss-login-box__item">
          <el-input placeholder="请输入内容" v-bind="normal">
            <template slot="prepend">请输入姓名</template>
          </el-input>
        </div>

        <div class="wss-login-box__item">
          <el-input placeholder="请输入内容"  v-model="input3" type="password">
            <template slot="prepend">请输入密码</template>
          </el-input>
        </div>

        <div class="wss-login-box__btns">
          <el-button type="success">登录</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'login',
  components: {
    Logo
  },

  data() {
    return {
      input3: '',

      normal: ""
    }
  },
  methods: {
    toTestPage() {
      // vue-router
      this.$router.push({
        path: 'testPage',
        query: {
          a: 466
        }
      })
    },

    dy() {
      this.toTestPage()
    }
  }
}
</script>

<style scoped>
.wss-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
  .wss-login-box {
    background: #FFF;
    border: 1px solid #ececec;
    padding: 10px;
  }
.wss-login-box__title {
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

.wss-login-box__item {
  margin-bottom: 10px;
}

  .wss-login-box__btns {
    margin-top: 10px;
    text-align: center;
  }
</style>

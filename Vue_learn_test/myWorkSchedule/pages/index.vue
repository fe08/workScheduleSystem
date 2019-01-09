<template>
  <div class="wss-container">
    <el-card>
      <div class="wss-login-box">
        <div class="wss-login-box__title">排班系统</div>

        <div class="wss-login-box__item">
          <el-input placeholder="请输入用户名" v-model="name">
            <template slot="prepend">
              <i class="iconfont icon-yonghu"></i>
            </template>
          </el-input>
        </div>

        <div class="wss-login-box__item">
          <el-input placeholder="请输入密码" v-model="password" type="password">
            <template slot="prepend">
              <i class="iconfont icon-mima"></i>
            </template>
          </el-input>
        </div>

        <div class="wss-login-box__btns">
          <el-button type="success" @click="toPage">登录</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
const pageList = {
  admin: "/adminPage",
  user: "/userPage"
};

export default {
  layout: "login",
  components: {
    Logo
  },
  computed: {
    account() {
      return this.$store.state.account;
    }
  },

  data() {
    return {
      name: "",

      password: ""
    };
  },

  mounted() {
    console.log(this.account);
  },

  methods: {
    toPage() {
      for (var i = 0; i < this.account.length; i++) {
        var item = this.account[i];
        if (item.name === this.name && item.password === this.password) {
          console.log("ok");
        }
      }
    }
  }
};
</script>

<style scoped>
.wss-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.wss-login-box {
  background: #fff;
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

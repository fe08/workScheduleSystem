<template>
  <div>
    my word schedule

    <el-button type="primary" @click="toTestPage">toTestPage</el-button>

    <!--纯粹是a标签的样子-->
    <nuxt-link to="/testPage">基础用法</nuxt-link>


    <nuxt-link :to="{path:'/testPage', query: {a: 233}}">另一个跳转的方法</nuxt-link>

    <hr>

    <el-button type="warning" @click="dy">调用方法</el-button>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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

<style>


</style>

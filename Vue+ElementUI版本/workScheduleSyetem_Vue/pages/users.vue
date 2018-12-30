<template>
  <div>
    这个是父组件
    <!--<nuxt-link tag="div" to="{path: `/users${id}`}">进入id组件</nuxt-link>-->
    <el-button @click="toIdChild">to id page</el-button>
    <nuxt-child />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: "",
        id: 233
      }
    },

    methods: {
      toIdChild() {
        this.$router.push({
          path: `/users/${this.id}`
          // params: {}
        })
      }
    }
  }
</script>

<style scoped>

</style>

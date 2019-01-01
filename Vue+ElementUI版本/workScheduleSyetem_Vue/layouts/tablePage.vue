<template>
  <div class="wss-table-page">
    <!--<h1>this is table page</h1>-->
    <!--<div class="wss-table-content">-->
      <!--<nuxt/>-->
    <!--</div>-->

    <div class="wss-table-content">
      <el-card>
        <nuxt/>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: ""
      }
    }
  }
</script>

<style scoped>
  .wss-table-content {
    background-color: #fff;
    margin: 0 20px;
    padding: 20px;
    border-radius: 20px;
  }

</style>

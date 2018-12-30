<template>
  <div class="boxer-container">
    this is a boxer
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: ""
      }
    },

    mounted() {
      this.$testInject('boxer!!!')
      // this.$myInjectedFunction('test')

    }
  }
</script>

<style scoped>
.boxer-container {
  border: 1px solid aqua;
}
</style>

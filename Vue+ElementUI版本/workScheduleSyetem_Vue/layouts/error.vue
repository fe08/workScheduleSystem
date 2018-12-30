<template>
  <div>
    this is a error page

    <div>
      {{error.statusCode}}
      {{error}}
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'error'
    ],
    data() {
      return {
        msg: ""
      }
    }
  }
</script>

<style scoped>

</style>

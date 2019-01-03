<template>
  <div class="outer">
    <nuxt/>
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

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /*区别于default的地方*/
  background-color: #ececec;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>

<template>
  <div>
    testPage

    <hr>
    <span>
      {{id}}
    </span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: "",
        id: ''
      }
    },

    computed: {

    },

    props: {

    },

    watch: {

    },

    beforeMount() {
      const {a} = this.$route.query
      // console.warn(this.$route.query)
      this.id = a
    },

    methods: {
      a() {
        console.log(this.id)
      },
      b(){

      }
    },
  }
</script>

<style scoped>

</style>

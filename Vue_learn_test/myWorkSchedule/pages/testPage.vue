<template>
  <div>
    testPage

    <hr>
    <span>
      {{id}} 例如这是修改 {{str}}
    </span>
    <hr>
    <el-button @click="testMock" type="warning">testMock</el-button>
    <hr>

    <el-button plain>朴素按钮</el-button>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        msg: "",
        id: '',
        str: ''
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

      },

      testMock() {
        axios.post('/test', {name: 'dina'}).then(resp => {
          // console.log(resp.data)
          this.str = resp.data.data
        })
      }

      // yarn add mockjs

    },
  }
</script>

<style scoped>
  .outer-test {
    background-color: aqua;
  }

.test {
  font-size: 36px;
  color: red;
  margin:10px;
  background-color: #fff;
}
</style>

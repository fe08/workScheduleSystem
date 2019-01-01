<template>
  <div>
    user page
    <hr>
    <el-button @click="setNewsApi" type="primary">tyr</el-button>
    <el-button @click="originApi" type="warning">origin</el-button>
  </div>
</template>

<script>
  import api from "~/api/api.js"

  import axios from 'axios'

  export default {
    layout: 'tablePage',
    data() {
      return {
        msg: ""
      }
    },

    mounted() {
      // console.warn(api.JH_news)
    },

    methods: {
      setNewsApi: function() {
        api.JH_news('/news/index', 'id=233')
          .then(res => {
            console.log(res);
            // this.newsListShow = res.articles;
          });
      },
     async originApi() {
        // const data = await this.$axios.$post('news/index', {id: 233})
        // console.log(data)
        // this.$axios('news/index', resp => {
        //   console.log(resp)
        // })
       // console.log('this.$axios', this.$axios)
       // console.log('*****')
       // console.log('this.$axios.$post', this.$axios.$post)

       axios.post('/news/index', {id: 233}).then(resp => {
         console.log(resp)
       })
      }
    }
  }
</script>

<style scoped>

</style>

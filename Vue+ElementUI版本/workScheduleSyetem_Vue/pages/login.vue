<template>

  <transition>
    <div>
      <div>
        login
      </div>
      <boxer></boxer>
      <div>
        <span>use store</span>
        <el-button type="primary" @click="$store.commit('increment')">{{$store.state.counter}}</el-button>
        <!--<span>{{$store}}</span>-->

        <hr>
        <input type="text" v-model="todoText" @keyup.enter="addTodo">
        <el-button type="primary" @click="addTodo">add todo</el-button>
        <ul>
          <li v-for="(todo, key) in todos" :key="key">
            <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
            <span>
            {{todo}}
          </span>
          </li>
        </ul>

          <el-button @click="toUsers">
            去users页面
          </el-button>

      </div>
    </div>
  </transition>

</template>

<script>
  // import store from '@/store/login.js'
  import Boxer from "@/components/Boxer.vue"

  import {mapMutations} from 'vuex'

  export default {
    // middleware: "middleware_test",
    components: {
      Boxer
    },

    data() {
      return {
        todoText: ''
      }
    },

    computed: {
      todos() {
        // return this.$store.state.login.list
        return this.$store.state.login.list
      }
    },

    mounted() {
      // console.warn(this.$store.state.login)
      // console.warn(store)
      // this.$combineInject("mounted combine")
    },

    asyncData(context) {
      // context.app.$combineInject('combine-testing')
    },


    methods: {
      addTodo() {
        this.$store.commit('login/add', this.todoText)
        this.todoText = ''
      },
      ...mapMutations({
        toggle: 'login/toggle'
      }),

      toUsers() {
        this.$router.push({
          path: '/users'
        })
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <!-- <button @click="$store.commit('increment')">{{ $store.state.counter }}</button> -->
  </div>
</template>

<script>
import store from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store);
    console.log(store.state);
  }
};
</script>

<style>
</style>

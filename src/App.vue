<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Component4></Component4>
  </div>
</template>

<script>
import Component4 from '@/components/Component4'
export default {
  components: {
    Component4
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

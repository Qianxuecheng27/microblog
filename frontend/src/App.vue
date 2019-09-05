<template>
  <div id="app">
    <Nav v-if="$route.name !== 'login'"/>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#content {
  margin: 50px 0 0 0;
  padding: 0;
}
</style>

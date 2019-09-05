<template>
<div>
  <nav class="row header">
    <div class="three columns logo">
      <div class="logo-img common-v-aligin">
        <img src="../../public/images/brand-white.png" alt="">
      </div>
      <ul class="logo-nav common-v-aligin">
          <li><router-link :to="{ name: 'index' }" exact>首页</router-link></li>
          <li><a href="">热门</a></li>
          <li><a href="">个人主页</a></li>
      </ul>
    </div>
    <div class="offset-by-six three columns search common-v-aligin">
      <form action="" class="six columns common-v-aligin">
        <input type="text" placeholder="搜索">
      </form>
      <div class="two columns notification common-v-aligin">
        <i class="iconfont icon-xiaoxitongzhitixinglingshenglingdang"></i>
      </div>
      <div class="one column avatar-nav">
        <a href=""><img src="../../public/images/avatar.png" alt=""></a>
      </div>
      <div class="three columns username">
        {{ $store.state.user.username }}
      </div>
      
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'home',
}
</script>
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.3rem;
  margin-bottom: 1.6rem;
  background: #3097D1;
  color: white;
}
.header .logo {
  height: 100%;
}
.header .logo .logo-img {
  float: left;
  height: 100%;
  margin-left: 1rem;
}
.common-v-aligin::before {
  content: '';
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.header .logo .logo-img img {
  width: 85px;
  vertical-align: middle;
}
.logo-nav {
  float: left;
  height: 100%;
  list-style: none;
  margin-bottom: 0;
}
.logo-nav li {
  display: inline-block;
  vertical-align: bottom;
}
.logo-nav li a {
  margin-left: 1.2rem;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
}
.logo-nav li a:hover {
  color: white;
}
.logo-nav li .router-link-exact-active {
  color: white
}
.search {
  height: 100%;
}
.search form {
  height: 100%;
}
.search form input {
  width: 95%;
  height: 2.8rem;
  margin: 0;
  padding: 0.375rem 0.75rem;
  font-size: 1.4rem;
  line-height: 1.4rem;
  color: #1e3948;
  border-color: #1C73A5;
  vertical-align: middle;
}
.search .notification {
  height: 100%;
}
.search i {
  color: rgba(255, 255, 255, 0.5);
  vertical-align: middle;
  font-size: 2.5rem;
}
.search i:hover {
  color: white;
  cursor: pointer;
}
.avatar-nav {
  height: 100%;
}
.avatar-nav a {
  display: inline-block;
  margin-top: 0.7rem;
}
.avatar-nav img {
  max-width: 35px;
  border-radius: 100%;
}
.username {
  margin-top: 1.2rem;
  padding-left: 1rem;
}
</style>

<template>

  <div class="blog-container">
    <header ><slot name="header"/></header>
    <main><slot name="main"/></main>
    <footer><slot name="footer"/></footer>
  </div>
</template>

<script setup>
  import { provide, ref } from 'vue'

  // 检查是否点击了菜单
  const checkBurger = ref(false)
  const updateCheckBurger = b => {
    checkBurger.value = b
  }

  provide('checkBurger', checkBurger)
  provide('updateCheckBurger', updateCheckBurger)
</script>

<style scoped>
  .blog-container {
    height: 100vh;
  }

  header {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: 300px;
    /* background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%); */
    background-image: url('assets/img/bg.jpg');
    background-size: cover;
    color: wheat;

  }

  main {
    position: relative;
    top: 10px;
    left: 0;
    right: 0;
  }

  footer {
    position: relative;
    background-color: #eee;
    box-shadow:  0 0 5px 2px rgba(0, 0, 0, .3);
  }

  @media screen and (max-width: 1000px) {
    .blog-container {
      width: 100vw;
    }
  }
</style>
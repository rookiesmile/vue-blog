<template>
  <blog-container>
    <template #header>
      <navigation logo="apecode">
        <template #nav-menu-item>
          <navigation-item path='/home' itemIcon="fa fa-home home" itemText="首页"/>
          <navigation-item path="/acnav" itemIcon="fa fa-archive archive" itemText="归档&分类"/>
          <navigation-item path="/tags" itemIcon="fa fa-tags tags" itemText="标签"/>
          <navigation-item path="/message" itemIcon="fa fa-comments message" itemText="留言"/>
          <navigation-item path="/navlink" itemIcon="fa fa-th-list project" itemText="导航"/>
          <navigation-item path='/about' itemIcon="fa fa-male about" itemText="关于我"/>
        </template>
      </navigation>
    </template>
    <template #main>
      <div class="main-container">
        <div v-if="$route.path==='/'">
          <home/>
        </div>
        <router-view />
      </div>
    </template>
    <template #footer>
      <footer-comp>
        <template #leftContent>
          <footer-left-comp></footer-left-comp>
        </template>
        <template #rightContent>
          <footer-right-comp></footer-right-comp>
        </template>
      </footer-comp>
    </template>
  </blog-container>
  <top-comp></top-comp>
  <!-- 看板娘 -->
  <live2d/>
</template>

<script setup>
import BlogContainer from 'common/container/BlogContainer.vue'
import Home from 'views/blog/home/Home.vue'
import Navigation from 'components/navigation/Navigation.vue'
import NavigationItem from 'components/navigation/NavigationItem.vue'
import FooterComp from 'components/footer/FooterComp.vue'
import FooterLeftComp from 'components/footer/FooterLeftComp.vue'
import FooterRightComp from 'components/footer/FooterRightComp.vue'

import TopComp from 'components/top/TopComp.vue'
// 看板娘
import live2d from 'components/live2d/index.vue'
window.onload = function() {
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  })
  document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
  })
}
</script>

<style>
@import url('assets/css/base.css');
  .vue-live2d {
    position: fixed;
    bottom: -11px;
    right: 0;
    z-index: 999;
  }

  @media screen and (max-width: 768px){
    .vue-live2d {
      width: 200px !important;
      height: 200px !important;
    }
    #vue-live2d-main {
      width: 160px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
</style>

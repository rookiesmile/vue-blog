<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <article-comp></article-comp>
</template>

<script setup>
  import { useRouter, useRoute } from 'vue-router'
  import {onMounted, ref} from "vue";

  import loading from 'components/loader/loading.vue'
  import ArticleComp from 'components/article/ArticleComp.vue'

  const router = useRouter()
  const route = useRoute()


  // 加载loader...
  const isLoading = ref(true)

  onMounted(() => {
    isLoading.value = !isLoading.value
  })

</script>

<style scoped>

</style>
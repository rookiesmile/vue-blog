<template>
  <div class="message-box">
    <slot name="comment"/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  @media screen and (max-width: 768px) {
    .message-box {
      padding-right: 0;
      margin-bottom: 30px;
    }
  }
</style>
<template lang="html">
  <p v-editable="content"><a class="button" :href="content.url.url" target="_blank">{{ content.label }}</a></p>
</template>

<script>
  export default {
    props: [
      'content'
    ]
  }
</script>

<style lang="scss">

</style>

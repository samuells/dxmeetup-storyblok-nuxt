<template lang="html">
  <div v-html="markedProse" v-editable="content">
  </div>
</template>

<script>
  import marked from 'marked'

  export default {
    props: [
      'content'
    ],
    computed: {
      markedProse() {
        return marked(this.content.prose)
      }
    }
  }
</script>

<style lang="scss">

</style>

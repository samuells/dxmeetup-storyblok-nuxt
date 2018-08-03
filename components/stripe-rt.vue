<template lang="html">
  <div class="paragraph paragraph--stripe stripe--default">
    <div class="stripe background--default none padding--both">
      <div class="paragraph paragraph--text text--default text-column" v-editable="stripe">
        <div class="rt-content">
        </div>
        <component :key="content._uid" v-for="content in stripe.content" :content="content" :is="content.component"></component>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: [
      'stripe'
    ]
  }
</script>

<style lang="scss">

</style>

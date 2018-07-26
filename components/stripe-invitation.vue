<template lang="html">
  <div class="paragraph paragraph--stripe stripe--default">
    <div class="stripe background--tetris top-fade-in padding--both">
      <div class="paragraph paragraph--text text--default text-column">
        <div class="rt-content" v-editable="stripe">
          <h2 class="lead">{{ stripe.title }}</h2>
          <h3 class="lead">{{ stripe.date }}</h3>
          <h3 class="lead"><a class="button" v-bind:href="stripe.url.url">{{ stripe.label }}</a></h3>
        </div>
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

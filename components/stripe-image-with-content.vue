<template lang="html">
  <div class="paragraph paragraph--stripe stripe--default">
    <div class="stripe background--crazy top-fade-in padding--both">
      <div class="paragraph paragraph--text-with-image text-with-image--default">
        <div class="text-with-image image-left" v-editable="stripe">
          <div class="image-column">
            <div class="image-container image--">
              <img :src="stripe.image">
            </div>
          </div>
          <div class="content-column">
            <div class="rt-content">
              <component :key="content._uid" v-for="content in stripe.content" :content="content" :is="content.component"></component>
            </div>
          </div>
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

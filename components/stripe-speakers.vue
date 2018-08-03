<template lang="html">
  <div class="paragraph paragraph--stripe stripe--default">
    <div class="stripe background--default none padding--both">
      <div class="paragraph paragraph--text text--default text-column">
        <div class="rt-content" v-editable="speakerHeadline">
          <h3 class="lead">{{ speakerHeadline }}</h3>
        </div>
      </div>
      <div class="paragraph paragraph--grid-container grid-container--default">
        <div class="grid-container">
          <ul class="grid--list style--two-column width--xxlarge columns--3">
            <speaker :key="speaker._uid" v-for="speaker in speakers" :speaker="speaker"></speaker>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'speakerHeadline',
      'speakers'
    ]
  }
</script>

<style lang="scss">

</style>

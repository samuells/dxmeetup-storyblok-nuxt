<template lang="html">
  <li class="grid--list--item">
    <div class="paragraph paragraph--text-with-image text-with-image--default">
      <div class="text-with-image image-left" v-editable="speaker">
        <div class="image-column">
          <div class="image-container image--">
            <img :src="speaker.image">
          </div>
        </div>
        <div class="content-column">
          <div class="rt-content">
            <h4><strong>{{ speaker.talk_title }}</strong></h4>
            <p>{{ speaker.name }}, {{ speaker.speaker_function}}</p>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: [
      'speaker'
    ]
  }
</script>

<style lang="scss">

</style>

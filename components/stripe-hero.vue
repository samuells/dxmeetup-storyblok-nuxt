<template lang="html">
  <div class="hero-area-and-content-container">
    <div class="theme-bg hero-area-container object-fit-container">
      <img :src="heroArea.Image">
      <div class="hero-triangles"></div>
      <div class="hero-area">
        <div class="hero-area-content">
          <div class="rt-content">
            <h1>{{ heroArea.Headline}}</h1>
            <p>{{ heroArea.Subheadline}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="intro--content--wrapper">
      <div class="intro--content">
        <div class="rt-content">
          <p>{{ heroArea.Introduction }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'heroArea'
    ]
  }
</script>

<style lang="scss">
</style>

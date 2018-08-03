<template lang="html">
  <div class="paragraph paragraph--stripe stripe--default">
    <div class="stripe background--grey-background none padding--both">
      <div class="paragraph paragraph--project-facts project-facts--default">
        <div class="project-facts" v-editable="stripe">
          <div class="content-column">
            <div class="inspired-bridge-header">
              <div class="rt-content">
                <h3>{{ stripe.headline }}</h3>
              </div>
            </div>
            <ul class="success-numbers-list">
              <fact-detail :key="fact._uid" v-for="fact in stripe.facts_details" :fact="fact"></fact-detail>
            </ul>
          </div>
          <div class="image-column">
            <img :src="stripe.image">
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

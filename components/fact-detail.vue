<template lang="html">
  <li class="success-numbers-item">
    <div class="paragraph paragraph--success-number success-number--default">
      <div class="success-number">
        <h2 class="">{{ fact.key_value }}</h2>
        <p>{{ fact.description }}</p>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: [
      'fact'
    ]
  }
</script>

<style lang="scss">

</style>

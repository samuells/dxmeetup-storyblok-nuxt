<template>
  <section class="util__container">
    <component :key="heroArea._uid" v-for="heroArea in story.content.heroArea" :heroArea="heroArea" :is="heroArea.component"></component>
    <component :key="stripe._uid" v-for="stripe in story.content.stripes" :stripe="stripe" :is="stripe.component"></component>
    <stripe-speakers :speakerHeadline="story.content.speakers_headline" :speakers="story.content.speakers"></stripe-speakers>
    <stripe-image-with-content :key="stripe._uid" v-for="stripe in story.content.video_spotlight" :stripe="stripe"></stripe-image-with-content>
  </section>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {
  data () {
    return { story: { content: {} } }
  },
  mixins: [storyblokLivePreview],
  asyncData (context) {
    // Check if we are in the editor mode
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi.get('cdn/stories/home', {
      version: version,
      cv: context.store.state.cacheVersion
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>

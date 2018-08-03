import Vue from 'vue'
import StripeHero from '~/components/stripe-hero.vue'
import StripeInvitation from '~/components/stripe-invitation.vue'
import StripeFacts from '~/components/stripe-facts.vue'
import StripeRT from '~/components/stripe-rt.vue'
import StripeSpeakers from '~/components/stripe-speakers.vue'
import StripeImageWithContent from '~/components/stripe-image-with-content.vue'

import FactDetail from '~/components/fact-detail.vue'
import RtContent from '~/components/rt-content.vue'
import RtButton from '~/components/rt-button.vue'
import Speaker from '~/components/speaker.vue'

Vue.component('stripe-hero', StripeHero)
Vue.component('stripe-invitation', StripeInvitation)
Vue.component('stripe-facts', StripeFacts)
Vue.component('stripe-rt', StripeRT)
Vue.component('stripe-speakers', StripeSpeakers)
Vue.component('stripe-image-with-content', StripeImageWithContent)


Vue.component('fact-detail', FactDetail)
Vue.component('rt-content', RtContent)
Vue.component('rt-button', RtButton)
Vue.component('speaker', Speaker)

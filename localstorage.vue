
  <div v-if="state.email !== undefined && state.token !== undefined">
    <div class="mt-20"> {{ state.email }}</div>

import { useStorage } from '@vueuse/core'
const state = useStorage('vue-token', { email: undefined, token: undefined })
  state.value.email = enteremail.value
  state.value.token = res.access_token

import { createStore } from 'vuex'

import getters from './getters.js'
import mutations from './mutations.js'
import state from './state.js'

export default createStore({
  state,
  getters,
  mutations,
})

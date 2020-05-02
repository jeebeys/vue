import Vue from 'vue'
import Vuex from 'vuex'
import createVuexShare from 'vuex-shared-mutations'
import createVuexState from 'vuex-persistedstate'
import createVuexCache from 'vuex-cache'

Vue.use(Vuex)

// eslint-disable-next-line camelcase
const _createVuexShare = createVuexShare({
  sharingKey: 'share_sharing',
  storageKey: 'share_storage',
  predicate: (mutation, state) => {
    const predicate = ['increment']
    return predicate.indexOf(mutation.type) >= 0
  }
})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  plugins: [createVuexCache, _createVuexShare]
})

createVuexState({
  key: 'local_storage'
})(store)

export default store

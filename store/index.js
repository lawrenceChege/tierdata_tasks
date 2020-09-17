import Vuex from 'vuex'
import users from './modules/users'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      // eslint-disable-next-line no-undef
      users,
    },
    state: {},
  })
}

export default createStore

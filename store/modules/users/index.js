/***
 *
 * Property Module
 *
 *
 */

import getters from './getter'
import mutations from './mutation'
import actions from './action'

export default {
  state: {
    user: {
      username: '',
      email: '',
      phone_number: '',
      password: '',
      verified: '',
    },
  },
  getters,
  actions,
  mutations,
}

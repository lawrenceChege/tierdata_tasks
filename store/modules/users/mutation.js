/* eslint-disable camelcase */
export default {
  SET_USER_DATA(state, data) {
    // eslint-disable-next-line no-console
    console.log(data, 'data')
    const { username, email, phone_number, password, verified } = data
    state.users.username = username
    state.users.email = email
    state.users.phone_number = phone_number
    state.users.password = password
    state.users.verified = verified
  },
}

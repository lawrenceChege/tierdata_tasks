<template>
  <div>
    <Signup class="center-image" />
    <h4 class="center-text">Sign Up</h4>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-01"
        label-align-sm="left"
        label="Username"
        label-for="input-01"
      >
        <b-form-input
          id="input-01"
          v-model="form.username"
          type="text"
          required
          placeholder="johndoe"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label-align-sm="left"
        label="Email"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="johndoe@domain.com"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-02"
        label="Phone Number"
        label-align-sm="left"
        label-for="input-02"
      >
        <b-form-input
          id="input-02"
          v-model="form.phone"
          type="tel"
          required
          placeholder="+254712345432"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label-align-sm="left"
        label="Password:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="********"
        ></b-form-input>
      </b-form-group>
      <b-button class="width-vp" to="/tasks" type="submit" variant="primary"
        >Sign Up</b-button
      >
      <p>
        Already Registered?
        <NuxtLink to="/auth/login">Login</NuxtLink>
      </p>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
        phone: '',
        password: '',
      },
      show: true,
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.createUser()
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    createUser() {
      axios
        .post('http://127.0.0.1:3543/signup/', {
          username: this.form.username,
          email: this.form.email,
          phone_number: this.form.phone,
          password: this.form.password,
          verified: false,
        })
        .then(function (response) {
          sessionStorage.setItem('username', this.form.username)
          sessionStorage.setItem('email', this.form.email)
          sessionStorage.setItem('phone_number', this.form.phone_number)
          sessionStorage.setItem('password', this.form.password)
          sessionStorage.setItem(
            'verification_code',
            response.data.verification_code
          )
          // eslint-disable-next-line no-console
          console.log(sessionStorage.getItem('username'))
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error.response)
        })
    }, // create user,
  },
}
</script>

<template>
  <div>
    <Signup class="center-image" />
    <h4 class="center-text">Sign Up</h4>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-01" label="Username" label-for="input-01">
        <b-form-input
          id="input-01"
          v-model="form.username"
          type="text"
          required
          placeholder="johndoe"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Email" label-for="input-1">
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

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="********"
        ></b-form-input>
      </b-form-group>
      <b-button class="width-vp" type="submit" variant="primary"
        >Login</b-button
      >
      <p>
        Already Registered?
        <NuxtLink to="/auth/signup">signup</NuxtLink>
      </p>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
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
  },
}
</script>
<style scoped>
.width-vp {
  width: 60vw;
  margin-left: auto;
  margin-right: auto;
}
.center-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.center-text {
  text-align: center;
}
</style>

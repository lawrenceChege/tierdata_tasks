<template>
  <div>
    <Verify class="center-image" />
    <h4 class="center-text">Verify Phone Number</h4>
    <div>
      <p>
        We have sent a verification code to +25476542312. Not your number?
        <NuxtLink to="/auth/change-number">Change</NuxtLink>
      </p>
    </div>

    <b-form @submit.stop.prevent>
      <label for="feedback-user">Verification code</label>
      <b-input
        id="feedback-user"
        v-model="code"
        :state="validation"
        placeholder="123-123"
      ></b-input>
      <b-form-invalid-feedback :state="validation">
        Your confirmation code must be 6 digits long
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback>
      <div>
        <p>Expires in: {{ timer }}</p>
        <NuxtLink to="/auth/signup">Resend code</NuxtLink>
      </div>

      <b-button
        class="width-vp"
        to="/team/create"
        type="submit"
        variant="primary"
        >Verify Phone</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: '',
    }
  },
  computed: {
    validation() {
      return this.code.length === 6
    },
  },
}
</script>

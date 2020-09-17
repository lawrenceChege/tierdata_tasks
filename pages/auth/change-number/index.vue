<template>
  <div>
    <Signup class="center-image" />
    <h4 class="center-text">Resend Verification code</h4>

    <b-form @submit.stop.prevent>
      <label for="feedback-user">Change phone number</label>
      <b-input
        id="feedback-user"
        v-model="phone"
        :state="validation"
        value="+25431234567"
      ></b-input>
      <b-button class="width-vp" type="submit" variant="primary"
        >Send code</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
    }
  },
}
</script>

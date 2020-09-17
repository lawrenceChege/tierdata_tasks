<template>
  <div>
    <Invite class="center-image" />
    <h4 class="center-text">Invite to collaborate</h4>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-01"
        label-align-sm="left"
        label="User 1"
        label-for="input-01"
      >
        <b-form-input
          id="input-01"
          v-model="form.userOne"
          type="email"
          placeholder="johndoe@domian.com"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-02"
        label-align-sm="left"
        label="User 2"
        label-for="input-02"
      >
        <b-form-input
          id="input-02"
          v-model="form.userTwo"
          type="email"
          placeholder="johndoe@domian.com"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-03"
        label-align-sm="left"
        label="User 3"
        label-for="input-03"
      >
        <b-form-input
          id="input-03"
          v-model="form.userThree"
          type="email"
          placeholder="johndoe@domian.com"
        ></b-form-input>
      </b-form-group>
      <b-button class="width-vp" to="/tasks" type="submit" variant="primary"
        >Invite Members</b-button
      >
      <b-button type="submit" variant="outline-success"> Skip </b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userOne: '',
        userTwo: '',
        userThree: '',
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

<template>
  <div>
    <Team class="center-image" />
    <h4 class="center-text">Create Task Board</h4>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-01"
        label-align-sm="left"
        label="Board name"
        label-for="input-01"
      >
        <b-form-input
          id="input-01"
          v-model="form.boardName"
          type="text"
          required
          placeholder="Project X"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-02"
        label-align-sm="left"
        label="Team name"
        label-for="input-02"
      >
        <b-form-input
          id="input-02"
          v-model="form.teamName"
          type="text"
          required
          placeholder="X Men"
        ></b-form-input>
      </b-form-group>
      <b-button class="width-vp" type="submit" variant="primary"
        >Create</b-button
      >
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
        boardName: '',
        teamName: '',
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

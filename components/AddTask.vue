<template>
  <div>
    <Signup class="center-image" />
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-01"
        label-align-sm="left"
        label="Task Title"
        label-for="input-01"
      >
        <b-form-input
          id="input-01"
          v-model="form.title"
          type="text"
          required
          placeholder="Set up dev ops"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label-align-sm="left"
        label="Task Description"
        label-for="input-1"
      >
        <b-form-textarea
          id="textarea"
          v-model="form.description"
          placeholder="Describe the task..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group
        id="input-group-02"
        label="Labels"
        label-align-sm="left"
        label-for="tags-02"
      >
        <b-form-tags v-model="labels" input-id="tags-02"></b-form-tags>
      </b-form-group>
      <Priority />
      <Members />
      <b-form-group
        id="input-group-2"
        label-align-sm="left"
        label="Due Date"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.dueDate"
          type="date"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label-align-sm="left"
        label="Due Time"
        label-for="input-4"
      >
        <b-form-timepicker
          v-model="form.dueTime"
          locale="en"
        ></b-form-timepicker>
      </b-form-group>
      <b-button type="submit" variant="primary">Add Task</b-button>
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
        title: '',
        description: '',
        priority: '',
        assignedTo: '',
        dueDate: '',
        dueTime: '',
      },
      labels: ['code', 'admin', 'frontend'],
      members: ['User 1', 'User 2', 'User 3'],
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

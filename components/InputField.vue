<template>
  <div class="col-md-6">
    <div class="form-group">
      <input
        type="text"
        :value="value"
        ...
        @input="$emit('input', $event.target.value)"
      />
      <label for="name">Name <sub></sub></label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: String,
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('handleChange', e.target.value)
    },
  },
}
</script>

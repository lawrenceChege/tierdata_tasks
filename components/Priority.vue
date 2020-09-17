<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      size="sm"
      class="mt-3"
    ></b-form-select>
    <div class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Priority level' },
        { value: '1', text: 'Low' },
        { value: '2', text: 'Medium' },
        { value: '3', text: 'High' },
      ],
    }
  },
}
</script>

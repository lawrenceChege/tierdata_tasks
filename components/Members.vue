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
        { value: null, text: 'Assign to' },
        { value: 'id_1', text: 'kevin' },
        { value: 'id_2', text: 'Sally' },
        { value: 'id_3', text: 'mwas' },
        { value: 'id_4', text: 'me', disabled: true },
      ],
    }
  },
}
</script>

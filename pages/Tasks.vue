<template>
  <kanban-board :stages="stages" :blocks="blocks"> </kanban-board>
</template>
<script>
export default {
  data() {
    return {
      stages: ['on-hold', 'in-progress', 'needs-review', 'approved'],
      blocks: [
        {
          id: 1,
          status: 'on-hold',
          title: 'Welcome',
        },
        {
          id: 2,
          status: 'on-hold',
          title: 'to',
        },
        {
          id: 3,
          status: 'in-progress',
          title: 'the',
        },
        {
          id: 4,
          status: 'in-progress',
          title: 'danger',
        },
        {
          id: 5,
          status: 'in-progress',
          title: 'zone',
        },
      ],
    }
  },
}
</script>

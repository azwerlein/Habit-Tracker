<script>
import DayListItem from "./DayListItem.vue";

export default {
  name: "DayList",
  components: {DayListItem},
  props: {
    days: {
      type: Array,
      required: true
    },
  },
}
</script>

<template>
  <div class="d-flex flex-column">
    <day-list-item v-for="day in days"
                   :day="day"
    ></day-list-item>
  </div>
</template>

<style scoped>

</style>
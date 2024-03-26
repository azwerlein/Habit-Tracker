<script>
import Day from "../models/Day.js";

export default {
  name: "DayListItem",
  props: {
    day: {
      type: Day,
      required: true
    }
  },
  methods: {
    grade() {
      let sum = 0;
      this.day.goals.forEach((value) => {
        if (value) sum++;
      });
      return sum / this.day.goals.size * 100;
    }
  },
}
</script>

<template>
  <div class="card bg-white px-2 mb-2">
    <div :class="grade() > 50 ? 'bg-success-subtle' : 'bg-danger-subtle' + ' card-header px-5'">
      <h5 class="card-title">{{day.date.toLocaleDateString()}}</h5>
    </div>
    <div class="card-body px-5">
      <ul class="list-group list-group-flush">
        <li class="d-flex justify-content-between" v-for="[goal, value] in day.goals">
          <p>{{goal.name}}</p>
          <p>{{value ? 'Complete' : 'Incomplete'}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {makeDay} from "../models/Day.js";
import * as Bootstrap from "bootstrap";
export default {
  name: "EntryModal",
  props: {
    title: {
      type: String,
      default: 'Goals'
    },
    goals: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      day: makeDay(new Date(), this.goals),
    }
  },
  methods: {
    saveDay() {
      console.log(this.day + " " + this.day.goals);
      this.$emit('save-day', this.day);
      this.day = makeDay(new Date(), this.goals);
    },
    open() {
      const modal = new Bootstrap.Modal(this.$refs.entryModal);
      modal.show();
      this.day = makeDay(new Date(), this.goals);
    },
  },
  emits: [
    'save-day',
  ]
}
</script>

<template>
  <div class="modal fade" id="entryModal" ref="entryModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{title}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="">
          <div class="modal-body">
            <div class="form-check form-check-reverse form-switch" v-for="(goal, i) in goals">
              <label class="form-check-label">{{goal.name}}: </label>
              <input class="form-check-input" type="checkbox" role="switch" v-model="this.day.goals[i].checked">
            </div>
            <div class="modal-footer">
              <button class="btn btn-success" type="submit" @click="saveDay()">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<script>
import AppModal from "./AppModal.vue";

import Goal from "../models/Goal.js";

export default {
  name: "EditGoalModal",
  components: {AppModal},
  props: {
    title: {
      type: String,
      default: 'Edit Goal'
    },
  },

  data() {
    return {
      goal: new Goal("", 0, 0),
    }
  },

  methods: {
    beginEdit(targetGoal) {
      this.goal = new Goal(targetGoal.name, targetGoal.maxDays, targetGoal.streak);
      this.$emit('begin-edit');
    },

    saveEdit() {
      this.$emit('save-edit', this.goal);
      this.goal = new Goal("", 0, 0);
    },
  },

  emits: [
    'begin-edit',
    'save-edit',
  ],
}
</script>

<template>
  <app-modal id="editGoalModal" :title="title">
    <template #body>
      <div>
        <label class="form-label">Name: </label>
        <input class="form-control" type="text" v-model="goal.name">
        <label class="form-label">Max days: </label>
        <input class="form-control" type="text" v-model="goal.maxDays">
      </div>
    </template>
    <template #footer>
      <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="saveEdit()">Save</button>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
    </template>
  </app-modal>
</template>

<style scoped>

</style>
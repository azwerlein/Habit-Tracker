<script setup>
import GoalListItem from "./GoalListItem.vue";
import EnhancedList from "../models/EnhancedList.js";

defineProps({
  goals: {
    type: EnhancedList,
    required: true
  },
});

const emit = defineEmits(['select-goal']);

function selectGoal(goal) {
  emit('select-goal', goal);
}

</script>

<template>
  <goal-list-item v-for="(goal, index) in goals"
                  :goal="goal"
                  :key="goal.name"
                  @select-goal="selectGoal"
  ></goal-list-item>
</template>

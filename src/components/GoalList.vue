<script setup>
import GoalListItem from "./GoalListItem.vue";

defineProps({
  goals: {
    type: Array,
    required: true
  },
});

const emit = defineEmits(['select-goal']);

function selectGoal(goal) {
  emit('select-goal', goal);
}

</script>

<template>
  <goal-list-item v-for="goal in goals"
                  :goal="goal"
                  :key="goal.name"
                  @select-goal="selectGoal"
  ></goal-list-item>
</template>

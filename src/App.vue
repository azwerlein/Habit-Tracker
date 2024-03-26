<script setup>
import {ref} from "vue";

import Goal from "./models/Goal.js";
import Day from "./models/Day.js";

import Calendar from "./components/Calendar.vue";
import DeleteGoalModal from "./components/DeleteGoalModal.vue";
import GoalList from "./components/GoalList.vue";
import DayList from "./components/DayList.vue";
import EditGoalModal from "./components/EditGoalModal.vue";
import EntryModal from "./components/EntryModal.vue";

const goalList = ref([
  new Goal('Practice art', 7, 4),
  new Goal('Practice writing', 7, 6),
  new Goal('Take a walk', 30, 2),
  new Goal('Clean something', 4, 4)
]);
const dayList = ref([
  new Day(new Date(), new Map([
    [new Goal('Practice art', 7, 4), true],
    [new Goal('Practice writing', 7, 6), false]
  ])),
  new Day(new Date(), new Map([
    [new Goal('Practice art', 7, 4), true],
    [new Goal('Practice writing', 7, 6), true]
  ]))
]);
let newGoal = new Goal("", 0, 0);
let selectedGoal = {};
let selectedDay = {};


function addGoal() {
  goalList.value.push(newGoal);
  newGoal = new Goal('', 0, 0);
}

function deleteSelectedGoal() {
  goalList.value.splice(goalList.value.indexOf(selectedGoal), 1);
}

function selectGoal(goal) {
  selectedGoal = goal;
}

function saveGoal(goal) {
  const index = goalList.value.indexOf(selectedGoal);
  goalList.value[index] = goal;
}

function addDay(day) {
  dayList.value.push(day);
}
</script>

<template class="bg-dark">
  <header class="bg-primary bg-gradient text-light p-2">
    <h1>Habit Tracker</h1>
  </header>

  <div class="container-md m-auto row">
    <div class="col-4 bg-white" id="goalsPane">
      <div>
        <h2>Goals</h2>
      </div>
      <div>
        <goal-list :goals="goalList"
                   @select-goal="selectGoal"
        ></goal-list>
        <div class="collapse" id="collapseGoalForm">
          <form @submit.prevent="addGoal">
            <label for="goalName" class="form-label">Goal: </label>
            <input id="goalName" class="form-control" type="text" v-model="newGoal.name" required>
            <label for="goalDays" class="form-label">Days: </label>
            <input id="goalDays" class="form-control" type="number" v-model="newGoal.maxDays">
            <button type="submit" class="btn btn-success form-control">Save</button>
          </form>
        </div>
        <div class="d-grid gap-2 d-md-block my-4">
          <button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseGoalForm"
                  aria-expanded="false" aria-controls="collapseGoalForm">Add goal
          </button>
        </div>
      </div>
    </div>

    <div class="col-8">
      <nav class="nav nav-tabs" id="navTab" role="tablist">
        <button class="nav-link active" id="navDashboardTab" data-bs-toggle="tab"
                data-bs-target="#dashboardTab"
                type="button" role="tab" aria-controls="homeTab" aria-selected="true">
          Dashboard
        </button>
        <button class="nav-link" id="navCalendarTab" data-bs-toggle="tab" data-bs-target="#calendarTab"
                type="button" role="tab" aria-controls="homeTab" aria-selected="true">
          Calendar
        </button>
      </nav>

      <div class="tab-content" id="navTabContent">
        <div class="tab-pane fade show active" id="dashboardTab" role="tabpanel"
             aria-labelledby="navDashboardTab"
             tabindex="0">
          <div class="bg-light border-dark p-5">
            <div class="d-flex justify-content-between mb-2">
              <h2>Dashboard</h2>
              <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#entryModal">New entry
              </button>
            </div>
            <day-list :days="dayList"></day-list>
          </div>
        </div>
        <div class="tab-pane fade" id="calendarTab" role="tabpanel" aria-labelledby="navCalendarTab"
             tabindex="0">
          <calendar></calendar>
        </div>

        <edit-goal-modal
            @begin-edit="selectGoal"
            @save-edit="saveGoal"></edit-goal-modal>
        <delete-goal-modal @delete-goal="deleteSelectedGoal"></delete-goal-modal>
        <entry-modal
            @save-day="addDay"
            :goals="goalList"
        ></entry-modal>
      </div>

    </div>

  </div>

  <footer>
    <p class="text-white text-center">Copyright lol</p>
  </footer>
</template>

<style lang="scss">
@import "src/scss/app";
</style>
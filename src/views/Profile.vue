<script setup>

import {ref} from "vue";

const username = ref('Archie');
</script>

<template>
  <div class="bg-dark-subtle container-md m-auto">
    <div class="row">
      <div class="col container">
        <div class="m-auto">
          <i class="fa-regular fa-user fa-xl"></i>
          <p>{{ username }}</p>
        </div>
      </div>
      <div class="col">
        Profile description
      </div>
    </div>
    <div class="row">
      <h2>Achievements</h2>
      <ul class="list-group">
        <li class="list-group-item border border-dark bg-primary-subtle">
          <div class="d-flex">
            <i class="fa-solid fa-trophy"></i>
            <h4>Task complete!</h4>
          </div>
          <p>Complete your first goal.</p>
        </li>
        <li class="list-group-item border border-dark bg-secondary-subtle">
          <div class="d-flex">
            <i class="fa-solid fa-trophy"></i>
            <h4>Placeholder</h4>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>

</style>
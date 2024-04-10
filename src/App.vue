<script setup>

</script>

<template class="bg-dark">
  <header class="d-flex justify-content-between bg-primary bg-gradient p-2">
    <RouterLink to="/" class="text-light"><h1>Habit Tracker</h1></RouterLink>
    <RouterLink to="/profile" class="text-light"><i class="fa-regular fa-user fa-lg"></i></RouterLink>
  </header>
  <RouterView></RouterView>
  <footer>
    <p class="text-white text-center">Copyright lol</p>
  </footer>
</template>

<style lang="scss">
@import "src/scss/app";
</style>
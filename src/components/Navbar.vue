<template>
<div class="ui fixed menu">
    <div class="ui container">
      <router-link to="/" class="header item">Learn Steno</router-link>
      <router-link to="/" class="item">Lessons</router-link>
      <router-link to="/about" class="item">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
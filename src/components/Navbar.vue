<template>
<nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item is-size-5 has-text-weight-semibold	">Learn Steno</router-link>
        <router-link to="/" class="navbar-item">Lessons</router-link>
        <router-link to="/drills" class="navbar-item">Drills</router-link>
        <router-link to="/practice" class="navbar-item">Practice</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

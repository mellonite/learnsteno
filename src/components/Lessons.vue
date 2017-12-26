<template>
<div>
    <navbar></navbar>
    <div class="container">
        <h1 class="is-size-2" style="margin-top:5rem">Lessons</h1>
    </div>
</div>
</template>

<script>
import NavBar from './Navbar.vue'

export default {
  name: 'Drills',
  components: {
      'navbar': NavBar
  }
}
</script>
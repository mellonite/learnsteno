<template>
<div>
    <navbar></navbar>
    <div class="ui text container">
        <h1 style="margin-top:7rem" class="ui header">Lessons</h1>
    </div>
</div>
</template>

<script>
import NavBar from './Navbar.vue'

export default {
  name: 'Lessons',
  components: {
      'navbar': NavBar
  }
}
</script>
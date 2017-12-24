<template>
<div>
    <navbar></navbar>
    <div class="container">
        <h1 class="is-size-2" style="margin-top:5rem">Lessons</h1>
        <h2 class="is-size-4">Lesson 1: Fingers and Keys</h2>
        <div style="margin-top:1rem" class="level">
            <div class="has-text-centered level-item">
                <div>
                <div class="is-size-4 has-text-weight-light">One Syllable Words</div>
                <router-link to="/lesson/1a" class="button is-primary is-rounded">Start</router-link>
                </div>
            </div>
            <div class="has-text-centered level-item">
                <div>
                <div class="is-size-4 has-text-weight-light">Consonant Clusters</div>
                <router-link to="/lesson/1b" class="button is-primary is-rounded">Start</router-link>
                </div>
            </div>
        </div>
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
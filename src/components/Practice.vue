<template>
<div>
    <navbar page='practice'></navbar>
    <div class="container page">
        <h1 class="is-size-2">Practice</h1>
        <template v-for="lesson in lessons">
            <div><router-link class="is-size-4" :to="'/lesson/' + lesson.url">{{ lesson.name }}</router-link></div>
        </template>
    </div>
</div>
</template>

<script>
import NavBar from './Navbar.vue'

export default {
  name: 'Practice',
  components: {
      'navbar': NavBar
  },
  data () {
      return {
          lessons: [
              {
                  name: 'Lesson 1: Fingers and Keys',
                  url: '1a'
              },
              {
                  name: 'Lesson 2: Steno Order',
              },
              {
                  name: 'Lesson 3: English Sounds',
              },
              {
                  name: 'Lesson 4: Common Briefs',
              }
          ]
      }
  }
}
</script>

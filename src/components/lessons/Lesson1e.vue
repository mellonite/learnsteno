<template>
<div>
    <navbar page='lessons'></navbar>
    <div class="container lesson">
      <div class="columns">
        <div class="column">
          <div class="box content">
            <p class="parmar">
              Now hop for joy - you just tapped your second word in steno!
            </p>

            <p class="parmar">
              One important detail to take note of is the fact that it matters which side of the keyboard contains the consonant sound you want. In the case of 'tap' and 'hop', you used the <span class="stroke">P</span> from the right side of the keyboard rather than the left. This is because the <span class="stroke">P</span> was needed at the tail end of the syllable rather than at the start of it. A more rigorous explanation of this can be found in Lesson 2: Steno Order. For now, just remember that the start of a syllable is keyed on the left side of the keyboard, and the end of a syllable is keyed on the right. The vowels are keyed toward the middle of the keyboard, just as they usually occur in the middle of a syllable.
            </p>
          </div>
          <router-link to="/lesson/1d" class="button is-primary is-pulled-left">Previous</router-link>
          <router-link to="/drill/1a" class="button is-primary is-pulled-right">Next</router-link>
        </div>
        <div class="column is-one-third">
          <lessonmenu></lessonmenu>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import NavBar from '../Navbar.vue'
import Lesson1menu from './Lesson1menu.vue'

export default {
  name: 'Lesson1e',
  components: {
      'navbar': NavBar,
      'lessonmenu': Lesson1menu
  }
}
</script>

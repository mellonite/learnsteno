<template>
<div>
    <navbar></navbar>
    <div style="max-width:50rem;margin-bottom:10rem" class="container content">
        <h1 style="margin-top:5rem" class="is-size-2">Lesson 1: Fingers and Keys</h1>
        <p class="parmar">
          <h2>Stroking Your First Words</h2>
          Now hop for joy - you just tapped your second word in steno!
        </p>

        <p class="parmar">
          One important detail to take note of is the fact that it matters which side of the keyboard contains the consonant sound you want. In the case of 'tap' and 'hop', you used the <span class="stroke">P</span> from the right side of the keyboard rather than the left. This is because the <span class="stroke">P</span> was needed at the tail end of the syllable rather than at the start of it. A more rigorous explanation of this can be found in Lesson 2: Steno Order. For now, just remember that the start of a syllable is keyed on the left side of the keyboard, and the end of a syllable is keyed on the right. The vowels are keyed toward the middle of the keyboard, just as they usually occur in the middle of a syllable.
        </p>
        <div class="level" style="margin-top:1rem">
            <div class="level-item is-pulled-left">
                <router-link to="/lesson/1d" class="button is-primary is-rounded">Previous</router-link>
            </div>
            <div class="level-item is-pulled-right">
                <router-link to="/drill/1a" class="button is-primary is-rounded">Next</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from './Navbar.vue'

export default {
  name: 'Lesson1e',
  components: {
      'navbar': NavBar
  }
}
</script>

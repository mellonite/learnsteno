<template>
<div>
    <navbar page='lessons'></navbar>
    <div class="container lesson">
      <div class="columns">
        <div class="column">
          <div class="box content">
            <h2>Stroking Your First Words</h2>
            <p class="parmar">
              You've just tapped your first word in steno!
            </p>

            <p class="parmar">
              Notice that it doesn't really matter that all the keys go down absolutely simultaneously. The only thing Plover cares about is that there's one moment in time when all three keys are down together. If one goes down a little before the others, or comes up later than the others, Plover still does the right thing.
            </p>

            <p class="parmar">
              Try another word:
            </p>

            <ul>
              <li> Rest your left forefinger on the <span class="stroke">H</span> key on the left half of the keyboard </li>
              <li> Rest your left thumb on the <span class="stroke">O</span> key </li>
              <li> Rest your right middle finger on the <span class="stroke">P</span> key on the right half of the keyboard </li>
            </ul>

            <p class="parmar">
              <img class="image" src="../../assets/img/Fig4.svg">
              When your fingers are in position, press them all down together, and release them.
            </p>
            <input style="margin-top:1rem" class="input is-primary" type="text" v-model="input">
          </div>
          <router-link to="/lesson/1c" class="button is-primary is-pulled-left">Previous</router-link>
          <router-link to="/lesson/1e" class="button is-primary is-pulled-right" v-bind:disabled="isButtonDisabled">Next</router-link>
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
  name: 'Lesson1d',
  components: {
      'navbar': NavBar,
      'lessonmenu': Lesson1menu
  },
  data () {
    return {
      input: '',
      isButtonDisabled: true,
    }
  },
  watch: {
    input () {
      if (this.input.trim() === 'hop') {
        this.isButtonDisabled = false
      }
    }
  }
}
</script>

<template>
<div>
    <navbar page='lessons'></navbar>
    <div style="max-width:50rem;margin-bottom:10rem" class="container content">
        <h1 style="margin-top:5rem" class="is-size-2">Lesson 1: Fingers and Keys</h1>
        <p class="parmar">
          <h2>Stroking Your First Words</h2>
          Now you're ready to start typing words. Have your NKRO keyboard in front of you, and activate the Plover software. Once you're set up, do the following steps:
        </p>
        <ul>
          <li> Rest your left third finger on the <span class="stroke">T</span> key on the left half of the keyboard </li>
          <li> Rest your left thumb on the <span class="stroke">A</span> key </li>
          <li> Rest your right middle finger on the <span class="stroke">P</span> key on the right half of the keyboard </li>
        </ul>

        <p class="parmar">
          <img class="image" src="../../assets/img/Fig3.svg">
          When your fingers are in position, press them all down together, and release them.
        </p>
        <input style="margin-top:1rem" class="input is-primary" type="text" v-model="input">

        <div class="level" style="margin-top:1rem">
            <div class="level-item is-pulled-left">
                <router-link to="/lesson/1b" class="button is-primary is-rounded">Previous</router-link>
            </div>
            <div class="level-item is-pulled-right">
                <router-link to="/lesson/1d" class="button is-primary is-rounded" v-bind:disabled="isButtonDisabled">Next</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '../Navbar.vue'

export default {
  name: 'Lesson1c',
  components: {
      'navbar': NavBar
  },
  data () {
    return {
      input: '',
      isButtonDisabled: true,
    }
  },
  watch: {
    input () {
      if (this.input.trim() === 'tap') {
        this.isButtonDisabled = false
      }
    }
  }
}
</script>

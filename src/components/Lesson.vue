<template>
<div>
    <navbar></navbar>
    <div class="ui text container">
        <h1 style="margin-top:7rem" class="is-size-2">{{ this.lesson.name }}</h1>
        <h2 class="is-size-5">{{ this.lesson.description }}</h2>
        <progress class="progress is-primary" :value="progress" max="1"></progress>
        <h2 class="is-size-3 has-text-centered">{{ this.currentWord[0] }}</h2>
        <b-tooltip type="is-dark" v-bind:class="{ 'is-invisible': this.errorCount <= 1 }" :label="currentWord[1]">
            <button style="margin-bottom:1rem" class="button">hint</button>
            </b-tooltip>
        <input class="input is-primary" type="text" v-model="input">
    </div>
</div>
</template>

<script>
import NavBar from './Navbar.vue'

export default {
  name: 'Lesson',
  props: ['lessonName'],
  computed: {
    currentWord () { return this.lesson.words[this.wordIndex] },
    progress () { return this.wordIndex / this.lesson.words.length }
  },
  data () {
      return {
        // please read this: https://vuejs-templates.github.io/webpack/static.html
        lesson: require('../assets/lessons/' + this.lessonName + '.json'),
        wordIndex: 0,
        input: '',
        errorCount: 0
      }
  },
  watch: {
    input () {
        if (this.input === this.currentWord[0])  {
            this.wordIndex++
            this.input = ''
            this.errorCount = 0
        } else if (this.input === '') this.errorCount++
    }
  },
  components: {
      'navbar': NavBar
  }
}
</script>
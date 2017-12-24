<template>
<div>
    <navbar></navbar>
    <div class="ui text container">
        <h1 style="margin-top:7rem" class="ui header">{{ this.lesson.name }}</h1>
        <span>{{ this.lesson.description }}</span>
        <h2 class="ui center aligned header">{{ this.currentWord[0] }}</h2>
        <div v-if="this.errorCount > 1" style="margin-bottom:1rem" class="ui button" :data-tooltip="this.currentWord[1]">hint</div>
        <div class="ui input focus fluid">
            <input type="text" v-model="input">
        </div>
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
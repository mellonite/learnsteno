<template>
<div>
    <navbar></navbar>
    <div class="ui text container">
        <h1 style="margin-top:7rem" class="is-size-2">{{ lesson.name }}</h1>
        <h2 class="is-size-5">{{ lesson.description }}</h2>
        <progress class="progress is-primary" :value="progress" max="1"></progress>
        <!-- only render the lesson if there are still words left -->
        <template v-if="wordIndex < lesson.words.length">
            <h2 class="is-size-3 has-text-centered">{{ currentWord[0] }}</h2>
            <b-tooltip type="is-dark" v-bind:class="{ 'is-invisible': wordErrors <= 1 }" :label="currentWord[1]">
                <button style="margin-bottom:1rem" class="button">hint</button>
                </b-tooltip>
            <input class="input is-primary" type="text" v-model="input">
        </template>
        <!-- render this bit if the lesson is finished -->
        <template v-else>
            <p>Missed strokes: {{ lessonErrors }}</p>
            <p>Total time: {{ Math.round((endTime - startTime) / 1000) }} seconds</p>
            <p>Words per minute: {{ Math.round(lesson.words.length / ((endTime - startTime) / 1000 / 60)) }}</p>
        </template>
    </div>
</div>
</template>

<script>
import NavBar from './Navbar.vue'

export default {
  name: 'Lesson',
  props: ['lessonName'],
  computed: {
    currentWord () {
        if (this.wordIndex >= this.lesson.words.length)
            return ['', '']

        return this.lesson.words[this.wordIndex]
    },
    progress () { return this.wordIndex / this.lesson.words.length }
  },
  data () {
      return {
        // please read this: https://vuejs-templates.github.io/webpack/static.html
        lesson: require('../assets/lessons/' + this.lessonName + '.json'),
        wordIndex: 0,
        input: '',
        wordErrors: 0,
        lessonErrors: 0,
        startTime: null,
        endTime: null
      }
  },
  watch: {
    input () {
        if (this.startTime === null)
            this.startTime = new Date()

        if (this.input.trim() === this.currentWord[0])  {
            this.wordIndex++
            this.input = ''
            this.lessonErrors += this.wordErrors
            this.wordErrors = -1

            if (this.wordIndex=== this.lesson.words.length)
                this.endTime = new Date()
        } else if (this.input === '') this.wordErrors++
    }
  },
  components: {
      'navbar': NavBar
  }
}
</script>
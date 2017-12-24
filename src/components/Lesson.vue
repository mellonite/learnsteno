<template>
<div>
    <navbar></navbar>
    <div class="ui text container" style="max-width:70rem">
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
            <div class="level">
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Words per minute</p>
                        <p class="title">{{ Math.round(lesson.words.length / ((endTime - startTime) / 1000 / 60)) }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Missed strokes</p>
                        <p class="title">{{ lessonErrors }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Total time</p>
                        <!-- format minutes and seconds -->
                        <p class="title">{{ Math.floor((endTime - startTime) / 1000 / 60) }}:{{ Math.round((endTime - startTime) / 1000 % 60) }}</p>
                    </div>
                </div>
            </div>
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
            this.lessonErrors += Math.max(this.wordErrors,0)
            // we count errors be every time the input becomes empty
            // since we start with an empty input, we have to discard the first error
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
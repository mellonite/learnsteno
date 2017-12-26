<template>
<div>
    <navbar></navbar>
    <div class="ui text container" style="max-width:70rem">
        <h1 style="margin-top:7rem" class="is-size-2">{{ lesson.name }}</h1>
        <h2 class="is-size-5">{{ lesson.description }}</h2>
        <progress class="progress is-primary" :value="progress" max="1"></progress>
        <!-- only render the lesson if there are still words left -->
        <template v-if="wordIndex < words.length">
            <h2 class="is-size-3 has-text-centered">{{ currentWord[0] }}</h2>
            <b-tooltip type="is-black" position="is-right" v-bind:class="{ 'is-invisible': wordErrors < 1 }" :label="currentWord[1]">
                <button class="button">hint</button>
                </b-tooltip>
            <input style="margin-top:1rem" class="input is-primary" type="text" v-model="input">
            <!-- Options card -->
            <div class="card" style="width:35rem;margin-top:2rem">
                <div class="card-content">
                    <div class="content">
                        <b-checkbox v-model="random">Random</b-checkbox>
                        <b-checkbox v-model="repeat">Repeat</b-checkbox>
                        <b-checkbox v-model="showLayout">Show Plover Layout</b-checkbox>
                    </div>
                </div>
                <div v-if="showLayout" class="card-image" style="padding:1rem">
                    <img class="image" src="../assets/plover-layout.png">
                </div>
            </div>
        </template>

        <!-- render this bit if the lesson is finished -->
        <template v-else>
            <div class="level">
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Words per minute</p>
                        <p class="title">{{ Math.round(words.length / ((endTime - startTime) / 1000 / 60)) }}</p>
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
  name: 'Drill',
  props: ['drillName'],
  computed: {
    currentWord () {
        if (this.wordIndex >= this.words.length)
            return ['', '']

        return this.words[this.wordIndex]
    },
    progress () { return this.wordIndex / this.words.length },
    words () {
        if (!this.random) return this.lesson.words
        // shuffle the array of words if random is selected
        else {
            let words = this.lesson.words.slice(0)
            for (let i = words.length -1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [words[i], words[j]] = [words[j], words[i]];
            }
            return words
        }
    }
  },
  data () {
      return {
        // please read this: https://vuejs-templates.github.io/webpack/static.html
        lesson: require('../assets/lessons/' + this.drillName + '.json'),
        wordIndex: 0,
        input: '',
        wordErrors: 0,
        lessonErrors: 0,
        startTime: null,
        endTime: null,
        repeat: false,
        random: false,
        showLayout: false
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

            if (this.wordIndex=== this.words.length) {
                if (this.repeat) this.wordIndex = 0
                else this.endTime = new Date()
            }
        } else if (this.input === '') this.wordErrors++
    }
  },
  components: {
      'navbar': NavBar
  },
}
</script>
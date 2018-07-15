<template>
<div>
    <navbar></navbar>
    <div class="ui text container" style="max-width:50rem">
        <h1 style="margin-top:7rem" class="is-size-2">Transcription Practice</h1>
        <progress class="progress is-primary" :value="progress" max="1"></progress>
        <!-- only render the drill if there are still words left -->
        <template v-if="sentenceIndex < transcription.sentences.length">
            <button class="button is-info is-fullwidth" :click="start()">Start</button>
            <div id="input" contenteditable="true" role="textbox" v-on:input="inputUpdate()"
            style="margin-top:1rem" class="textarea is-primary" v-html="input"></div>
            <!-- Options card -->
            <div class="card" style="width:35rem;margin-top:2rem">
                <div class="card-content">
                    <div class="content">
                        <b-checkbox v-model="showLayout">Show Plover Layout</b-checkbox>
                        <b-checkbox v-model="soundEffects">Sound Effects</b-checkbox>
                    </div>
                </div>
                <div v-if="showLayout" class="card-image" style="padding:1rem">
                    <img class="image" src="../assets/img/Fig1.svg">
                </div>
            </div>
        </template>

        <!-- render this bit if the drill is finished -->
        <template v-else>
          <div class="level">
              <div class="level-item has-text-centered">
                  <div>
                      <p class="heading">Words per minute</p>
                      <p class="title">{{ wordsPerMinute }}</p>
                  </div>
              </div>
              <div class="level-item has-text-centered">
                  <div>
                      <p class="heading">Missed strokes</p>
                      <p class="title">{{ overallErrors }}</p>
                  </div>
              </div>
              <div class="level-item has-text-centered">
                  <div>
                      <p class="heading">Total time</p>
                      <!-- format minutes and seconds -->
                      <p class="title">{{ formatDuration(endTime - startTime) }}</p>
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
  name: 'Transcription',
  props: ['transcrptionName'],
  computed: {
    wordsPerMinute () {
      return Math.round(this.transcription.wordCount / ((this.endTime - this.startTime) / 1000 / 60))
    },
    currentSentence () {
        if (this.sentenceIndex >= this.sentences)
            return ['', '']

        return this.sentences[this.sentenceIndex]
    },
    progress () { return this.sentenceIndex / this.transcription.sentences.length },
    sentences () {
        // shuffle the array of sentences
        let sentences = this.transcription.sentences.slice(0) // note that slice(0) is a cheap way to copy the array
        for (let i = sentences.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [sentences[i], sentences[j]] = [sentences[j], sentences[i]];
        }
        // replace paths with audio and return
        return sentences.map((s) => { return [new Audio(require('../assets/audio/transcription/' + s[0] + '.ogg')), s[1]]})
    }
  },
  created () {
      this.correctSound.volume = .8
  },
  data () {
      return {
        // please read this: https://vuejs-templates.github.io/webpack/static.html
        transcription: require('../assets/practicedata/transcription/' + this.transcrptionName + '.json'),
        input: '',
        sentenceIndex: 0,
        wordErrors: 0,
        overallErrors: 0,
        startTime: null,
        endTime: null,
        showLayout: false,
        soundEffects: true,
        correctSound: new Audio(require('../assets/audio/correct.ogg'))
      }
  },
  methods: {
      start () {
        this.startTime = new Date()
        //TODO play first recording
        this.sentences[this.sentenceIndex][0].play
      },
      formatDuration(timeInMS) {
          let minutes = Math.floor(timeInMS / 1000 / 60)
          let seconds = Math.round(timeInMS / 1000 % 60)
          if (seconds < 10) seconds += '0'
          return minutes + ':' + seconds
      },
      inputUpdate () {
          //hack because v-html doesn't update which html changes
          /*let input = document.getElementById('input').innerHTML
          let inputArray = input.split(' ').map((w) => { return w.replace('<span>', '').replace('</span>', '') })
          let output = inputArray.map((w) => {
            return w === 'incorrect' ? '<span style="background-color: red">' + w + '</span>' : w
          }).join(' ')
          console.log(input)
          console.log(inputArray)
          console.log(output)
          this.input = input*/
      }
  },
  components: {
      'navbar': NavBar
  },
}
</script>

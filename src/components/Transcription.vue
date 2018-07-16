<template>
<div>
    <navbar page='practice'></navbar>
    <div class="ui text container narrow">
        <h1 style="margin-top:7rem" class="is-size-2">Transcription Practice</h1>
        <progress class="progress is-primary" :value="progress" max="1"></progress>
        <!-- only render the drill if there are still words left -->
        <template v-if="sentenceIndex < transcription.sentences.length">
            <button class="button is-outlined is-primary is-fullwidth"
                v-on:click="playAudio">{{ startTime == null ? 'Start' : 'Repeat Audio' }}
                <font-awesome-icon style="margin-left: .3rem" class="fa-icon" v-bind:icon="startTime == null ? 'play' : 'redo'"></font-awesome-icon>
            </button>

            <b-message v-if="showText" style="margin-top: 1rem">{{ currentSentence[1].toLowerCase() }}</b-message>
            <p style="min-height: 1.5rem; margin: .5rem" v-html="inputRender"></p>
            <textarea id="input" v-model="input" style="margin-top:1rem" class="textarea is-primary"></textarea>
            <!-- Options card -->
            <div class="card" style="width:35rem;margin-top:2rem">
                <div class="card-content">
                    <div class="content">
                        <b-checkbox v-model="showLayout">Show Plover Layout</b-checkbox>
                        <b-checkbox v-model="showText">Show Text</b-checkbox>
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
    },
    inputRender () {
        let correctArray = this.currentSentence[1].toUpperCase().replace(/[^\w\s]/g, '').split(' ')
        let inputArray = this.input.trim().split(' ')
        return inputArray.map((word, index) => {
            if (word.toUpperCase().replace(/[^\w\s]/g, '') == correctArray[index])
                return word
            else return '<span style="background-color: hsl(348, 100%, 90%)">' + word + '</span>'
        }).join(' ')
    }
  },
  created () {
      this.correctSound.volume = .8
  },
  data () {
      return {
        // please read this: https://vuejs-templates.github.io/webpack/static.html
        transcription: require('../assets/practicedata/transcription/' + this.transcrptionName + '.json'),
        sentenceIndex: 0,
        input: '',
        startTime: null,
        endTime: null,
        showLayout: false,
        showText: false,
        soundEffects: true,
        correctSound: new Audio(require('../assets/audio/correct.ogg'))
      }
  },
  watch: {
    input () {
        if (this.isInputCorrect(this.input)) {
            this.sentenceIndex++
            this.input = ''
            this.correctSound.play()
            if (this.sentences.length == this.sentenceIndex) {
                this.endTime = new Date()
                //TODO save data
            } else {
                this.playAudio()
            }
        }
    },
  },
  methods: {
      playAudio () {
        this.startTime = new Date()
        //TODO play first recording
        this.sentences[this.sentenceIndex][0].play()
      },
      formatDuration(timeInMS) {
          let minutes = Math.floor(timeInMS / 1000 / 60)
          let seconds = Math.round(timeInMS / 1000 % 60)
          if (seconds < 10) seconds += '0'
          return minutes + ':' + seconds
      },
      isInputCorrect(input) {
          // a little premature optimization, return false if we don't have the same number of words
          if (this.currentSentence[1].trim().split(' ').length !== input.trim().split(' ').length) return false

          let correct = this.currentSentence[1].toUpperCase().replace(/[^\w\s]/g, "")
          let attempt = input.trim().toUpperCase().replace(/[^\w\s]/g, "")
          return attempt === correct
      }
  },
  components: {
      'navbar': NavBar
  },
}
</script>

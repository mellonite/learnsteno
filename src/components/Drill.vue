<template>
<div>
    <navbar></navbar>
    <div class="ui text container" style="max-width:50rem">
        <h1 style="margin-top:7rem" class="is-size-2">{{ drill.name }}</h1>
        <h2 class="is-size-5">{{ drill.description }}</h2>
        <progress class="progress is-primary" :value="progress" max="1"></progress>
        <!-- only render the drill if there are still words left -->
        <template v-if="wordIndex < words.length">
            <div class="has-text-centered">
                <b-tooltip type="is-black" position="is-right" :label="currentWord[1]">
                    <h2 class="is-size-3 dotunder">{{ currentWord[0] }}</h2>
                </b-tooltip>
            </div>
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
                        <p class="title">{{ Math.round(words.length / ((endTime - startTime) / 1000 / 60)) }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Missed strokes</p>
                        <p class="title">{{ drillErrors }}</p>
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
        if (!this.random) return this.drill.words
        // shuffle the array of words if random is selected
        else {
            let words = this.drill.words.slice(0)
            for (let i = words.length -1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [words[i], words[j]] = [words[j], words[i]];
            }
            return words
        }
    }
  },
  created () {
      this.$pouch.get('drill' + this.drillName).then((doc) => {
          this.dbDrillData = doc
      }).catch((err) => {
          if (err.name !== 'not_found') console.log(err)
          this.dbDrillData._id = 'drill' + this.drillName
      })
  },
  data () {
      return {
        // please read this: https://vuejs-templates.github.io/webpack/static.html
        drill: require('../assets/drills/' + this.drillName + '.json'),
        wordIndex: 0,
        input: '',
        wordErrors: 0,
        drillErrors: 0,
        startTime: null,
        endTime: null,
        repeat: false,
        random: false,
        showLayout: false,
        dbDrillData: {}
      }
  },
  watch: {
    input () {
        if (this.startTime === null)
            this.startTime = new Date()

        if (this.input.trim() === this.currentWord[0])  {
            this.wordIndex++
            this.input = ''
            this.drillErrors += Math.max(this.wordErrors,0)
            // we count errors be every time the input becomes empty
            // since we start with an empty input, we have to discard the first error
            this.wordErrors = -1

            if (this.wordIndex=== this.words.length) {
                if (this.repeat) this.wordIndex = 0
                else this.endTime = new Date()
                this.saveData()
            }
        } else if (this.input === '') this.wordErrors++
    }
  },
  methods: {
      saveData () {
          this.dbDrillData.wordErrors = Math.max(this.wordErrors,0)
          this.dbDrillData.time = this.endTime - this.startTime
          this.dbDrillData.wordsPerMinute =
              Math.round(this.words.length / ((this.endTime - this.startTime) / 1000 / 60))
          this.$pouch.put(this.dbDrillData)
    }
  },
  components: {
      'navbar': NavBar
  },
}
</script>

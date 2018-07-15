<template>
<div>
    <navbar page='practice'></navbar>
    <div class="container page">
      <div class="columns">
        <div class="column">
          <div class="tile is-ancestor">
            <div class="tile is-vertical">
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Lesson Drills</p>
                    <p class="subtitle">Single Words</p>
                    <div class="content">
                      <p>
                        Drill individual words paired with each lesson
                      </p>
                      <div class="level-item is-centered">
                        <router-link to="/practice/drills" class="button is-primary">Start</router-link>
                      </div>
                    </div>
                  </article>
                </div>
                  <div class="tile is-parent">
                    <article class="tile is-child box">
                      <p class="title">Transcription</p>
                      <p class="subtitle">Sentences</p>
                      <div class="content">
                        <p>
                            Practice your skills by transcribing sentencces as they are read out loud.
                            Note that this section is aimed at more advanced learners.
                        </p>
                        <div class="level-item is-centered">
                          <button v-on:click="navToTranscription" class="button is-primary">Start</button>
                        </div>
                      </div>
                    </article>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <div class="content">
                  <p class="title">Daily Goal</p>
                  <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                    <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import NavBar from './Navbar.vue'

export default {
  name: 'Practice',
  components: {
      'navbar': NavBar
  },
  data () {
      return {
          transcriptions: [
              '251-118436'
          ]
      }
  },
  methods: {
      navToTranscription () {
          this.$router.push('/practice/transcription/' +
            this.transcriptions[Math.floor(Math.random()*this.transcriptions.length)])
      }
  }
}
</script>

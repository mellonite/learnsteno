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
                  <p class="title">Score</p>
                  <p class="subtitle">Placeholder</p>
                  <div class="content">
                    <h1>9001</h1>
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

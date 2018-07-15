<template>
<nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container narrow">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item is-size-5 has-text-weight-semibold	">Learn Steno</router-link>
        <router-link to="/" class="navbar-item" v-bind:class="{ 'is-active': page === 'lessons' }">Lessons</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
            <router-link slot="trigger" to="/practice" class="navbar-link"
                v-bind:class="{ 'is-active': page === 'practice' }">Practice</router-link>

            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/practice/drills">Lesson Drills</router-link>
                <a class="navbar-item" v-on:click="navToTranscription">Transcription</a>
            </div>
        </div>

        <router-link to="/about" class="navbar-item" v-bind:class="{ 'is-active': page === 'about' }">About</router-link>
        <a target="_blank" href="https://github.com/mellonite/learnsteno" class="navbar-item">
          <font-awesome-icon style="margin-right: .2rem" class="fa-icon" :icon="['fab', 'github']"></font-awesome-icon>
          Contribute</a>
      </div>
    </div>
</nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: [
      'page'
    ],
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

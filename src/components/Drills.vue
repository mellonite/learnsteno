<template>
<div>
    <navbar page=drills></navbar>
    <div class="container page">
      <div class="columns">
        <div class="column">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
              <template v-for="drill in drills">
                <h2 class="is-size-4">{{ drill.name }}</h2>
                <aside class="menu" style="max-width:25rem">
                    <ul class="menu-list">
                        <li v-for="exercise in drill.exercises">
                            <router-link :to="'/drill/' + exercise.code">{{ exercise.name }}
                              <template v-if="completedDrills.includes(exercise.code)">
                                  <font-awesome-icon style="color: green" icon="check"></font-awesome-icon>
                              </template></router-link>
                        </li>
                    </ul>
                </aside>
              </template>
              </article>
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
  name: 'Drills',
  components: {
      'navbar': NavBar
  },
  created () {
      this.$pouch.allDocs().then((docs) => {
      this.completedDrills = docs.rows
          .filter((row) => { return row.id.includes('drill') })
          .map((row) => { return row.id.replace('drill', '') })
      })
  },
  data () {
      return {
          // list of drills that are finished, taken from the DB
          completedDrills: [],
          drills: [
              {
                  name: 'Lesson 1: Fingers and Keys',
                  exercises: [
                    {name: 'One syllable Words', code: '1a'},
                    {name: 'Consonant Clusters', code: '1b'}
                  ]
              },
              {
                  name: 'Lesson 2: Steno Order',
                  exercises: [
                    {name: 'Where\'s the TRUFT?', code: '2a'},
                    {name: 'Dropping Unstressed Vowels', code: '2b'},
                    {name: 'Inversion', code: '2c'}
                  ]

              },
              {
                  name: 'Lesson 3: English Sounds',
                  exercises: [
                    {name: 'The Fifth Vowel Key', code: '3a-1'},
                    {name: 'Long Vowel Chords', code: '3a-2'},
                    {name: 'Dipthong Chords', code: '3a-3'},
                    {name: 'Vowel Disambiguator Chords', code: '3a-4'},
                    {name: 'The Missing Keys', code: '3b'},
                    {name: 'The Remaining Single Letters', code: '3c-1'},
                    {name: 'Including Sounds from Previous Lessons', code: '3c-2'},
                    {name: 'Digraphs', code: '3d-1'},
                    {name: 'Including Sounds from Previous Lessons', code: '3d-2'},
                    {name: 'Common Compound Clusters', code: '3e-1'},
                    {name: 'Including Sounds from Previous Lessons', code: '3d-2'},
                    {name: 'Fingerspelling', code: '3f'},
                  ]
              },
              {
                  name: 'Lesson 4: Common Briefs',
                  exercises: [
                    {name: '1-20', code: '4a'},
                    {name: '21-40', code: '4b'},
                    {name: '41-60', code: '4c'},
                    {name: '61-80', code: '4d'},
                    {name: '81-100', code: '4e'},
                  ]
              }
          ]
      }
  }
}
</script>

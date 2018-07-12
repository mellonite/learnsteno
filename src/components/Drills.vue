<template>
<div>
    <navbar></navbar>
    <div style="max-width:50rem" class="container">
        <h1 class="is-size-2" style="margin-top:5rem">Drills</h1>
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

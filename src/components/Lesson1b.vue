<template>
<div>
    <navbar></navbar>
    <div style="max-width:50rem;margin-bottom:10rem" class="container content">
        <h1 style="margin-top:5rem" class="is-size-2">Lesson 1: Fingers and Keys</h1>
        <p class="parmar">
            <h2 class="is-size-4">Stroking Your First Words</h2>
            You're almost ready to start typing words, but there's a detail or two regarding the 
            <span class="stroke">F</span> and <span class="stroke">G</span> keys, 
            and we need to go over the vowel keys as well.
        </p>
        <ul>
            <li>
                <span class="stroke">F</span>: In addition to the 'f' sound, this key is also used 
                to indicate the 'v' sound (and sometimes 's', as you'll see in Lesson 2: Steno Order).
            </li>
            <li>
                <span class="stroke">G</span>: In addition to the hard 'g' sound used in words like 
                'hug' and 'rag', this key may also be used to indicate the 'ing' sound, in words like 'using' and 'holding'.
            </li>
        </ul>
        <div class="level" style="margin-top:1rem">
            <div class="level-item is-pulled-left">
                <router-link to="/lesson/1a" class="button is-primary is-rounded">Previous</router-link>
            </div>
            <div class="level-item is-pulled-right">
                <router-link to="/lesson/1c" class="button is-primary is-rounded">Next</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from './Navbar.vue'

export default {
  name: 'Lesson1b',
  components: {
      'navbar': NavBar
  }
}
</script>
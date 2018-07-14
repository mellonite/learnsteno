<template>
<div>
    <navbar></navbar>
    <div style="max-width:50rem;margin-bottom:10rem" class="container content">
        <h1 style="margin-top:5rem" class="is-size-2">Lesson 1: Fingers and Keys</h1>
        <p class="parmar">
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
        <p class="parmar">
          <h2>Rules for Short Vowel Sounds</h2>
          If you're not sure about the difference between long and short vowels, or what diphthongs are, here's a <a href="http://en.wikipedia.org/wiki/Vowel_length#Traditional_long_and_short_vowels_in_English_orthography">useful article on long and short vowels</a> and an <a href="http://en.wikipedia.org/wiki/Diphthong#English">article on diphthongs</a>. The rest of this lesson, and future lessons, all assume you have a clear understanding of those things.
        </p>

        <p class="parmar">
          <b>Rule 1: If the vowel letter in the written word appears without another vowel letter next to it, then it doesn't matter which short vowel sound it makes. The Plover key labeled with that letter is always used to stroke the word.</b>
        </p>

        <p class="parmar">
          So '<b>not</b>' is stroked with <span class="stroke">O</span> because it's spelled with "o", and 'tar' is stroked with <span class="stroke">A</span> because it's spelled with "a". Likewise, 'pert' uses <span class="stroke">E</span> and 'purse' uses <span class="stroke">U</span>.
        </p>

        <p class="parmar">
          <b>Rule 2: If the vowel sound in the written word is spelled with two or more consecutive vowel letters, then it doesn't matter what spelling is used. The Plover key whose short vowel sound matches the sound in the word is always used to stroke the word.</b>
        </p>

        <p class="parmar">
          So 'heart' is stroked with an <span class="stroke">A</span> because it uses a short 'a' sound;  'roar' is stroked with <span class="stroke">O</span> because it uses a short 'o' sound; 'head' is stroked with <span class="stroke">E</span> because it uses a short 'e' sound; 'tough' is stroked with a <span class="stroke">U</span> because it uses a short 'u' sound. Short vowel sounds like the 'a' in 'bat' and the 'u' in 'put' follow the same rule.
        </p>

        <p class="parmar">
          <h2>What About Long Vowels And Diphthongs?</h2>
          A long vowel sounds kind of like saying the name of the letter. For example, the word 'bake' uses a long 'a' sound, the word 'poke' uses a long 'o' sound, the word 'teeth' uses a long 'e' sound, and the word 'few' uses a long 'u' sound. The 'oo' sound in words like 'glue' and 'crew' is also considered a long 'u' sound in Plover.
        </p>
        <p class="parmar">
          Diphthongs are where the sound of one vowel transitions to the sound of another, as in the 'ow' sound in 'down' and the 'oi' sound in 'toil'; or where two vowel sounds are merged together, as in the 'aw' sound in 'dawn'.
        </p>
        <p class="parmar">
          Plover handles long vowels and diphthongs by stroking two or more vowel keys together. See 3A: Vowels for the full explanation.
        </p>
        <p class="parmar">
          If you're still a little fuzzy on the vowel sounds, don't worry. The following exercises will help.
        </p>
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
import NavBar from '../Navbar.vue'

export default {
  name: 'Lesson1b',
  components: {
      'navbar': NavBar
  }
}
</script>

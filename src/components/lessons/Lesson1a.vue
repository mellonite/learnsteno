<template>
<div>
    <navbar page='lessons'></navbar>
    <div style="margin-bottom:10rem" class="container content narrow page">
      <div class="box">
        <h1 class="is-size-2">Lesson 1: Fingers and Keys</h1>
        <p class="parmar">
            <h2>The Keyboard</h2>
            A nice place to start learning Plover is with its most obvious feature - the keyboard.
        </p>
        <p class="parmar">
            What is this thing? Some letters seem to be missing, others seem to be duplicated. It looks weird.
            <img class="image" src="../../assets/img/Fig1.svg">
        </p>
        <p class="parmar">
            The most immediately useful thing to know is that all the consonant keys map to their corresponding consonant sounds.
            Plover - and all steno systems - express words primarily as groups of sounds rather than groups of letters of the alphabet.
            So right away you now know that either of the two <span class="stroke">P</span> keys would be used to type the 'p' sound, either of the two <span class="stroke">R</span> keys would be used to type the 'r' sound,
            and so on. That's already a lot of consonant sounds available for typing, without having to memorize anything.
            The current lesson will focus on these consonants and the four somewhat more complicated vowel keys; the rest will be covered in later lessons.
        </p>
        <p class="parmar">
            Before anything else, you should learn the proper keyboard fingering. If you've ever studied touch-typing on the QWERTY keyboard,
            you probably spent quite a bit of time getting comfortable with the home position and with the proper ways to stretch your fingers
            to reach all the keys. On a steno keyboard, none of that complexity exists, and you can learn proper fingering in about one minute.
        </p>
        <p class="parmar">
            In the following diagram, the blue boxes contain the keys associated with each finger, and the tan circles represent the home position
             for the finger responsible for the keys in that blue box.
        </p>
        <img class="image" src="../../assets/img/Fig2.svg">
        <p class="parmar">
            As you can see, with the exception of the left little finger, each finger rests at the border between two keys; and that finger is used
            to press either (or both) of those keys. The right little finger has the additional responsibility of the <span class="stroke">D</span>
            and <span class="stroke">Z</span> keys, and the right
            forefinger is responsible for the asterisk. The thumbs rest on their sides, rather than on their pads. But you can easily see that unlike
            QWERTY keyboards, none of your fingers will ever move very far from their home positions. This helps with the blazingly fast typing speeds.
        </p>
      </div>
      <router-link to="/lesson/1b" class="button is-primary is-pulled-right" style="margin-top:1rem">Next</router-link>
    </div>
</div>
</template>

<script>
import NavBar from '../Navbar.vue'

export default {
  name: 'Lesson1a',
  components: {
      'navbar': NavBar
  }
}
</script>

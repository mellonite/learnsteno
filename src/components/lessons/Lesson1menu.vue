<template>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <div>
        <p class="title">Lesson 1</p>
        <p class="subtitle">Fingers and Keys</p>
        <aside class="menu">
          <ul class="menu-list">
            <li>
              <router-link to="/lesson/1a">The Keyboard</router-link>
              <ul>
                <li><router-link to="/lesson/1b">Rules For Short Vowel Sounds</router-link></li>
                <li><router-link to="/lesson/1b">What About Long Vowels and Diphthongs?</router-link></li>
              </ul>
            </li>
            <li><router-link to="/lesson/1c">Stroking Your First Words</router-link></li>
          </ul>
        </aside>
      </div>
    </article>
  </div>
</div>
</template>

<script>
export default {
  name: 'Lesson1menu',
}
</script>

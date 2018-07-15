<template>
<div>
    <navbar page='lessons'></navbar>
    <section class="hero is-warning is-small">
      <div class="hero-body">
        <div class="container narrow" style="margin-top:3em">
          <h1 class="title">
            Under Construction
          </h1>
          <h2 class="subtitle">
            Learn Steno is in a very early stage. There will be a lot of missing content. If you'd like to contribute or just leave feedback, check out our github in the contribute tab.
          </h2>
        </div>
      </div>
    </section>
    <div class="container page">
      <div class="columns">
        <div class="column">
          <div class="tile is-ancestor">
            <div class="tile is-vertical">
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Lesson 1</p>
                    <p class="subtitle">Fingers and Keys</p>
                    <div class="content">
                      <p>
                        Learn the keys on the steno keyboard and where your fingers are placed.
                      </p>
                      <div class="level-item is-centered">
                        <router-link to="/lesson/1a" class="button is-primary">Start</router-link>
                      </div>
                    </div>
                  </article>
                </div>
                  <div class="tile is-parent">
                    <article class="tile is-child box">
                      <p class="title">Lesson 2</p>
                      <p class="subtitle">Steno Order</p>
                      <div class="content">
                        <p>
                        </p>
                        <div class="level-item is-centered">
                          <router-link to="/lesson/2" class="button is-primary" disabled>Start</router-link>
                        </div>
                      </div>
                    </article>
                  </div>
              </div>
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Lesson 3</p>
                    <p class="subtitle">English Sounds</p>
                    <div class="content">
                      <p>
                      </p>
                      <div class="level-item is-centered">
                        <router-link to="/lesson/3" class="button is-primary" disabled>Start</router-link>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Lesson 4</p>
                    <p class="subtitle">Common Briefs</p>
                    <div class="content">
                      <p>
                      </p>
                      <div class="level-item is-centered">
                        <router-link to="/lesson/4" class="button is-primary" disabled>Start</router-link>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Lesson 5</p>
                    <p class="subtitle">Prefix and Suffix Strokes</p>
                    <div class="content">
                      <p>
                      </p>
                      <div class="level-item is-centered">
                        <router-link to="/lesson/5" class="button is-primary" disabled>Start</router-link>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Lesson 6</p>
                    <p class="subtitle">Prefix/Suffix Alternatives</p>
                    <div class="content">
                      <p>
                      </p>
                      <div class="level-item is-centered">
                        <router-link to="/lesson/6" class="button is-primary" disabled>Start</router-link>
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
  name: 'Lessons',
  components: {
      'navbar': NavBar
  }
}
</script>

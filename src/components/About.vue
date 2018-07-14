<template>
<div>
    <navbar></navbar>
    <div class="container">
        <h1 style="margin-top:5rem" class="is-size-2">About Learn Steno</h1>
        <p>
          Learn Steno was developed by Mel Griffin and Ian Mcxa. It is open source and available on <a href="https://github.com/mellonite/learnsteno">github</a>.
        </p>
        <p>
          The lessons and drills were written by Zack Brown, and can be found at <a href="https://sites.google.com/site/ploverdoc/home">Learn Plover!</a>
        </p>
    </div>
</div>
</template>

<script>
import NavBar from './Navbar.vue'

export default {
  name: 'About',
  components: {
      'navbar': NavBar
  }
}
</script>

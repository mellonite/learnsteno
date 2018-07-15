<template>
  <section v-if="showUnsupported" class="hero is-danger is-small">
    <div class="hero-body">
      <div class="container narrow" style="margin-top:3em">
        <h1 class="title">
          <button style="float: right" class="delete is-large" v-on:click="showUnsupported = false"></button>
          <font-awesome-icon icon="exclamation-triangle"></font-awesome-icon>
          Unsupported Browser
        </h1>
        <h2 class="subtitle">
            You are using an unsupported browser. You can still use learnsteno, but certain features may not work.
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UnsupportedBanner',
  data () {
      return {
          showUnsupported: !this.canPlayOgg()
      }
  },
  methods: {
      canPlayOgg () {
          let obj = document.createElement('video')
          return obj.canPlayType('video/ogg; codecs="theora"') !== ''
      }
  }
}
</script>

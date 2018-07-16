<template>
    <b-notification v-if="!canPlayOgg" style="margin-top:3rem" type="is-danger">
      <div class="container narrow">
        <h1 class="title">
          <font-awesome-icon icon="exclamation-triangle"></font-awesome-icon>
          Unsupported Browser
        </h1>
        <h2 class="subtitle">
            You are using an unsupported browser. You can still use learnsteno, but certain features may not work.
        </h2>
      </div>
    </b-notification>
</template>

<script>
export default {
  name: 'UnsupportedBanner',
  methods: {
      canPlayOgg () {
          let obj = document.createElement('video')
          return obj.canPlayType('video/ogg; codecs="theora"') !== ''
      }
  }
}
</script>

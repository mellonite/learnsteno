<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #009688;
$primary-invert: findColorInvert($primary);

$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

.dotunder {
  border-bottom: .1rem dashed #4a4a4a;
  display: inline;
}

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

.stroke {
  background-color: $dark;
  color: $white;
}

.parmar {
  margin-top:1rem;
}

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

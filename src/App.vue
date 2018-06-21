<template>
  <div id="app">
    <site-toolbar/>
    <!-- <img src="./assets/logo.png"> -->
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import SiteToolbar from './components/shared/SiteToolbar';

export default {
  name: 'App',
  components: { SiteToolbar },
};
</script>

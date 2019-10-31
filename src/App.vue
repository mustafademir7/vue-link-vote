<template>
  <div id="app">
     <Header />
     <router-view />
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss" src="./assets/scss/style.scss"></style>

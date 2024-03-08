<template>
  <router-view />
  <Footer/>
</template>

<script>
import Footer from './components/Footer-page.vue'

export default {
  name: 'app',
  components: { Footer }
}
</script>

<style>
  @import url(./assets/css/objectlist.css);
  @import url(./assets/css/tailwind.css);
</style>
<template>

  <q-layout view="lHh Lpr lFf">
    <Header />

    <router-view />

    <br>
    <br>

    <Footer />

  </q-layout>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'MainPage',
  components: {
    Header,
    Footer
  }
}
</script>

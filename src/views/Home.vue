<template>
  <div>
    <q-page-container>
      <q-page>
          <q-carousel
            animated
            v-model="slide"
            infinite
            swipeable
            :autoplay="10000"
            transition-prev="slide-right"
            transition-next="slide-left"
            height="60em"
          >
            <q-carousel-slide :name="1" :img-src="require('@/assets/R6S_Wallpaper01.jpg')" />
            <q-carousel-slide :name="2" :img-src="require('@/assets/R6S_Wallpaper02.jpg')" />
            <q-carousel-slide :name="3" :img-src="require('@/assets/R6S_Wallpaper03.jpg')" />
            <q-carousel-slide :name="4" :img-src="require('@/assets/R6S_Wallpaper04.jpg')" />
            <q-carousel-slide :name="5" :img-src="require('@/assets/R6S_Wallpaper05.jpg')" />
          </q-carousel>
      </q-page>
    </q-page-container>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  data () {
    return {
      slide: 3,
      autoplay: false
    }
  }
}
</script>

<style scoped>
.q-carousel__slide {
  padding: 0;
}
</style>

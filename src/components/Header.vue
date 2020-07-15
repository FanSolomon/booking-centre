<template>
    <div class="header">
      <q-header reveal>
        <q-toolbar style="padding: 0;">
          <q-btn align="left" unelevated icon="fas fa-circle-notch" to="/" exact class="q-ml-md" />
          <q-input
            :loading="loadingState"
            dark dense standout borderless
            v-model="text"
            placeholder="search..."
            input-class="text-left"
            class="q-ml-md"
          >
            <template v-slot:append>
              <q-icon v-if="text === ''" name="search" />
              <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
            </template>
          </q-input>
          <q-btn align="left" label="Home" unelevated padding="sm" name="Home" to="/" exact class="q-ml-md" no-caps />
          <q-btn align="left" label="Booking" unelevated padding="sm" name="Mess" to="/booking" exact no-caps />
          <q-btn align="left" label="Rainbow6" unelevated padding="sm" name="Rainbow6" to="/rainbow6" exact no-caps />

          <q-space />

          <q-btn  align="left" unelevated icon="fab fa-github" @click="go_site('https://github.com/FanSolomon/booking-centre')"></q-btn>
        </q-toolbar>
      </q-header>

    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    userName: String
  },
  data () {
    return {
      text: '',
      loadingState: false
    }
  },
  methods: {
    go_site (url) {
      window.open(url)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~quasar-variables';
.q-btn {
  font-weight: bold;
}
.q-header {
  background: $headerBlack;
}
.q-toolbar {
  color: $main;
}
</style>

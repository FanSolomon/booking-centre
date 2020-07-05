<template>
    <div class="header">
      <q-header reveal style="background: #24292e;">
        <q-toolbar style="color: #42b983; padding: 0;">
          <q-btn align="left" unelevated icon="fas fa-circle-notch" to="/" exact class="q-ml-md"></q-btn>
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
          <q-btn align="left" unelevated padding="sm" name="Xdxx" to="/" exact class="q-ml-md"><b>Xdxx</b></q-btn>
          <q-btn align="left" unelevated padding="sm" name="Mess" to="/mess" exact ><b>Mess</b></q-btn>
          <q-btn align="left" unelevated padding="sm" name="Rainbow6" to="/rainbow6" exact ><b>Rainbow6</b></q-btn>

          <q-space />

          <q-btn  align="left" unelevated icon="fab fa-github" @click="go_site('https://github.com/FanSolomon')"></q-btn>
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

<style scoped>

</style>

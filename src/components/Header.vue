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

          <!-- <q-btn align="left" unelevated icon="fab fa-github" @click="go_site('https://github.com/FanSolomon/booking-centre')"></q-btn> -->

          <q-btn-dropdown @click="onMainClick" align="left" padding="0" unelevated no-icon-animation fab-mini>
            <template v-slot:label>
              <q-avatar size="md" rounded>
                <img src="https://avatars0.githubusercontent.com/u/16274304?s=60&v=4">
              </q-avatar>
            </template>
            <q-list style="width: 170px">
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Signed in as </q-item-label>
                  <strong>{{ user.user_name }}</strong>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>your profile</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Help</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Settings</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Sign out</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>
      </q-header>

    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      text: '',
      loadingState: false
    }
  },
  computed: {
    user () {
      if (localStorage.user) {
        return JSON.parse(localStorage.user)
      } else {
        return ''
      }
    }
  },
  methods: {
    go_site (url) {
      window.open(url)
    },
    onMainClick () {
      // console.log('Clicked on main button')
    },
    onItemClick () {
      // console.log('Clicked on an Item')
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
  padding: 0 16px 0 0;
}
.q-toolbar {
  color: $main;
}
.q-item {
  color: $headerBlack;
  min-height: 38px;
}
</style>

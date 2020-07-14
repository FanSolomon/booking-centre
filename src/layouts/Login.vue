<template>
    <div style="background-color: #f9f9f9;">
        <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">

            <q-page-container bordered>
                <div class="text-center" style="padding: 32px 0 5px">
                    <q-btn round style="color:#42b983" size="30px" unelevated icon="fas fa-biohazard"></q-btn>
                </div>
                <div class="text-center text-h4" style="margin:0 auto; width:340px; height:300px">
                    <div style="margin:0 16px;">
                        <h2>Sign in to Booking</h2>

                        <q-card flat bordered class="my-card">
                            <q-card-actions vertical align="center">
                                <p>Username or email address</p>
                                <q-input outlined v-model="username" dense class="height:30px"/>
                                <p>Password</p>
                                <q-input :type="isPwd ? 'password' : 'text'" outlined v-model="password" dense>
                                    <!-- <template v-slot:append>
                                        <q-icon
                                            :name="isPwd ? 'visibility_off' : 'visibility'"
                                            class="cursor-pointer"
                                            @click="isPwd = !isPwd"
                                        />
                                    </template> -->
                                </q-input>
                                <q-btn style="width:100%; margin:16px 0 0" padding="5px 0" unelevated color="primary" label="Sign in" />
                            </q-card-actions>
                        </q-card>
                    </div>
                </div>
                <div class="text-center" style="padding: 100px 16px 40px 16px">
                    <ul>
                        <li><a href="/">about</a></li>
                        <li><a href="/">what</a></li>
                        <li><a href="javascript:void(0)" style="color: #586069;" @click="go_site('https://github.com/login')">modeled Github's style</a></li>
                    </ul>
                </div>
            </q-page-container>
        </q-layout>
    </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      isPwd: true
    }
  },
  components: {
  },
  methods: {
    go_site (url) {
      window.open(url)
    }
  }
}
</script>

<style scoped>
h2 {
    margin:0; color:#333333;
    font-weight: 300;
    font-size: 24px;
    letter-spacing: 0.5px;
}
p {
    font-size: 14px;
    font-weight: 100;
    color:#333333;
    margin: 0;
    align-self: start;
}
ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}
li {
    float: left;
    display: flex;
    list-style-type:none;
    margin-right: 16px;
}
a {
    color: #0366d6;
    text-decoration: none;
}
.q-card {
    padding: 20px;
    font-weight: 600;
}
.q-input {
    width:100%
}
.q-field--dense .q-field__control, .q-field--dense .q-field__marginal {
    height: 30px!important;
}
</style>

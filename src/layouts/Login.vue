<template>
    <div id="loginPage">
        <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">

            <q-page-container bordered>
                <div class="text-center" style="padding: 32px 0 5px">
                    <q-btn class="logo" round size="30px" unelevated icon="fas fa-biohazard"></q-btn>
                </div>
                <div class="text-center text-h4" style="margin:0 auto; width:340px; height:300px">
                    <div style="margin:0 16px;">
                        <h2>Sign in to Booking</h2>

                        <q-card flat bordered>
                            <q-card-actions vertical align="center">
                                <q-form @submit="submitForm" ref="userInfo">
                                    <p>Username or email address</p>
                                    <q-input outlined v-model="userInfo.username" dense class="height:30px"/>
                                    <p>Password</p>
                                    <q-input :type="isPwd ? 'password' : 'text'" outlined v-model="userInfo.password" dense>
                                        <!-- <template v-slot:append>
                                            <q-icon
                                                :name="isPwd ? 'visibility_off' : 'visibility'"
                                                class="cursor-pointer"
                                                @click="isPwd = !isPwd"
                                            />
                                        </template> -->
                                    </q-input>
                                    <q-btn style="width:100%; margin:16px 0 0" padding="5px 0" unelevated color="primary" type="submit" label="Sign in" />
                                </q-form>
                            </q-card-actions>
                        </q-card>
                    </div>
                </div>
                <div class="text-center" style="padding: 100px 16px 40px 16px">
                    <ul>
                        <li><a href="/">about</a></li>
                        <li><a href="/">what</a></li>
                        <li><a href="javascript:void(0)" class="link-gray" @click="go_site('https://github.com/login')">modeled Github's style</a></li>
                    </ul>
                </div>
            </q-page-container>
        </q-layout>
    </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
export default {
  name: 'Login',
  data () {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      isPwd: true
    }
  },
  components: {
  },
  methods: {
    go_site (url) {
      window.open(url)
    },
    submitForm () {
      const formData = new FormData()
      for (var key in this.userInfo) {
        formData.append(key, this.userInfo[key])
      }
      this.$refs.userInfo.validate().then(success => {
        if (success) {
          this.$http.postWithoutToken(this.$baseUrl + '/auth/login', this.userInfo)
            .then(res => {
              console.log(res)
              const result = res.data
              if (res.success === true) {
                const token = result.access_token
                // token存储到localStorage
                localStorage.setItem('bcToken', token)
                const decoded = jwtDecode(token)
                console.log(decoded)
                this.$routes.push('/index')
              } else {
                if (typeof res.errorMsg === 'undefined' || res.errorMsg == null || res.errorMsg === '') {
                  // TODO 用统一提示框显示
                  alert('登录失败，未知错误')
                } else {
                  alert(res.errorMsg)
                }
              }
            })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~quasar-variables';
h2 {
    margin:0;
    color: $blackText;
    font-weight: 300;
    font-size: 24px;
    letter-spacing: 0.5px;
}
p {
    font-size: 14px;
    font-weight: 100;
    color: $blackText;
    margin: 0;
    align-self: start;
    float: left;
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
    color: $link;
    text-decoration: none;
}
.q-card {
    padding: 20px;
    font-weight: 600;
}
.q-input {
    width:100%
}
.q-form {
    width: 100%;
}
.logo {
    color: $main;
}
#loginPage {
    background-color: $grayBg;
}
.link-gray {
    color: $grayText;
}
</style>

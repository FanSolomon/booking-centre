<template>
    <div>
      <q-page-container>
        <q-page>
          This is booking page, 开发中
          <q-btn align="left" label="Test" type="submit" color="primary" unelevated padding="sm" @click="test" />
        </q-page>
      </q-page-container>
    </div>
</template>

<script>
export default {
  name: 'Booking',
  data () {
    return {
      alertTitle: '',
      alertMessage: ''
    }
  },
  components: {

  },
  methods: {
    test () {
      this.$http.post(this.$baseUrl + '/bcUser/test', '')
        .then(res => {
          const result = res.data
          if (res.success === true) {
            this.alertMessage = result
            this.alertTitle = '成功'
          } else {
            if (typeof res.errorMsg === 'undefined' || res.errorMsg == null || res.errorMsg === '') {
              this.alertMessage = '失败，未知错误'
            } else {
              this.alertMessage = res.errorMsg
            }
            this.alertTitle = '失败'
          }
          const dialog = this.$q.dialog({
            title: this.alertTitle,
            message: this.alertMessage
          }).onDismiss(() => {
            clearTimeout(timer)
          })

          const timer = setTimeout(() => {
            dialog.hide()
          }, 2000)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~quasar-variables';
</style>

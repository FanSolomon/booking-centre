<template>
    <div>
        <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">

            <q-container bordered class="bg-white">
                <div class="text-center" style="padding: 32px 0 24px">
                    <q-btn style="color:#FDD835" size="30px" align="left" unelevated icon="fas fa-biohazard"></q-btn>
                </div>
                <div class="text-center text-h4" style="margin:0 auto; width:50%; height:300px">
                    <p style="color:#333333">xxx</p>
                    <q-input outlined v-model="text" dense/>
                </div>
            </q-container>
            <q-footer bordered class="bg-white text-primary">
                <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
                <q-tab name="images" label="Images" />
                <q-tab name="videos" label="Videos" />
                <q-tab name="articles" label="Articles" />
                </q-tabs>
            </q-footer>
        </q-layout>
    </div>
</template>

<script>

export default {
  name: 'Login',
  components: {
  }
}
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card>
      ELO
    </q-card>
    <q-card>
      ELO
    </q-card>
    <q-card>
      ELO
    </q-card>
  </div>
</template>

<script>

import {defineComponent, onMounted} from 'vue'
import axios from 'axios'

export default defineComponent({
  name: "TrainingsTakeUsers",
  setup() {

    onMounted(async () => {
      await axios.get(`http://localhost:3000/user/all`)
      .then((res) => console.log(res))
    })
  }
})
</script>

<style scoped>

</style>

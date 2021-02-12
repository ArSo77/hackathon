<template>
  <q-page class="flex flex-center ">
    <q-card>
      <q-form class="q-pa-md">
        LALAL
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import TrainingsTakeUsers from "components/Trainings/TrainingsTakeUsers";
export default defineComponent({
  name: "Trainings",
  components: {TrainingsTakeUsers},
  setup(){

    const step = ref(1);

    const selectedUsers = ref([])

    return {
      step,
    };

  }
})
</script>

<style scoped>

</style>

<template>
  <section>
    Trainer View

    <q-tabs
      v-model="tab"
      inline-label
      class="bg-green text-white shadow-2"
      dense
    >
      <q-tab
        v-for="trainer in trainers"
        :key="trainer"
        name="mails"
        icon="person"
        label="Adam M"
      />
    </q-tabs>
  </section>
</template>


<script>
import { ref } from "vue";
export default {
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    let tab = ref("alarms");

    let trainers = ref(["Adam M", "Arek K", "Wiktor W"]);

    return { tab, trainers };
  },
};
</script>

<style>
</style>
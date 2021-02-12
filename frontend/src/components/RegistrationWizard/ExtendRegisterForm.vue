<template>
  <q-form class="q-gutter-md">
    <q-input
      v-model="name"
      filled
      type="text"
      hint="Imię"
      :rules="[
        (val) => val.trim().length > 3 || 'Imię musi zawierać min. 3 znaki',
      ]"
    />

    <q-input
      v-model="surname"
      filled
      type="text"
      hint="Nazwisko"
      :rules="[
        (val) => val.trim().length > 3 || 'Nazwisko musi zawierać min. 3 znaki',
      ]"
    />

    <q-input v-model="desc" filled type="textarea" hint="Opis" />

    <q-input
      @input="
        (val) => {
          file = val[0];
        }
      "
      filled
      type="file"
      hint="Zdjęcie profilowe"
    />
  </q-form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExtendRegisterForm",
  props: {},
  data() {
    return {
      name: "",
      surname: "",
      desc: "",
    };
  },
});
</script>

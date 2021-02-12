<template>
  <q-form class="q-gutter-md">
    <q-input
      v-model="email"
      filled
      type="email"
      hint="Email"
      :rules="[(val) => !!val || 'Nieprawidłowy adres e-mail', isValidEmail]"
    />

    <q-input
      v-model="password"
      filled
      :type="isPwd ? 'password' : 'text'"
      :rules="[isValidPassword || 'Hasło musi zawierać min. 5 znaków']"
      hint="Hasło"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>

    <div class="q-gutter-sm">
      <q-checkbox v-model="isTrainer" label="Rejestracja jako trener" />
    </div>
  </q-form>
</template>

<script>
import { defineComponent } from "vue";
import BaseRegisterModel from "./BaseRegisterModel.model";

export default defineComponent({
  name: "BaseRegisterForm",
  emits: ["base-register-data"],
  props: {},
  data() {
    return {
      isPwd: true,
      email: "",
      isTrainer: false,
      password: "",
    };
  },
  methods: {
    isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Nieprawidłowy adres e-mail";
    },
    isValidPassword(val) {
      return val.trim().length > 5;
    },
  },
  watch: {
    checkDataCorrect: {
      immediate: true,
      deep: true,
      handler(v) {
        if (v) {
          const values = new BaseRegisterModel(
            this.email,
            this.password,
            true,
            this.isTrainer
          );
          this.$emit("base-register-data", values);
        } else {
          const values = new BaseRegisterModel(null, null, false, false);
          this.$emit("base-register-data", values);
        }
      },
    },
  },
  computed: {
    checkDataCorrect() {
      return (
        this.isValidEmail(this.email) && this.isValidPassword(this.password)
      );
    },
  },
});
</script>

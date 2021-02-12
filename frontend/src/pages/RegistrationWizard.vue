<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-stepper v-model="step" ref="stepper" color="primary" animated>
        <q-step
          :name="1"
          title="Podaj hasło i email"
          icon="email"
          :done="step > 1"
        >
          <BaseRegisterForm @base-register-data="handleBaseRegisterData" />
        </q-step>

        <q-step
          :name="2"
          title="Podstawowe informacje"
          icon="create_new_folder"
          :done="step > 2"
        >
          <ExtendRegisterForm />
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn
              @click="$refs.stepper.next()"
              color="primary"
              :label="step === 2 ? 'Zarejestruj' : 'Przejdź dalej'"
              :disable="!dataFromBaseRegisterForm.correct"
            />
            <q-btn
              v-if="step > 1"
              flat
              color="primary"
              @click="$refs.stepper.previous()"
              label="Wróć"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import BaseRegisterForm from "../components/RegistrationWizard/BaseRegisterForm";
import ExtendRegisterForm from "../components/RegistrationWizard/ExtendRegisterForm";
import BaseregisterModel from "../components/RegistrationWizard/BaseRegisterModel.model.js";

export default defineComponent({
  name: "RegistrationWizard",
  components: {
    BaseRegisterForm,
    ExtendRegisterForm,
  },
  data() {
    return {
      step: 1,
      dataFromBaseRegisterForm: new BaseregisterModel({}),
    };
  },
  methods: {
    handleBaseRegisterData(val) {
      this.dataFromBaseRegisterForm = val;
    },
  },
});
</script>

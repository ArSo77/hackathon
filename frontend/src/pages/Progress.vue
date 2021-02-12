<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <q-breadcrumbs class="text-brown">
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" color="primary" />
          </template>

          <q-breadcrumbs-el label="Home" icon="home" to="/" />
          <q-breadcrumbs-el
            label="Progress"
            icon="accessible_forward"
            to="/progress"
          />
        </q-breadcrumbs>
      </div>
    </div>
    <div class="row">
      <div class="col-8"></div>
      <div class="col-4">
        <ProgressCard />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ProgressCard from "../components/ProgressCard";

export default defineComponent({
  name: "Progress",
  components: {
    ProgressCard,
  },
  setup() {},
});
</script>

<style></style>

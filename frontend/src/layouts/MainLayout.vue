<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
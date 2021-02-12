<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      class="sidebar-shadow"
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <template v-for="menuOption in MENU_OPTIONS"
                    :key="menuOption.name">
            <q-item clickable v-ripple
                    :active="currentActiveRoute(menuOption.path)"
                    @click="$router.push(menuOption.path)">
              <q-item-section avatar>
                <q-icon :name="menuOption.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuOption.name }}
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {MENU_OPTIONS} from "layouts/route-definitions";

export default {
  name: "MyLayout",

  data() {
    return {
      drawer: true,
      MENU_OPTIONS
    };
  },
  methods: {
    currentActiveRoute(selectedPath) {
      return this.$route.path === selectedPath;
    }
  }
};
</script>
<style>
  .sidebar-shadow {
    border-right: 1px solid rgba(0,0,0,.1);
    box-shadow: 2px 0px 4px 0px rgba(0,0,0,.1);
  }
</style>

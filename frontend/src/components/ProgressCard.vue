<template>
  <q-card dark bordered class="bg-grey-9 my-card">
    <q-card-section>
      <div class="text-h6 text-center">Karta progresu</div>
      <div class="q-pa-md">
        <q-carousel
          swipeable
          animated
          arrows
          v-model="slide"
          :fullscreen.sync="fullscreen"
          infinite
        >
          <q-carousel-slide :name="1" img-src="../assets/meganfox.jpg" />
          <q-carousel-slide :name="2" img-src="../assets/meganfox2.jpg" />
          <template v-slot:control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                push
                round
                dense
                color="white"
                text-color="primary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
      </div>
    </q-card-section>
    <q-separator dark inset />
    <q-card-section>
      {{ lorem }}
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProgressCard",
  data() {
    return {
      slide: 1,
      fullscreen: false,
    };
  },
});
</script>

<style></style>

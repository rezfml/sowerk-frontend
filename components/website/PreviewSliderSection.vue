<template>
  <v-row style="background-color: #151515;" class="py-12 ">
    <v-col class="d-flex flex-column align-center">
      <p class="white--text text-h5">{{ slider.title }}</p>
      <v-slide-group style="width: 90%;" class="mx-auto my-12" dark>
        <v-slide-item v-for="item in slider.items" style="width: 22.5vw">
          <v-row>
            <v-col class="d-flex flex-column align-center" v-if="slider.type == 'manager'">
              <p class="font-weight-bold white--text text-h5">{{ item.name }}</p>
              <p class="white--text text-h6 font-weight-regular"><span class="primary--text">{{ item.providers }}</span> {{ slider.firstLineAfter }}</p>
              <p class="white--text text-h6 font-weight-regular"><span class="primary--text">{{ item.properties }}</span>
                {{ slider.secondLineAfter }}</p>
            </v-col>
            <v-col class="d-flex flex-column align-center" v-else>
              <p class="font-weight-bold white--text text-h5">{{ item.name }}</p>
              <p class="white--text text-h6 font-weight-regular"><span class="primary--text">{{ item.locations }}</span> {{ slider.firstLineAfter }}</p>
              <p class="white--text text-h6 font-weight-regular"><span class="primary--text">{{ item.range }}</span>
                {{ slider.secondLineAfter }}</p>
            </v-col>
          </v-row>
        </v-slide-item>
      </v-slide-group>
      <v-btn color="primary" width="50%" max-width="500px" rounded>View All</v-btn>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "PreviewSliderSection",
    props: {
      slider: {
        type: Object,
        required: true
      }
    }
  };
</script>

<style scoped>

</style>

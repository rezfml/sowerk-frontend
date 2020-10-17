<template>
  <v-card class="white pt-0 mt-9" max-height="50%;">
    <v-container>
      <v-card-title style="position: absolute; top: -25px; left: 25px;border-radius: 3px;" class="primary body-2" ><v-icon>mdi-account</v-icon></v-card-title>
      <v-card-text class="py-0">
        <v-form>
          <v-row>
            <v-col cols="12" class="pb-0 mt-3">
              <v-subheader class="px-0 headline font-weight-bold primary--text" light>Application Acception</v-subheader>
              <p class="mb-2">Filter and select the specific applications that this location is accepting.</p>
            </v-col>
          </v-row>
          <div class="d-flex flex-wrap justify-start">
            <v-checkbox style="width: 33%;" class="" v-for="check in checkbox" :label="check.name" v-model="check.value"></v-checkbox>
          </div>
        </v-form>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
  import VImageInput from 'vuetify-image-input'

  export default {
    name: "ProfileEditCard",
    components: {
      VImageInput
    },
    data() {
      return {
        firstName: null,
        lastName: null,
        title: null,
        address: null,
        year: null,
        industry: null,
        website: null,
        email: null,
        phone: null,
        description: null,
        image: null,
        checkbox: [
          {
            name: 'HVAC',
            value: false,
          },
          {
            name: 'Roofing',
            value: false,
          },
          {
            name: 'General Contractor',
            value: false,
          },
          {
            name: 'Plumbing',
            value: false,
          },
          {
            name: 'Window/Glass Repair',
            value: false,
          },
          {
            name: 'Electrician',
            value: false,
          },
          {
            name: 'Landscaper',
            value: false,
          },
          {
            name: 'Painting',
            value: false,
          },
          {
            name: 'Paving',
            value: false,
          },
          {
            name: 'Excavation',
            value: false,
          },
          {
            name: 'Pest Control',
            value: false,
          },
          {
            name: 'Waste Management',
            value: false,
          },
          {
            name: 'Engineering',
            value: false,
          },
          {
            name: 'Water Damage Repair',
            value: false,
          },
        ],
        serviceForms: [
          {
            name: 'HVAC',
            content: 'Your Own Form',
          },
          {
            name: 'Plumbing',
            content: '1 Facility Specific Form - (Edited by Facility Admin 6/20/2020)',
          },
          {
            name: 'Electrical',
            content: 'Your Own Form',
          },
          {
            name: 'Painting',
            content: 'Your Own Form',
          },
          {
            name: 'Welding',
            content: 'Your Own Form',
          },
        ]
      }
    }
  };
</script>

<style scoped>

</style>

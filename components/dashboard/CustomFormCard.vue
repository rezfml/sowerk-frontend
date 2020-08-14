<template>
  <v-card class="white pt-0 mt-9" height="40%">
    <v-container>
      <v-card-title style="position: absolute; top: -25px; left: 25px;border-radius: 3px;" class="primary body-2" ><v-icon>mdi-account</v-icon></v-card-title>
      <v-card-text class="py-0">
        <v-form>
          <v-row>

            <v-col cols="12" class="pb-0 mt-3">
              <v-subheader class="px-0 headline font-weight-bold primary--text" light>Edit Vendor Forms</v-subheader>
            </v-col>

            <v-col cols="12" class="py-0">
              <p class="mb-2">General</p>
              <v-divider color="grey"></v-divider>
              <v-list>
                <v-list-item class="px-0">
                  <v-list-item-content class="py-0">2 Facility Specific Form - (Editied by Facility Admin 6/20/2020</v-list-item-content>
                  <v-list-item-action class="my-0">
                    <v-btn icon color="primary" class="px-12">
                      <v-icon>edit</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12">
              <p class="mb-2">Service Forms</p>
              <v-divider color="grey"></v-divider>
              <v-simple-table>
                <tbody>
                  <tr v-for="(form, i) in serviceForms" :key="i">
                    <td>{{ form.name }}</td>
                    <td>{{ form.content }}</td>
                    <td>
                      <v-btn style="width: 100%;" icon color="primary">
                        <v-icon>edit</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>

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

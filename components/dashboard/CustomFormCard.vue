<template>
  <v-card class="white pt-0 mt-9" max-height="50%;">
    <v-container>
      <v-card-title style="position: absolute; top: -25px; left: 25px;border-radius: 3px;" class="primary body-2" ><v-icon>mdi-account</v-icon></v-card-title>
      <v-card-text class="py-0">
        <v-form>
          <v-row>

            <v-col cols="12" class="pb-0 mt-3">
              <v-subheader class="px-0 headline font-weight-bold primary--text" light>Edit Vendor Forms</v-subheader>
            </v-col>

<!--            <v-col cols="12" class="py-0">-->
<!--              <p class="mb-2">General</p>-->
<!--              <v-divider color="grey"></v-divider>-->
<!--              <v-list>-->
<!--                <v-list-item class="px-0">-->
<!--                  <v-list-item-content class="py-0" v-if="finishedFormFields === true">{{ totalLength }} General Application Questions</v-list-item-content>-->
<!--                  <v-list-item-action class="my-0">-->
<!--                    <v-btn icon color="primary" class="px-12">-->
<!--                      <v-icon>edit</v-icon>-->
<!--                    </v-btn>-->
<!--                  </v-list-item-action>-->
<!--                </v-list-item>-->
<!--              </v-list>-->
<!--            </v-col>-->
            <v-col cols="12" style="width: 100%;">
              <v-divider color="grey"></v-divider>
              <v-simple-table style="width: 100%;">
                <tbody style="width: 100%;">
                  <tr v-for="(form, i) in userForms" :key="i" style="width: 100%;">
                    <td style="width: 30%;">{{ form.name }}</td>
                    <td style="width: 50%;" v-if="finishedFormFields === true">{{ form.formfields.length }} Specific Application Questions</td>
                    <td class="d-flex flex-column" style="width: 100%; height: auto;">
                      <v-btn :href="'../../dashboard/vendors/applications/' + form.id" class="my-1" style="width: 100%;" color="green" outlined>
                        View/Edit
                      </v-btn>
                      <v-btn class="my-1" style="width: 100%;" outlined color="primary">
                        Delete
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
        ],
        locationId: Number,
        userForms: [],
        value: 0,
        finishedFormFields: false,
        totalLength: 0
      }
    },
    async mounted() {
      this.locationId = this.$route.params.id;
      console.log(this.locationId, 'locationId')
      await this.getServices(this.locationId);
    },
    methods: {
      async getServices(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/services/byLocationId/' + id)
          .then(response => {
            console.log(response.data, 'services');
            if(response.data.length !== 0) {
             for(let i = 0; i<response.data.length; i++) {
               this.getUserforms(response.data[i].id)
             }
            }
          })
          .catch(err => {
            console.log('err get services', err);
          })
        console.log(this.userForms, 'this.userForms');
      },
      async getUserforms(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/userforms/byServiceId/' + id)
          .then(async (response) => {
              console.log(response.data, 'userforms');
              if(response.data.length !== 0) {
                for(let i = 0; i<response.data.length; i++) {
                  console.log('response.data', response.data[i])
                  let userForm = {
                    active: response.data[i].active,
                    id: response.data[i].id,
                    name: response.data[i].name,
                    service_id: response.data[i].service_id,
                    formfields: []
                  }
                  this.userForms.push(userForm);
                  await this.getFormFields(response.data[i].id);
                }
                this.finishedFormFields = true;
              }
            })
          .catch(err => {
            console.log('err get services', err);
          })
      },
      async getFormFields(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/formfields/byUserFormId/' + id)
          .then(response => {
            console.log(response.data, 'formfields for userform', id);
            this.userForms[this.value].formfields = response.data;
            console.log(this.value, 'value');
            this.value++
            this.totalLength += response.data.length;
            console.log(this.totalLength, 'totalLength');
          })
          .catch(err => {
            console.log('err get services', err);
          })
      }
    }
  };
</script>

<style scoped>

</style>

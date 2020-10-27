<template>
       <v-tab-item eager>
            <v-container style="max-width: 80%;" mx-auto>
              <v-card-text class="pa-0">
                <p
                  class="title font-weight-regular text-center my-12 grey--text text--darken-2"
                >
                  Let's Review Your Details
                </p>
                <v-col cols="12" class="align-center text-center mx-auto">
                  <!--                  <v-img :src="company.image" max-height="300px" max-width="300px" aspect-ratio="1" v-if="company.image && company.image != ''"></v-img>-->
                  <v-icon
                    color="grey"
                    style="font-size: 100px; text-align: center"
                    class="mx-auto"
                    >person</v-icon
                  >
                  <p class="headline font-weight-bold">
                    {{ company.company_name }}
                  </p>
                </v-col>

                <v-col
                  cols="12"
                  style="max-width: 720px;"
                  class="mx-auto d-flex flex-column align-center"
                >
                  <v-form class="mx-auto">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-title>Your Information</v-title>
                          <v-divider ></v-divider>
                          <p
                            class="grey--text text--darken-4 font-weight-bold mb-0"
                          >
                            First Name*
                          </p>
                          <v-text-field
                            placeholder=" "
                            readonly
                            v-model="user.first_name"
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <p
                            class="grey--text text--darken-4 font-weight-bold mb-0"
                          >
                            Last Name*
                          </p>
                          <v-text-field
                            placeholder=" "
                            readonly
                            v-model="user.last_name"
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <p
                            class="grey--text text--darken-4 font-weight-bold mb-0"
                          >
                            Email*
                          </p>
                          <v-text-field
                            placeholder=" "
                            readonly
                            v-model="user.email"
                          >
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <p
                            class="grey--text text--darken-4 font-weight-bold mb-0"
                          >
                            Phone*
                          </p>
                          <v-text-field
                            placeholder=" "
                            readonly
                            v-model="user.phone"
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-title style="font-size:1.2vw;">Company Account Information</v-title>
                         <v-divider  ></v-divider>
                          <p
                            class="grey--text text--darken-4 font-weight-bold mb-0"
                          >
                            Corporate Address*
                          </p>
                          <v-text-field
                            v-model="fullAddress"
                            placeholder=" "
                            readonly
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="company.account_name"
                            placeholder=""
                            label="Company Account Name"
                            readonly
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="company.year_founded"
                            placeholder=""
                            label="Company Year Founded"
                            readonly
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <p
                            class="grey--text text--darken-4 font-weight-bold mb-0"
                            style="font-size: 14px;"
                          >
                            Corporate Description*
                          </p>
                          <p
                            class="mb-1"
                            style="font-size: 16px; min-height: 48px;"
                          >
                            {{
                              company.description ? company.description : '\n'
                            }}
                          </p>
                          <v-divider
                            style="border-width: thin 0 0 0; border-color: rgba(0,0,0,0.5);"
                          ></v-divider>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                  <v-btn
                    class="mx-auto mt-4"
                    color="primary"
                    outlined
                    rounded
                    @click="setPage(0)"
                    >Edit Information</v-btn
                  >
                </v-col>

                <!--                <v-divider color="red" class="mt-8 mb-4"></v-divider>-->

                <!--                <v-col cols="12" class="mt-2">-->
                <!--                  <h2 class="mb-4 mx-auto font-weight-bold text-center">Review Company Locations</h2>-->
                <!--                  <v-data-table--><!--                    :headers="headers"-->
                <!--                    :items.sync="locations"-->
                <!--                    :items-per-page="10"-->
                <!--                  >-->
                <!--                    <template v-slot:item.id="{ item }">{{ locations.indexOf(item) + 1 }}</template>-->
                <!--                    <template v-slot:item.full_name="{ item }">{{ item.contact_first_name }} {{ item.contact_last_name }}</template>-->
                <!--                  </v-data-table>-->
                <!--                </v-col>-->

                <!--                <v-col cols="12">-->
                <!--                  <v-checkbox-->
                <!--                    label="I agree to the Terms of Service"-->
                <!--                    v-on:change="getTosDate"-->
                <!--                  >-->
                <!--                  </v-checkbox>-->
                <!--                </v-col>-->
              </v-card-text>
            </v-container>
          </v-tab-item>
</template>

<script>
export default {
  name: "ComapnyReview",
  props: {
    company: {
      type: Object,
      return: true,
    },
    user: {
      type: Object,
      return: true
    },
    setPage: {
      type: Function,
      setPage(tab) {
      this.tab = tab
    },
    },
     fullAddress: null,
  }

}
</script>

<style>

</style>

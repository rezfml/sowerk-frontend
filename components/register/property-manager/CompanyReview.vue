<template>
       <v-tab-item eager>
            <v-container style="max-width: 80%;" mx-auto>
                <v-col cols="12">
                  <v-card-text class="pa-0" style="width: 100%;">Let's Review Your Details</v-card-text>
                </v-col>
                <v-col cols="12" class="align-center text-center mx-auto">
                  <v-img :src="imageUrl" max-height="300px" max-width="300px" aspect-ratio="1" v-if="imageUrl" class="mx-auto rounded-circle"></v-img>
                  <v-icon
                    color="grey"
                    style="font-size: 100px; text-align: center"
                    class="mx-auto"
                    v-else
                    >person</v-icon
                  >
                  <p class="headline font-weight-bold">
                    {{ company.company_name }}
                  </p>
                </v-col>

                <v-col
                  cols="12"
                  style="max-width: none;"
                  class="mx-auto d-flex flex-column align-center"
                >
                  <v-form class="mx-auto">
                    <v-container class="px-0">
                      <p>Your Information</p>
                      <v-divider ></v-divider>
                      <v-row class="mt-2">
                        <v-col cols="12" md="6">
                          <p
                            class="grey--text text--darken-4 font-weight-bold mb-0"
                          >
                            First Name*
                          </p>
                          <v-text-field
                            placeholder=" "
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
                            v-model="user.phone"
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <p style="font-size:1.2vw;">Company Account Information</p>
                         <v-divider class="mb-4"></v-divider>
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
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="company.year_founded"
                            placeholder=""
                            label="Company Year Founded"
                            type="number"
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-textarea
                            id="company-description"
                            label="Company Profile Description*"
                            v-model="company.description"
                            placeholder="Provide SOWerk users and vendors text about your company's business, company history, and relationship with vendors."
                          ></v-textarea>
<!--                          <v-divider-->
<!--                            style="border-width: thin 0 0 0; border-color: rgba(0,0,0,0.5);"-->
<!--                          ></v-divider>-->
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
                  <!--
                  <v-divider color="red" class="mt-8 mb-4"></v-divider>
                    <v-col cols="12" class="mt-2">
                      <h2 class="mb-4 mx-auto font-weight-bold text-center">Review Company Locations</h2>
                        <v-data-table
                            :headers="headers"
                            :items.sync="locations"
                            :items-per-page="10"
                          >
                          <template v-slot:item.id="{ item }">{{ locations.indexOf(item)  }}</template>
                          <template v-slot:item.full_name="{ item }">{{ item.contact_first_name }} {{ item.contact_last_name }}</template>
                        </v-data-table>
                        <v-btn class="mx-auto mt-4" color="primary" outlined rounded @click="setPage(1)">Edit Locations</v-btn>
                 
                    </v-col>-->
                </v-col>

<!--                <v-col cols="12">-->
<!--                  <v-data-table-->
<!--                    :headers="headers"-->
<!--                    :items="locations"-->
<!--                    :items-per-page="10"-->
<!--                    :key="rerenderIndex"-->
<!--                  >-->
<!--                    <template v-slot:item.id="{ item }">{{-->
<!--                        locations.indexOf(item) + 1-->
<!--                      }}</template>-->
<!--                    <template v-slot:item.full_name="{ item }"-->
<!--                    >{{ item.contact_first_name }}-->
<!--                      {{ item.contact_last_name }}</template-->
<!--                    >-->
<!--                    <template v-slot:item.actions="{ item }">-->
<!--                    </template>-->
<!--                  </v-data-table>-->
<!--                  <p v-for="(location, index) in locations" :key="index">{{ location }}</p>-->
<!--                </v-col>-->

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
            </v-container>
          </v-tab-item>
</template>

<script>
export default {
  name: "CompanyReview",
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
    locations: {
      type: Array
    },
    headers: {
      type: Array
    },
    fullAddress: null,
    imageUrl: {
      type: String,
    },
  },
  data() {
    return {
      rerenderIndex: 0
    }
  },
  mounted() {
    console.log("Locations from review page", this.locations);
    this.rerenderTable();
  },
  methods: {
    rerenderTable() {
      this.rerenderIndex += 1;
    }
  }

}
</script>

<style>

</style>

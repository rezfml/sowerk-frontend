<template>
  <v-flex class="my-12 pt-5">
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex flex-column">
          <p
            class="text-h4 text-sm-h4 text-md-h3 font-weight-bold primary--text text-center"
          >
            Property and Facility Managers Often Ask
          </p>
          <v-list
            max-width="950px"
            :width="$vuetify.breakpoint.mdAndUp ? '80%' : '90%'"
            class="mx-auto"
          >
            <v-list-item class="mt-8 mb-12">
              <v-list-item-icon
                ><v-icon color="primary" size="40"
                  >mdi-check-circle-outline</v-icon
                ></v-list-item-icon
              >
              <v-list-item-content>
                <v-list-item-title
                  class="text-capitalize text-h5 font-weight-bold mb-3 wrap-text"
                  >Is this going to create more work for me?</v-list-item-title
                >
                <v-list-item-subtitle class="text-subtitle-1 wrap-text"
                  >Actually, we designed SOWerk to be less work for you. Think
                  of SOWerk like connecting with service providers on social
                  media, except they have to meet your approved provider
                  requirements. From here you can easily manage and communicate
                  with your approved service providers.</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="mt-8 mb-12">
              <v-list-item-icon
                ><v-icon color="primary" size="40"
                  >mdi-check-circle-outline</v-icon
                ></v-list-item-icon
              >
              <v-list-item-content>
                <v-list-item-title
                  class="text-capitalize text-h5 font-weight-bold mb-3 wrap-text"
                  >Will SOWerk Save Us Money? Will It Protect Our
                  Investments?</v-list-item-title
                >
                <v-list-item-subtitle class="text-subtitle-1 wrap-text"
                  >If time is money and quality is everything then yes SOWerk
                  can help. SOWerk makes it efficent for any staff member to vet
                  & manage local/national service providers, such as getting
                  bids for projects and communicating details. If it’s easy to
                  get bids from multiple vetted providers then it might just
                  save you both time and money. Additionally, we make service
                  providers requalify annualy on things like insurance coverage
                  and licenses so you don’t have to.</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="mt-8 mb-12">
              <v-list-item-icon
                ><v-icon color="primary" size="40"
                  >mdi-check-circle-outline</v-icon
                ></v-list-item-icon
              >
              <v-list-item-content>
                <v-list-item-title
                  class="text-capitalize text-h5 font-weight-bold mb-3 wrap-text"
                  >Will SOWerk Help Shield Me From Cold
                  Calls?</v-list-item-title
                >
                <v-list-item-subtitle class="text-subtitle-1 wrap-text"
                  >Sales is part of any business but sometimes you just need
                  place to send the salesman where they can apply for your
                  approved service program. SOWerk is your solution.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-btn
            class="text-uppercase primary mx-auto text-md-body-2 text-sm-body-2"
            x-large
            :width="$vuetify.breakpoint.mdAndUp ? '60%' : '70%'"
            style="border-radius: 20px; font-weight: bold"
            to="/landingpage/property-manager"
            >Provider Facility - Learn More</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  name: 'OftenAskPF',
}
</script>

<style scoped>
.wrap-text {
  -webkit-line-clamp: unset !important;
  overflow: visible !important;
  text-overflow: unset !important;
  white-space: unset !important;
  line-height: 1.5rem;
}
</style>
<template>
  <v-flex class="my-12 pb-2">
    <v-container>
      <v-row class="mt-12">
        <v-col cols="12" class="d-flex flex-column">
          <p
            class="text-h4 text-sm-h4 text-md-h3 font-weight-bold primary--text text-center"
          >
            Service Providers Often Ask
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
                  >Do I Seriously Get More Jobs?</v-list-item-title
                >
                <v-list-item-subtitle
                  class="text-subtitle-1 wrap-text"
                  style="line-height: 23px"
                >
                  <p>
                    Yes, Property & Facility managers of all sizes use SOWerk to
                    manage their approved vendor program. We make it easy for
                    them to vet service providers request bids.
                  </p>
                  <p class="mb-0">
                    SOWerk also helps you look good when applying for approved
                    vendor programs, but we also make it easy to share those
                    good looks with others. Next time your bidding a job show
                    off your resume by emailing or texting your SOWerk profile.
                  </p>
                </v-list-item-subtitle>
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
                <v-list-item-subtitle
                  class="text-subtitle-1 wrap-text"
                  style="line-height: 23px"
                >
                  <p>
                    Not at all, a SOWerk profile only takes 10 minuets to setup.
                  </p>
                  <p>
                    With only a click or two on your computer or mobile device
                    you can use your SOWerk Profile to apply for approved vendor
                    programs
                  </p>
                  <p class="mb-0">
                    Automatic Updates: When you become an approved vendor for a
                    company we automaticly display it on your profile.
                  </p>
                </v-list-item-subtitle>
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
                <v-list-item-subtitle
                  class="text-subtitle-1 wrap-text"
                  style="line-height: 23px"
                >
                  <p>
                    Unlike other websites, SOWerk service providers receive
                    communications from their approved vendor programs, direct
                    leads, or new businesses inviting them to apply for approved
                    vendor program.
                  </p>
                  <p class="mb-0">
                    Being on SOWerk and promoting your business is free. If you
                    wish to apply for an approved vendor program or utilize
                    other SOWerk features we offer a few packages. Details can
                    be found on our Approved Provider Pricing page.
                  </p>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-btn
            class="text-uppercase primary mx-auto text-md-body-2 text-sm-body-2"
            x-large
            :width="$vuetify.breakpoint.mdAndUp ? '50%' : '70%'"
            style="border-radius: 20px; font-weight: bold"
            to="/landingpage/service-provider"
            >Service Provider - Learn More</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  name: 'OftenAskSP',
}
</script>

<style>
.wrap-text {
  -webkit-line-clamp: unset !important;
  overflow: visible !important;
  text-overflow: unset !important;
  white-space: unset !important;
  line-height: 1.5rem;
}
</style>
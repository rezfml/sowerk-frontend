<template>
  <v-container
      fluid
      class="d-flex align-center justify-center skew-topleft change-bcg"
      style="background: #EDEDED; padding-top: 280px; margin-top: -250px; padding-bottom: 150px;"
    >
      <v-row>
        <v-col v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
          <div style="width:100%;height:100%;" >
            <img style="width:100%;height:100%;" src="/ven-pricing-image-visual.png" alt="">
          </div>
        </v-col>

        <v-col v-else>
          <div style="width:100%;height:100%;" >
            <img style="width:100%;height:100%;" src="/ven-pricing-image-visual-mobile.png" alt="">
          </div>
        </v-col>
      </v-row>
      
      <!-- <v-row style="max-width: 95%;">
        <v-row class="justify-center flex-wrap: wrap"> -->

          <!-- SOWERK STARTER CARD -->
          <!-- <v-col cols="12" lg="2" md="3" class="pa-0 mx-auto d-flex">
            <v-card
              class="text-center pa-2 my-2 mx-1 mx-lg-0 flex-grow-1"
              style="border-radius: 24px; border-top: 45px solid #a61c00; border-left: 4px solid #a61c00; border-right: 4px solid #a61c00; border-bottom: 4px solid #a61c00;"
            >
              <v-card-text
                class="text-body-1 white--text font-weight-bold text-uppercase pa-0"
                style="margin-top:-40px;"
                >Package 1</v-card-text
              >
              <v-card-text style="font-weight:700;font-size:1.2rem;color:black;">
                SOWERK STARTER
              </v-card-text>                  
              <p
                class="text-md-h3 font-weight-normal pt-8 mb-0"
                style="color: #a61c00; line-height:.4em; font-size: 40px"
              >
                $8.33<span style="font-size: 12px;">/monthly</span>
              </p>
              <p class="text-caption">Or $100.00 Per Year</p>
              <v-divider></v-divider>
              <v-card-subtitle
                class="black--text font-weight-bold text-uppercase"
                >Package Includes</v-card-subtitle
              >
              <v-col cols="12" class="pt-1" style="max-width: 100%;">
                <ul
                  style="list-style: none; text-align: center; font-size: 15px; padding-left: 0; color:#666666; line-height: 3em;"
                >
                  <li><span style="color: #a61c00">3</span> User Licenses</li>
                  <li>
                    <span style="color: #a61c00">5</span> Business Connections
                    <p class="text-caption" style="color:darkred;">($20.00 Per Connection Annually)</p>
                  </li>
                  <li>
                    <span style="color: #a61c00">$1.50</span> Per Additional
                    Connection(s)
                  </li>
                  <li>SOWerk Profile(Free to Apply!)</li>
                  <li>Unlimited Channels</li>
                  <li>Listed in Vendor Directory</li>
                  <li>Customer Management Tools</li>
                  <li>Potential Vendor Listings</li>
                </ul>
              </v-col>
            </v-card>
          </v-col> -->

          <!-- SOWERK ADVANCED CARD -->
          <!-- <v-col cols="12" lg="2" md="3" class="pa-0 mx-auto d-flex">
            <v-card
              class="text-center pa-2 my-2 mx-1 mx-lg-0 flex-grow-1"
              style="border-radius: 24px; border-top: 45px solid #a61c00; border-left: 4px solid #a61c00; border-right: 4px solid #a61c00; border-bottom: 4px solid #a61c00;"
            >
              <v-card-text
                class="text-body-1 white--text font-weight-bold text-uppercase pa-0"
                style="margin-top:-40px;"
                >Package 2</v-card-text
              >
              <v-card-text style="font-weight:700;font-size:1.2rem;color:black;">
                SOWERK ADVANCED
              </v-card-text>                  
              <p
                class="text-md-h3 font-weight-normal pt-8 mb-0"
                style="color: #a61c00; line-height:.4em; font-size: 40px"
              >
                $20.83<span style="font-size: 12px;">/monthly</span>
              </p>
              <p class="text-caption">Or $250.00 Per Year</p>
              <v-divider></v-divider>
              <v-card-subtitle
                class="black--text font-weight-bold text-uppercase"
                >Package Includes</v-card-subtitle
              >
              <v-col cols="12" class="pt-1" style="max-width: 100%;">
                <ul
                  style="list-style: none; text-align: center; font-size: 15px; padding-left: 0; color:#666666; line-height: 3em;"
                >
                  <li><span style="color: #a61c00">5</span> User Licenses</li>
                  <li>
                    <span style="color: #a61c00">20</span> Business Connections
                    <p class="text-caption" style="color:darkred">($12.50 Per Connection Annually)</p>
                  </li>
                  <li>
                    <span style="color: #a61c00">$1.00</span> Per Additional
                    Connection(s)
                  </li>
                  <li>SOWerk Profile(Free to Apply!)</li>
                  <li>Unlimited Channels</li>
                  <li>Listed in Vendor Directory</li>
                  <li>Customer Management Tools</li>
                  <li>Potential Vendor Listings</li>
                </ul>
              </v-col>
            </v-card>
          </v-col> -->

          <!-- SOWERK PRO CARD -->
          <!-- <v-col cols="12" lg="2" md="3" class="pa-0 mx-auto d-flex">
            <v-card
              class="text-center pa-2 my-2 mx-1 mx-lg-0 flex-grow-1"
              style="border-radius: 24px; border-top: 45px solid #a61c00; border-left: 4px solid #a61c00; border-right: 4px solid #a61c00; border-bottom: 4px solid #a61c00;"
            >
              <v-card-text
                class="text-body-1 white--text font-weight-bold text-uppercase pa-0"
                style="margin-top:-40px;"
                >Package 3</v-card-text
              >
              <v-card-text style="font-weight:700;font-size:1.2rem;color:black;">
                SOWERK PRO
              </v-card-text>                  
              <p
                class="text-md-h3 font-weight-normal pt-8 mb-0"
                style="color: #a61c00; line-height:.4em;font-size: 40px"
              >
                $41.67<span style="font-size: 12px;">/monthly</span>
              </p>
              <p class="text-caption">Or $500.00 Per Year</p>
              <v-divider></v-divider>
              <v-card-subtitle
                class="black--text font-weight-bold text-uppercase"
                >Package Includes</v-card-subtitle
              >
              <v-col cols="12" class="pt-1" style="max-width: 100%;">
                <ul
                  style="list-style: none; text-align: center; font-size: 15px; padding-left: 0; color:#666666; line-height: 3em;"
                >
                  <li><span style="color: #a61c00">10</span> User Licenses</li>
                  <li>
                    <span style="color: #a61c00">50</span> Business Connections
                    <p class="text-caption" style="color:darkred">($10.00 Per Connection Annually)</p>
                  </li>
                  <li>
                    <span style="color: #a61c00">$0.75</span> Per Additional
                    Connection(s)
                  </li>
                  <li>SOWerk Profile(Free to Apply!)</li>
                  <li>Unlimited Channels</li>
                  <li>Listed in Vendor Directory</li>
                  <li>Customer Management Tools</li>
                  <li>Potential Vendor Listings</li>
                </ul>
              </v-col>
            </v-card>
          </v-col> -->

          <!-- SOWERK NATIONAL CARD -->
          <!-- <v-col
            cols="12"
            lg="2"
            md="3"
            class="pa-0 mx-auto d-flex"
            style="width: 20%"
          >
            <v-card
              class="text-center pa-2 my-2 mx-1 mx-lg-0 flex-grow-1"
              style="border-radius: 24px; border-top: 45px solid #a61c00; border-left: 4px solid #a61c00; border-right: 4px solid #a61c00; border-bottom: 4px solid #a61c00;"
            >
              <v-card-text
                class="text-body-1 white--text font-weight-bold text-uppercase pa-0"
                style="margin-top:-40px;"
                >Package 4</v-card-text
              >
              <v-card-text style="font-weight:700;font-size:1.2rem;color:black;">
                SOWERK NATIONAL
              </v-card-text>              
              <p
                class="text-md-h3 font-weight-normal pt-8 mb-0"
                style="color: #a61c00; line-height:.4em; font-size: 40px"
              >
                $125.00<span style="font-size: 12px;">/monthly</span>
              </p>
              <p class="text-caption">Or $1,500.00 Per Year</p>
              <v-divider></v-divider>
              <v-card-subtitle
                class="black--text font-weight-bold text-uppercase"
                >Package Includes</v-card-subtitle
              >
              <v-col cols="12" class="pt-1" style="max-width: 100%;">
                <ul
                  style="list-style: none; text-align: center; font-size: 15px; padding-left: 0; color:#666666; line-height: 3em;"
                >
                  <li><span style="color: #a61c00">15</span> User Licenses</li>
                  <li>
                    <span style="color: #a61c00">250</span> Business Connections
                    <p class="text-caption" style="color:darkred">($6.00 Per Connection Annually)</p>
                  </li>
                  <li>
                    <span style="color: #a61c00">$0.50</span> Per Additional
                    Connection(s)
                  </li>
                  <li>SOWerk Profile(Free to Apply!)</li>
                  <li>Unlimited Channels</li>
                  <li>Listed in Vendor Directory</li>
                  <li>Customer Management Tools</li>
                  <li>Potential Vendor Listings</li>
                </ul>
              </v-col>
            </v-card>
          </v-col> -->
        <!-- </v-row> -->

        <!-- SOWERK ENTERPRISE -->
        <!-- <v-row>
          <v-col cols="12" class="pa-0 my-6">
            <v-card
              class="text-center"
              style="border-radius: 24px; border-top: 45px solid #a61c00; border-left: 4px solid #a61c00; border-right: 4px solid #a61c00; border-bottom: 4px solid #a61c00;"
            >
              <v-card-text
                class="text-body-1 white--text font-weight-bold text-uppercase"
                style="margin-top:-48px;"
                >Package 5</v-card-text
              >
              <v-card-text style="font-weight:800;font-size:1.8rem;color:black;">
                SOWERK ENTERPRISE
              </v-card-text>
              <p class="text-md-h3 pt-6" style="color: #a61c00; font-size: 35px; font-weight: 500">
                CUSTOM RATE
              </p>
              <v-divider></v-divider>
              <v-card-text class="black--text"
                >Does you’re business require a special connection and pricing
                rate? At SOWerk, we are happy to work with you to make sure we
                develop a perfect plan based around your needs.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row> -->
      <!-- </v-row> -->
    </v-container>
</template>

<script>
export default {
    name: 'PricingLevels'
}
</script>

<style scoped>

</style>
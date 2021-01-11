<template>
      <v-container
      fluid
      text-center
      pb-8
      style="background: linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(129,22,0,1) 100%); display: flex; flex-direction: column; justify-content: center; align-items: center; box-sizing: border-box;position:relative;z-index:1;"
      class="skew-top"
    >
      <v-row>
        <v-card style="background-color:black;border-radius:3%;margin-left:1%">
          <iframe src="https://player.vimeo.com/video/498208221" width="1400" height="700" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </v-card>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="12" class="pa-0">
          <p v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm"
            class="mobile-title text-lg-h3 text-sm-h4 font-weight-bold white--text pt-10 pb-2 pb-sm-10"
            style="word-break: break-word; opacity: .8; font-size: 30px; width: 120%;margin-left:-10%;"
          >
            Businesses & Vendors Come Together On SOWerk
          </p>
          <v-container v-else>
          <p 
            class=" text-lg-h3 text-sm-h6 font-weight-bold white--text pt-10 pb-2"
            style=" opacity: .8; font-size: 28px; width: 100%;margin:auto !important;min-width:100% !important;font-weight:700"
          >
            Businesses & Vendors 
          </p>
          <p class=" text-lg-h3 text-sm-h6 font-weight-bold white--text pb-2 pb-sm-10 mx-0 px-0 d-flex align-center"
            style=" opacity: .8; font-size: 24px; width: 110%;margin:auto !important font-weight:700">Come Together On SOWerk</p>
          </v-container>
        </v-col>
      </v-row>

      <v-row
        class="justify-space-around"
        style="width: 100%; max-width: 1400px;"
      >
        <!-- CARD 1 -->
        <v-col cols="12" sm="10" md="5" class="d-flex px-0 px-sm-3">
          <v-card
            align="center"
            class="ma-0 flex-grow-1 card-link-outer"
            style="border-radius: 20px; width: 100% "
          >
            <v-card-title class="px-0">
              <p style="width: 100%;">Local & National Businesses</p>
            </v-card-title>

            <v-card-text style="flex-grow: 1">
              <v-row justify-center>
                <v-col>
                  <v-img
                    src="https://sowerk-images.s3.us-east-2.amazonaws.com/urbancopy_1.png"
                    style="object-fit: contain; width: 60%;"
                  ></v-img>
                </v-col>

                <v-col cols="12" class="py-2">
                  <v-card-title class="pa-0">
                    <p
                      style="word-break: break-word; color: black; width: 100%"
                    >
                      Find, Vet, & Manage Vendors
                    </p>
                  </v-card-title>
                </v-col>

                <v-col cols="12">
                  <p
                    class="text-center"
                    style="max-width: 80%; width: 80%; font-size: 17px; font-weight: 500"
                  >
                    Our business-to-business platform provides companies the tools to efficiently identify, vet,
                    and manage 3rd party providers for each of their locations.<br/>
                    <span style="font-weight: 800"
                      >SOWerk is FREE & Powerful!</span
                    >
                  </p>
                </v-col>

                <v-col cols="12">
                  <v-divider
                    class="my-1"
                    style="width: 80%; border: .8px solid #A61C00"
                  ></v-divider>
                </v-col>

                <v-col cols="12" class="py-2">
                  <v-card-title class="py-0">
                    <p
                      style="word-break: break-word; color: black; width: 100%; line-height: 1.25em"
                    >
                      Any Business Type
                    </p>
                  </v-card-title>
                </v-col>

                <v-col cols="12" class="pt-1" style="max-width: 100%;">
                  <ul

                    style="column-count: 2; list-style: none; text-align: left; font-size: 17px; font-weight: 500"
                    class="pl-12 pl-sm-12 list1"
                  >
                    <li>- Retail & Hospitality Chains</li>
                    <li>- Commercial Real Estate</li>
                    <li>- Manufacturing Facilities</li>
                    <li>- Warehouse & Distribution</li>
                    <li>- Governments</li>
                    <li>- Restaurant Groups</li>
                    <li>- School Districts</li>
                    <li>- Residential Investments</li>
                    <li>- Military</li>

                  </ul>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
               <v-col cols="12" class="d-flex">
                  <v-btn
                    style="color: white; background:#A61C00; border-radius: 16px; display: flex;"
                    block
                    large
                    class="flex-grow-1"
                    to="/landingpage/join-product-landing"
                    >Businesses - Learn More</v-btn
                  >
                </v-col>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- ARROWS - hidden on mobile for now-->
        <v-col
          cols="2"
          md="2"
          class="justify-center pa-sm-0 d-sm-none d-none d-md-flex"
          position="center"
        >
          <v-icon size="16vw" color="white">mdi-swap-horizontal</v-icon>
        </v-col>

        <!-- CARD 2 -->
        <v-col cols="12" sm="10" md="5" class="d-flex px-0 px-sm-3">
          <v-card
            align="center"
            class="ma-0 flex-grow-1 card-link-outer"
            style="border-radius: 20px;"
          >
            <v-card-title class="px-0">
              <p style="width: 100%">Service & Product Vendors</p>
            </v-card-title>

            <v-card-text style="flex-grow: 1">
              <v-row
                style="display: flex; flex-direction: column; flex-wrap: nowrap"
              >
                <v-col>
                  <v-img
                    src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png"
                    style="object-fit: contain; width: 60%;"
                  ></v-img>
                </v-col>

                <v-col cols="12" class="py-2">
                  <v-card-title class="py-0">
                    <p
                      style="word-break: break-word; color: black; width: 100%; line-height: 1.25em"
                    >
                      Approved Local & National Vendors
                    </p>
                  </v-card-title>
                </v-col>

                <v-col cols="12">
                  <p
                    class="text-center"
                    style="max-width: 80%; width: 80%; font-size: 17px; font-weight: 500"
                  >
                    SOWerk makes it possible for you to
                    become an approved vendor, receive job/project requests, and
                    communicate with business owners.<br/>
                    <span style="font-weight: 800"
                      >It's FREE To Get Started!</span
                    >
                  </p>
                </v-col>

                <v-col cols="12">
                  <v-divider
                    class="my-1"
                    style="width: 80%; border: .8px solid #A61C00"
                  ></v-divider>
                </v-col>

                <v-col cols="12" class="pa-0">
                  <v-card-title class="py-0">
                    <p
                      style="word-break: break-word; color: black; width: 100%; line-height: 1.25em"
                    >
                      Tools For Every Service Provider
                    </p>
                  </v-card-title>
                </v-col>

                <v-col cols="12" class="pt-1" style="max-width: 100%;">
                  <ul
                    style="column-count: 2; list-style: none; text-align: left; font-weight: 500; font-size: 17px;"
                    class="pl-10 pl-sm-12"
                  >
                    <li>- Electrician</li>
                    <li>- Merchandise</li>
                    <li>- HVAC</li>
                    <li>- Plumber</li>
                    <li>- Landscaper</li>
                    <li>- Printing</li>
                    <li>- Paving</li>
                    <li>- Excavation</li>
                    <li>- Pest Control</li>
                    <li>- Waste</li>
                    <li>- Engineer</li>
                    <li>- Facility Resources</li>
                    <li>- Contractor</li>
                    <li>- Glass & Window</li>
                    <li>- Environmental</li>
                    <li>- Survey</li>
                    <li>- Cleaning</li>
                    <li>- Event</li>
                    <li>- Security</li>
                    <li>- Consultant</li>
                  </ul>
                </v-col>
                <v-row class="d-flex justify-end">
                </v-row>
              </v-row>
            </v-card-text>
            <v-card-actions>
               <v-col cols="12 mt-4" align-self-end >
                  <v-btn
                    style="color: white; background:#A61C00; border-radius: 16px"
                    block
                    large
                    to="/landingpage/join-service-landing"

                    >Vendors - Learn More</v-btn
                  >
                </v-col>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'PFandVComeTogether'
}
</script>

<style scoped>
.skew-top {
  position: relative;
  z-index: 30;
}

.skew-top:before {
  position: absolute;
  content: '';
  background: linear-gradient(
    180deg,
    rgba(166, 28, 0, 1) 35%,
    rgba(129, 22, 0, 1) 100%
  );
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -20;
  transform-origin: top left;
  transform: skewY(-2deg);
}

.card-link-outer {
  display: flex;
  flex-direction: column;
}

@media (max-width: 680px) {
  .list1 {
    column-count: 1 !important;
  } 
}

@media(max-width: 375px) {
    .mobile-title {
      font-size: 28px !important;
    }

    p.text-center {
      width: 90% !important;
      max-width: 90% !important;
    }
  }
</style>
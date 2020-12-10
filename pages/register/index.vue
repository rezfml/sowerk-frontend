<template>
  <v-container class="d-flex flex-column pa-0 main-container" style="max-width: none!important; background-image: url('https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'); background-size: cover; background-position: center;">
    <v-row class="d-flex flex-column justify-center pb-6" style="height:auto; background-color: rgba(0,0,0,0.5);padding-top:100px;" v-if="!$vuetify.breakpoint.large">
      <v-card width="100%" max-width="1000px" color="grey" class="darken-4 mx-auto px-6 pt-12" style="border-radius: 20px;">
        <v-card-title class="primary mx-auto" style="width: 80%; position: absolute; top: -30px; left: 10%; border-radius: 20px;"><p class="mx-auto mb-0 text-center white--text">Select Account Type</p></v-card-title>
        <v-card-text>
          <v-row v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm ">
            <v-col cols="12" md="6" style="max-width:45%;margin:2.5%">
              <a href="../register/property-manager" text style="width: 100%; text-decoration: none !important;">
                <v-card rounded style="box-shadow:0 0 0 5px #A61C00; border-radius: 30px;">
                  <v-card-title><p class="mx-auto text-center">Local & National Businesses</p></v-card-title>
                  <v-card-text style="border-radius: 30px;">
                    <v-row>
                      <v-col class="mx-auto text-center" cols="12">
                        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/urbancopy_1.png" style="height:16vh;"alt="property and facility manager Icon">
                      </v-col>

                      <v-col cols="12">
                        <p class="text-center mx-auto mt-4" style="max-width: 350px; font-size:2vh; line-height: 1.75rem;">If you have one property or thousands of assets and would like to manage approved vendors for services, supplies, equipment, or merchandise register here for a business account.</p>
                      </v-col>

                      <v-col cols="12">
                        <v-divider class="my-4"></v-divider>
                      </v-col>

                      <v-col cols="12">
                        <ul>
                          <li>Retail & Hospitality Chains</li>
                          <li>Commercial Real Estate Properties</li>
                          <li>Manufacturing Facilities</li>
                          <li>Warehouse & Distribution</li>
                          <li>Governments</li>
                          <li>Residential & Vacation Investments</li>
                        </ul>
                      </v-col>

                      <v-col cols="12">
                        <v-btn block large color="primary" style="border-radius: 16px;" to="/register/property-manager">Register Now</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </a>
            </v-col>

            <v-col cols="12" md="6" style="max-width:45%;margin:2.5%">
              <a href="../register/provider" text style="width: 100%; text-decoration: none !important;">
                <v-card rounded style="box-shadow:0 0 0 5px #A61C00; border-radius: 30px;">
                  <v-card-title><p class="mx-auto text-center">Service & Product Vendors</p></v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col class="mx-auto text-center" cols="12">
                        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png" style="height:16vh;" alt="Service provider Icon">
                      </v-col>

                      <v-col cols="12">
                        <p class="text-center mx-auto mt-4" style="max-width: 350px; font-size:2vh; line-height: 1.75rem;">If you provide a service, supply businesses with supplies/equipment, or even wholesale merchandise register for SOWerk here.</p>
                        <br/>
                      </v-col>

                      <v-col cols="12">
                        <v-divider class="my-4"></v-divider>
                      </v-col>

                      <v-col cols="12">
                        <ul style="column-count: 2;">
                          <li>Electrician</li>
                          <li>HVAC</li>
                          <li>Plumber</li>
                          <li>Landscaper</li>
                          <li>Printing</li>
                          <li>Paving</li>
                          <li>Excavation</li>
                          <li>Equipment Rental</li>
                          <li>Pest Control</li>
                          <li>Waste</li>
                          <li>Engineer</li>
                          <li>Contractor</li>
                        </ul>
                      </v-col>

                      <v-col cols="12">
                        <v-btn block large color="primary" style="border-radius: 16px;" to="/register/provider">Register Now</v-btn>
                      </v-col>

                    </v-row>
                  </v-card-text>
                </v-card>
              </a>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-row >
              <v-col cols="12" md="12" style="max-width:90%;margin:3%;padding-left:5%;">
                <a href="../register/property-manager" text style="width: 100%; text-decoration: none !important;">
                  <v-card rounded style="box-shadow:0 0 0 5px #A61C00; border-radius: 30px;">
                    <v-card-title><p class="mx-auto text-center">Local & National Businesses</p></v-card-title>
                    <v-card-text style="border-radius: 30px;">
                      <v-row>
                        <v-col class="mx-auto text-center" cols="12">
                          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/urbancopy_1.png" style="height:16vh;"alt="property and facility manager Icon">
                        </v-col>

                        <v-col cols="12">
                          <p class="text-center mx-auto mt-4" style="font-size:2vh; line-height: 1.75rem;">If you have one property or thousands of assets and would like to manage approved vendors for services, supplies, equipment, or merchandise register here for a business account..</p>
                        </v-col>

                        <v-col cols="12">
                          <v-divider class="my-4"></v-divider>
                        </v-col>

                        <v-col cols="12">
                          <ul>
                            <li>Retail & Hospitality Chains</li>
                            <li>Commercial Real Estate Properties</li>
                            <li>Manufacturing Facilities</li>
                            <li>Warehouse & Distribution</li>
                            <li>Governments</li>
                            <li>Residential & Vacation Investments</li>
                          </ul>
                        </v-col>

                        <v-col cols="12">
                          <v-btn block large color="primary" style="border-radius: 16px;" to="/register/property-manager">Register Now</v-btn>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </a>
              </v-col>
            </v-row>

            <v-row >
              <v-col cols="12" md="12" style="max-width:90%;margin:3%;padding-left:5%;">
                <a href="../register/provider" text style="width: 100%; text-decoration: none !important;">
                  <v-card rounded style="box-shadow:0 0 0 5px #A61C00; border-radius: 30px;">
                    <v-card-title><p class="mx-auto text-center">Service & Product Vendors</p></v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col class="mx-auto text-center" cols="12">
                          <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png" style="height:16vh;" alt="Service provider Icon">
                        </v-col>

                        <v-col cols="12">
                          <p class="text-center mx-auto mt-4" style="font-size:2vh; line-height: 1.75rem;">If you provide a service, supply businesses with supplies/equipment, or even wholesale merchandise register for SOWerk here.</p>
                        </v-col>

                        <v-col cols="12">
                          <v-divider class="my-4"></v-divider>
                        </v-col>

                        <v-col cols="12">
                          <ul style="column-count: 2;">
                            <li>Electrician</li>
                            <li>HVAC</li>
                            <li>Plumber</li>
                            <li>Landscaper</li>
                            <li>Printing</li>
                            <li>Paving</li>
                            <li>Excavation</li>
                            <li>Equipment Rental</li>
                            <li>Pest Control</li>
                            <li>Waste</li>
                            <li>Engineer</li>
                            <li>Contractor</li>
                          </ul>
                        </v-col>

                        <v-col cols="12">
                          <v-btn block large color="primary" style="border-radius: 16px;" to="/register/provider">Register Now</v-btn>
                        </v-col>

                      </v-row>
                    </v-card-text>
                  </v-card>
                </a>
              </v-col>
            </v-row>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <v-row class="d-flex flex-column justify-center" style="height: 100vh; background-color: rgba(0,0,0,0.5);" v-else>
      <v-card width="100%" max-width="1000px" color="grey" class="darken-4 mx-auto px-6 pt-12" style="border-radius: 20px;">
        <v-card-title class="primary mx-auto" style="width: 80%; position: absolute; top: -30px; left: 10%; border-radius: 20px;"><p class="mx-auto mb-0 text-center white--text" style="font-size: 24px;">Register - Select Account Type</p></v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6" >
              <a href="../register/property-manager" text style="width: 100%; text-decoration: none !important;">
                <v-card rounded style="border: 5px solid #A61C00; border-radius: 20px;">
                  <v-card-title><p class="mx-auto text-center">Local & National Businesses</p></v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col class="mx-auto text-center" cols="12">
                        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/urbancopy_1.png" style="height:16vh;" alt="property and facility manager Icon">
                      </v-col>

                      <v-col cols="12">
                        <p class="text-center mx-auto mt-4" style="max-width: 350px">If you have one property or thousands of assets and would like to manage approved vendors for services, supplies, equipment, or merchandise register here for a business account.</p>
                      </v-col>

                      <v-col cols="12">
                        <v-divider class="my-4"></v-divider>
                      </v-col>

                      <v-col cols="12" style="font-size:1.25em">
                        <ul>
                          <li>Retail & Hospitality Chains</li>
                          <li>Commercial Real Estate Properties</li>
                          <li>Manufacturing Facilities</li>
                          <li>Warehouse & Distribution</li>
                          <li>Governments</li>
                          <li>Residential & Vacation Investments</li>
                        </ul>
                      </v-col>

                      <v-col cols="12">
                        <v-btn block x-large color="primary" style="border-radius: 16px;" to="/register/property-manager">Register Now</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </a>
            </v-col>

            <v-col cols="12" md="6">
              <a href="../register/provider" text style="width: 100%; text-decoration: none !important;">
                <v-card rounded style="border: 5px solid #A61C00; border-radius: 20px;">
                  <v-card-title><p class="mx-auto text-center">Service & Product Vendors</p></v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col class="mx-auto text-center" cols="12">
                        <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png" style="height:16vh;" alt="Service provider Icon">
                      </v-col>

                      <v-col cols="12">
                        <p class="text-center mx-auto mt-4" style="max-width: 350px;">If you provide a service, supply businesses with supplies/equipment, or even wholesale merchandise register for SOWerk here.</p>
                      </v-col>

                      <v-col cols="12">
                        <v-divider class="my-4"></v-divider>
                      </v-col>

                      <v-col cols="12">
                        <ul style="column-count: 2;">
                          <li>Electrician</li>
                          <li>HVAC</li>
                          <li>Plumber</li>
                          <li>Landscaper</li>
                          <li>Printing</li>
                          <li>Paving</li>
                          <li>Excavation</li>
                          <li>Equipment Rental</li>
                          <li>Pest Control</li>
                          <li>Waste</li>
                          <li>Engineer</li>
                          <li>Contractor</li>
                        </ul>
                      </v-col>

                      <v-col cols="12">
                        <v-btn block x-large color="primary" style="border-radius: 16px;" to="/register/provider">Register Now</v-btn>
                      </v-col>

                    </v-row>
                  </v-card-text>
                </v-card>
              </a>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'index',
    layout: 'fullwidth',
  }
</script>

<style scoped>
  .main-container {
    min-height: calc(100vh - 36px);
  }
  li:before{
    content:'-';
    font-weight: bold;
    margin-right:1%;
  }
  ul{
    list-style: none;
  }
  .icon{
    max-width: 2vh;
    width:60px;
  }
  .theme--light.v-divider {
    border-color: rgb(166, 28, 0) !important;
}

</style>

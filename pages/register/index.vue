<template>
  <v-container class="d-flex flex-column pa-0" style="min-height: 1200px; max-width: none!important; background-image: url('https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'); background-size: cover; background-position: center;">
    <v-row class="d-flex flex-column justify-center" style="height: 100vh; background-color: rgba(0,0,0,0.5);">
      <v-card width="100%" max-width="1000px" color="grey" class="darken-4 mx-auto px-6 pt-12" style="border-radius: 20px;">
        <v-card-title class="primary mx-auto" style="width: 80%; position: absolute; top: -30px; left: 10%; border-radius: 20px;"><p class="mx-auto mb-0 text-center white--text" style="font-size: 24px;">Register - Select Account Type</p></v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6">
              <v-card rounded style="border: 5px solid #A61C00; border-radius: 20px;">
                <v-card-title><p class="mx-auto text-center">Property & Facility Managers</p></v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <v-icon size="150" color="primary" class="mx-auto text-center" style="width: 100%;">domain</v-icon>
                    </v-col>

                    <v-col cols="12">
                      <p class="text-center mx-auto mt-4" style="max-width: 350px">If you have one property or thousands of assets and would like to manage approved vendors.</p>
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
                        <li>Restaurant Groups</li>
                      </ul>
                    </v-col>

                    <v-col cols="12">
                      <v-btn block x-large color="primary" style="border-radius: 16px;" to="/register/property-manager">Register Now</v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>



            <v-col cols="12" md="6">
              <v-card rounded style="border: 5px solid #A61C00; border-radius: 20px;">
                <v-card-title><p class="mx-auto text-center">Service Providers</p></v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <v-icon size="150" color="primary" class="mx-auto text-center" style="width: 100%;">mdi-account-hard-hat</v-icon>
                    </v-col>

                    <v-col cols="12">
                      <p class="text-center mx-auto mt-4 text-h1" style="max-width: 350px">If you have one property or thousands of assets and would like to manage approved vendors.</p>
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

<style scoped lang="scss">
</style>

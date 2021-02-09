 <template>

  <!-- BREAKPOINT - EXTRA-LARGE - BREAK @ 1904+ pixels ------------------------------------------------------------>
  <div v-if="$vuetify.breakpoint.xl" style="width:100%">
    <v-app :class="company.company_type === 'false' ? 'grey darken-3' : 'grey lighten-3'">
      <v-container class="px-0" style="max-width: 95%;">

        <!-- NOT SUPER USER -->
        <transition name="slide-fade">
          <!-- VENDOR USER -->
          <v-card class="my-4 flex-row justify-space-between align-center mx-0" v-if="company.company_type === 'false'">
            <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto; background-color: #707070">

              <v-col cols="4" style="color:white;width:100%;text-align:center;">
                <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;color:white">SOWERK 101</h1>
              </v-col>

              <v-col cols="4" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
                <p style="font-size:1.1rem">Watch our short video to learn about Account Channels and why they are important to your SOWerk Account.</p>
              </v-col>

              <!-- VENDOR CHANNELS VIDEO -->
              <v-col cols="4" style="width:100%;text-align:center;">
                <v-btn @click="showVideoCard" color="white" outlined style="width: 80%; border-radius: 20px;" class="py-8">
                  <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;" class="text-no-wrap">
                    WATCH NOW <br/> -Account Channels-
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>

          <!-- BUSINESS USER -->
          <v-card class="my-4 flex-row justify-space-between align-center mx-0" v-if="company.company_type === 'true'">
            <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto; background-color: #707070">

              <v-col cols="3" style="color:white;width:100%;text-align:center;">
                <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;color:white">SOWERK 101</h1>
              </v-col>

              <v-col cols="3" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
                <p style="font-size:1.1rem">Watch our short video to learn about Account Channels and why they are important to your SOWerk Account.</p>
              </v-col>

              <!-- BUSINESS CHANNELS VIDEO -->
              <v-col cols="6" style="width:100%;text-align:center;">
                <v-btn @click="showVideoCard" color="white" outlined style="width: 80%; border-radius: 20px;" class="py-8">
                  <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">
                    WATCH NOW -Account Channels-
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </transition>

        <!-- VENDOR USER -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="height:600px;width:100%;background-color:white;border-radius:1%;" v-if="showVideo === true && company.company_type === 'false'">
            <div style="border-radius:1%;">
              <iframe src="https://player.vimeo.com/video/495537837" allowfullscreen frameborder="0" style="width:900px;height:600px;margin-left:22%;border-radius:3%;">
              </iframe>
            </div>
          </v-card>
        </transition>

        <!-- BUSINESS USER -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="height:600px;width:100%;background-color:#404040;border-radius:1%;" v-if="showVideo === true && company.company_type === 'true'">
            <div style="border-radius:1%;">
              <iframe src="https://player.vimeo.com/video/488987561" allowfullscreen frameborder="0" style="width:75vw;height:600px;border-radius:3%;margin-left:3%;">
              </iframe>
            </div>
          </v-card>
        </transition>

        <!-- COUNT CHANNELS BANNER if Business -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="width: 100%;background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="this.companyType === true">
            <v-row style="width:100%;height:auto" class="d-flex flex align-center">
              <v-col cols="7" style="height:auto;">
                <v-img height="400px" src="/SoWork Logos with Icons-162.png"></v-img>
              </v-col>

              <v-col cols="5" class="d-flex flex-column justify-center" style="height:auto">
                <v-row>
                  <v-col cols="12">
                    <h2 style="color:darkred;font-size:1.5rem">What Are Account Channels?</h2>
                    <p class="mt-4" style="font-size:1rem">Channel(s) here on SOWerk are the backbone of your account! Think of Channels as any company facility, division or department, or even a large project where you will want to specifically find, vet, and manage Vendors. You can set up as many Channels as you like and assign users within your company account to manage a Channel. A good rule of thumb is to establish Channels based on how you currently segment Vendor management or how you would like to, going forward.
                    </p>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3" style="text-align:center;">
                    <v-img src="/building.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                    <h2 style="font-weight:900;font-size:1.1rem;">Locations</h2>
                  </v-col>

                  <v-col cols="3" style="text-align:center">
                    <v-img src="/digging.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                    <h2 style="font-weight:900;font-size:1.1rem;">Major Projects</h2>
                  </v-col>

                  <v-col cols="3" style="text-align:center">
                    <v-img src="/connection.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                    <h2 style="font-weight:900;font-size:1.1rem;">Departments</h2>
                  </v-col>

                  <v-col cols="3" style="text-align:center">
                    <v-img src="/business-and-finance.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                    <h2 style="font-weight:900;font-size:1.1rem;">Revenue Streams</h2>
                  </v-col>
                </v-row>

                <v-row>
                  <v-btn
                    style="background: linear-gradient(to right, #A61C00, #741502); width:100%;border-radius:8px"
                    large
                    outlined
                    color="white"
                    to="../../dashboard/channels/add"
                  >Add Another Channel - Click Here!</v-btn>
                </v-row>

              </v-col>
            </v-row>
          </v-card>
        </transition>

        <!-- ACCOUNT CHANNELS BANNER if Vendor -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="width: 100%;background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="this.companyType === false">
            <v-row style="width:100%;height:auto" class="d-flex flex align-center">
              <v-col cols="6" style="height:auto;">
                <v-img height="400px" src="/SoWork Logos with Icons-162.png"></v-img>
              </v-col>

              <v-col cols="5" class="d-flex flex-column justify-center" style="height:auto">
                <v-row>
                  <v-col cols="12">
                    <h2 style="color:darkred;font-size:1.5rem">What Are Account Channels?</h2>
                    <p class="mt-4" style="font-size:1rem">Channel(s) here on SOWerk are the backbone of your account! They can represent different areas or aspects of your business and how you serve your Customers.
                    </p>
                    <p>It's okay to have just one Channel, but you could have a Channel for service and another for supply, Channels for different locations, or even different Channels for separate product lines. The right Channel structure can help you organize Customer relationships.</p>
                  </v-col>
                </v-row>


                <v-row>
                  <v-col cols="4" style="text-align:center;">
                    <v-img src="/building.svg" style="max-width:75px;max-height:75px;margin-left:30%;"></v-img>
                    <h2 style="font-weight:900;font-size:1.1rem;">Locations</h2>
                  </v-col>

                  <v-col cols="4" style="text-align:center">
                    <v-img src="/connection.svg" style="max-width:75px;max-height:75px;margin-left:30%;"></v-img>
                    <h2 style="font-weight:900;font-size:1.1rem;">Departments</h2>
                  </v-col>

                  <v-col cols="4" style="text-align:center">
                    <v-img src="/business-and-finance.svg" style="max-width:75px;max-height:75px;margin-left:30%;"></v-img>
                    <h2 style="font-weight:900;font-size:1.1rem;">Revenue Streams</h2>
                  </v-col>
                </v-row>

                <v-row v-if="this.currentUser.is_superuser">
                  <v-btn
                    style="background: linear-gradient(to right, #A61C00, #741502); width:100%;border-radius:8px"
                    large
                    outlined
                    color="white"
                    to="../../dashboard/channels/add"
                  >Add Another Channel - Click Here!</v-btn>
                </v-row>



              </v-col>
            </v-row>
          </v-card>
        </transition>


            <!--
            This will be uncommented when FilterCard has a horizontal layout for md screens
            <v-row  v-else-if="$vuetify.breakpoint.md ">
              <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">
                <v-progress-circular
                  indeterminate
                  color="primary"
                  :size="50"
                ></v-progress-circular>
              </v-col>
              <v-row>
              <v-col cols="12">
                <FilterCard
                  title="Filter"
                  :filters="filters"
                ></FilterCard>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" class="d-flex flex-column justify-start">
                <FacilitiesCard
                  :title="'Your Facilities - ' + locations.length"
                  :items="locations"
                  :tableProperties="headers"
                  :viewAll="false"
                  slug="/dashboard/channels/"
                ></FacilitiesCard>
                <v-row class="d-flex justify-space-between align-center"style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">
                  <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Property?</p>
                  <v-btn
                    style=""
                    class="px-16 mr-16"
                    large
                    outlined
                    rounded
                    color="white"
                    to="add"
                  >Add Now</v-btn>
                </v-row>
              </v-col>
              </v-row>
            </v-row>
            -->

        <v-row>
            <!--        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">-->
            <!--          <v-progress-circular-->
            <!--            indeterminate-->
            <!--            color="primary"-->
            <!--            :size="50"-->
            <!--          ></v-progress-circular>-->
            <!--        </v-col>-->
            <!--        <v-col cols="3">-->
            <!--          <v-skeleton-loader-->
            <!--            v-if="!loading"-->
            <!--            type="article, article, article, actions"-->
            <!--            min-height="50vh"-->
            <!--          ></v-skeleton-loader>-->
            <!--          <transition name="slide-fade">-->
            <!--            <FilterCard-->
            <!--              title="Filter"-->
            <!--              :filters="filters"-->
            <!--              v-if="loading"-->
            <!--            ></FilterCard>-->
            <!--          </transition>-->
            <!--        </v-col>-->
          <v-col cols="12" class="d-flex flex-column justify-start">
            <v-skeleton-loader
              v-if="!loading"
              type="card-avatar, article, article, article, actions"
              min-height="50vh"
            ></v-skeleton-loader>
            <transition name="slide-fade">
              <FacilitiesCard
                :title="'Your Channels - ' + locations.length"
                :items="locations"
                :company="company"
                :tableProperties="headers"
                :viewAll="false"
                :viewLocation="viewLocation"
                slug="/dashboard/channels/"
                v-if="locationApproved && loading"
                :sowerkTags="sowerkTags"
                :locationFilterTags="locationFilterTags"
                :removeTag="removeTag"
                :filterItems="filterItems"
              ></FacilitiesCard>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>

  <!-- BREAKPOINT - LARGE - BREAK @ 1904-1264 pixels (1264 sidebar vanishes) -------------------------------------->
  <div v-else-if="$vuetify.breakpoint.lg" style="width:100%">
    <v-app :class="company.company_type === 'false' ? 'grey darken-3' : 'grey lighten-3'">
      <v-container class="px-0" style="max-width: 95%;">

        <!-- NOT SUPER USER -->
        <transition name="slide-fade">
          <!-- VENDOR USER -->
          <v-card class="my-4 flex-row justify-space-between align-center mx-0" v-if="company.company_type === 'false'">
            <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto; background-color: #707070">

              <v-col cols="4" style="color:white;width:100%;text-align:center;">
                <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;color:white">SOWERK 101</h1>
              </v-col>

              <v-col cols="4" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
                <p style="font-size:1.1rem">Watch our short video to learn about Account Channels and why they are important to your SOWerk Account.</p>
              </v-col>

              <!-- VENDOR CHANNELS VIDEO -->
              <v-col cols="4" style="width:100%;text-align:center;">
                <v-btn @click="showVideoCard" color="white" outlined style="width: 80%; border-radius: 20px;" class="py-8">
                  <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;" class="text-no-wrap">
                    WATCH NOW <br/> -Account Channels-
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>

          <!-- BUSINESS USER -->
          <v-card class="my-4 flex-row justify-space-between align-center mx-0" v-if="company.company_type === 'true'">
            <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto; background-color: #707070">

              <v-col cols="3" style="color:white;width:100%;text-align:center;">
                <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;color:white">SOWERK 101</h1>
              </v-col>

              <v-col cols="3" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
                <p style="font-size:1.1rem">Watch our short video to learn about Account Channels and why they are important to your SOWerk Account.</p>
              </v-col>

              <!-- BUSINESS CHANNELS VIDEO -->
              <v-col cols="6" style="width:100%;text-align:center;">
                <v-btn @click="showVideoCard" color="white" outlined style="width: 80%; border-radius: 20px;" class="py-8">
                  <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">
                    WATCH NOW -Account Channels-
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </transition>

        <!-- VENDOR USER -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="height:460px;width:100%;background-color:white;border-radius:1%;" v-if="showVideo === true && company.company_type === 'false'">
            <div style="border-radius:1%;display:flex; flex-direction:row;">
              <v-btn @click="showVideoCard" style="margin-left:2%;margin-top:2%;background-color:darkred;color:white;">X</v-btn>
              <iframe src="https://player.vimeo.com/video/495537837" allowfullscreen frameborder="0" style="width:75vw;height:450px;border-radius:3%;margin-top:5px;">
              </iframe>
            </div>
          </v-card>
        </transition>

        <!-- BUSINESS USER -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="height:460px;width:100%;background-color:#404040;border-radius:1%;" v-if="showVideo === true && company.company_type === 'true'">
            <div style="border-radius:1%;">
              <iframe src="https://player.vimeo.com/video/488987561" allowfullscreen frameborder="0" style="width:75vw;height:450px;border-radius:3%;margin-top:5px;">
              </iframe>
            </div>
          </v-card>
        </transition>

        <!-- COUNT CHANNELS BANNER if Business -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="width: 100%;background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="this.companyType === true">
            <v-row style="width:100%;height:auto" class="d-flex flex align-center">
              <v-col cols="6" style="height:auto;">
                <v-img height="400px" src="/SoWork Logos with Icons-162.png"></v-img>
              </v-col>

              <v-col cols="6" class="d-flex flex-column justify-center" style="height:auto">
                <v-row>
                  <v-col cols="12">
                    <h2 style="color:darkred;font-size:1.5rem">What Are Account Channels?</h2>
                    <p class="mt-4" style="font-size:1rem">Channel(s) here on SOWerk are the backbone of your account! Think of Channels as any company facility, division or department, or even a large project where you will want to specifically find, vet, and manage Vendors. You can set up as many Channels as you like and assign users within your company account to manage a Channel. A good rule of thumb is to establish Channels based on how you currently segment Vendor management or how you would like to, going forward.
                    </p>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3" style="text-align:center;">
                    <v-img src="/building.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                    <h2 style="font-weight:700;font-size:.9rem;word-break:break-word;white-space:pre-wrap;">Locations</h2>
                  </v-col>

                  <v-col cols="3" style="text-align:center;">
                    <v-img src="/digging.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                    <h2 style="font-weight:700;font-size:.9rem;word-break:break-word;white-space:pre-wrap;">Major Projects</h2>
                  </v-col>

                  <v-col cols="3" style="text-align:center;">
                    <v-img src="/connection.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                    <h2 style="font-weight:700;font-size:.9rem;word-break:break-word;white-space:pre-wrap;">Departments</h2>
                  </v-col>

                  <v-col cols="3" style="text-align:center;">
                    <v-img src="/business-and-finance.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                    <h2 style="font-weight:700;font-size:.9rem;word-break:break-word;white-space:pre-wrap;">Revenue Streams</h2>
                  </v-col>
                </v-row>

                <v-row>
                  <v-btn
                    style="background: linear-gradient(to right, #A61C00, #741502); width:100%;border-radius:8px"
                    large
                    outlined
                    color="white"
                    to="../../dashboard/channels/add"
                  >Add Another Channel - Click Here!</v-btn>
                </v-row>

              </v-col>
            </v-row>
          </v-card>
        </transition>

        <!-- ACCOUNT CHANNELS BANNER if Vendor -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="width: 100%;background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="this.companyType === false">
            <v-row style="width:100%;height:auto" class="d-flex flex align-center">
              <v-col cols="6" style="height:auto;">
                <v-img height="400px" src="/SoWork Logos with Icons-162.png"></v-img>
              </v-col>

              <v-col cols="6" class="d-flex flex-column justify-center" style="height:auto">
                <v-row>
                  <v-col cols="12">
                    <h2 style="color:darkred;font-size:1.5rem">What Are Account Channels?</h2>
                    <p class="mt-4" style="font-size:1rem">Channel(s) here on SOWerk are the backbone of your account! They can represent different areas or aspects of your business and how you serve your Customers.
                    </p>
                    <p>It's okay to have just one Channel, but you could have a Channel for service and another for supply, Channels for different locations, or even different Channels for separate product lines. The right Channel structure can help you organize Customer relationships.</p>
                  </v-col>
                </v-row>


                <v-row>
                  <v-col cols="4" style="text-align:center;">
                    <v-img src="/building.svg" style="max-width:75px;max-height:75px;margin-left:30%;"></v-img>
                    <h2 style="font-weight:700;font-size:1.1rem;">Locations</h2>
                  </v-col>

                  <v-col cols="4" style="text-align:center">
                    <v-img src="/connection.svg" style="max-width:75px;max-height:75px;margin-left:30%;"></v-img>
                    <h2 style="font-weight:700;font-size:1.1rem;">Departments</h2>
                  </v-col>

                  <v-col cols="4" style="text-align:center">
                    <v-img src="/business-and-finance.svg" style="max-width:75px;max-height:75px;margin-left:30%;"></v-img>
                    <h2 style="font-weight:700;font-size:1.1rem;">Revenue Streams</h2>
                  </v-col>
                </v-row>

                <v-row v-if="this.currentUser.is_superuser">
                  <v-btn
                    style="background: linear-gradient(to right, #A61C00, #741502); width:100%;border-radius:8px"
                    large
                    outlined
                    color="white"
                    to="../../dashboard/channels/add"
                  >Add Another Channel - Click Here!</v-btn>
                </v-row>



              </v-col>
            </v-row>
          </v-card>
        </transition>

            <!--
            This will be uncommented when FilterCard has a horizontal layout for md screens
            <v-row  v-else-if="$vuetify.breakpoint.md ">
              <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">
                <v-progress-circular
                  indeterminate
                  color="primary"
                  :size="50"
                ></v-progress-circular>
              </v-col>
              <v-row>
              <v-col cols="12">
                <FilterCard
                  title="Filter"
                  :filters="filters"
                ></FilterCard>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" class="d-flex flex-column justify-start">
                <FacilitiesCard
                  :title="'Your Facilities - ' + locations.length"
                  :items="locations"
                  :tableProperties="headers"
                  :viewAll="false"
                  slug="/dashboard/channels/"
                ></FacilitiesCard>
                <v-row class="d-flex justify-space-between align-center"style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">
                  <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Property?</p>
                  <v-btn
                    style=""
                    class="px-16 mr-16"
                    large
                    outlined
                    rounded
                    color="white"
                    to="add"
                  >Add Now</v-btn>
                </v-row>
              </v-col>
              </v-row>
            </v-row>
            -->

        <!-- FACILITIES CARD -->
        <v-row>
          <v-col cols="12" class="d-flex flex-column justify-start">
            <v-skeleton-loader
              v-if="!loading"
              type="card-avatar, article, article, article, actions"
              min-height="50vh"
            ></v-skeleton-loader>
            <!-- <transition name="slide-fade">
              <FacilitiesCard
                :title="'Your Channels - ' + locations.length"
                :items="locations"
                :company="company"
                :tableProperties="headers"
                :viewAll="false"
                :viewLocation="viewLocation"
                slug="/dashboard/channels/"
                v-if="locationApproved && loading"
                :sowerkTags="sowerkTags"
                :locationFilterTags="locationFilterTags"
                :removeTag="removeTag"
                :filterItems="filterItems"
              ></FacilitiesCard>
            </transition> -->
            <transition name="slide-fade">
              <BusinessChannelsCard
                :title="'Your Channels - ' + locations.length"
                :viewAll="false"
                :viewLocation="viewLocation"
                slug="/dashboard/channels/"
                v-if="locationApproved && loading"
                :locationFilterTags="locationFilterTags"
                :filterItems="filterItems"
              ></BusinessChannelsCard>
            </transition>

          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>

  <!-- BREAKPOINT - MEDIUM - BREAK @ 1264-960 pixels ------------------------------------------------------------>
  <div v-else-if="$vuetify.breakpoint.md" style="width:100%">
    <v-app :class="company.company_type === 'false' ? 'grey darken-3' : 'grey lighten-3'">
      <v-container class="px-0" style="max-width: 95%;">

        <!-- NOT SUPER USER -->
        <transition name="slide-fade">
          <!-- VENDOR USER -->
          <v-card class="my-4 flex-row justify-space-between align-center mx-0" v-if="company.company_type === 'false'">
            <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto; background-color: #707070">

              <v-col cols="4" style="color:white;width:100%;text-align:center;">
                <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;color:white">SOWERK 101</h1>
              </v-col>

              <v-col cols="4" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
                <p style="font-size:1.1rem">Watch our short video to learn about Account Channels and why they are important to your SOWerk Account.</p>
              </v-col>

              <!-- VENDOR CHANNELS VIDEO -->
              <v-col cols="4" style="width:100%;text-align:center;">
                <v-btn @click="showVideoCard" color="white" outlined style="width: 80%; border-radius: 20px;" class="py-8">
                  <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;" class="text-no-wrap">
                    WATCH NOW <br/> -Account Channels-
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>

          <!-- BUSINESS USER -->
          <v-card class="my-4 flex-row justify-space-between align-center mx-0" v-if="company.company_type === 'true'">
            <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto; background-color: #707070">

              <v-col cols="3" style="color:white;width:100%;text-align:center;">
                <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;color:white">SOWERK 101</h1>
              </v-col>

              <v-col cols="3" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
                <p style="font-size:1.1rem">Watch our short video to learn about Account Channels and why they are important to your SOWerk Account.</p>
              </v-col>

              <!-- BUSINESS CHANNELS VIDEO -->
              <v-col cols="6" style="width:100%;text-align:center;">
                <v-btn @click="showVideoCard" color="white" outlined style="width: 80%; border-radius: 20px;" class="py-8">
                  <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">
                    WATCH NOW -Account Channels-
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </transition>

        <!-- VENDOR USER -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="height:450px;width:100%;background-color:white;border-radius:1%;" v-if="showVideo === true && company.company_type === 'false'">
            <div style="position:relative;border-radius:1%;">
              <iframe src="https://player.vimeo.com/video/495537837" allowfullscreen frameborder="0" style="width:75vw;height:450px;border-radius:3%;margin-left:10%">
              </iframe>
            </div>
          </v-card>
        </transition>

        <!-- BUSINESS USER -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="height:450px;width:100%;background-color:#404040;border-radius:1%;" v-if="showVideo === true && company.company_type === 'true'">
            <div style="position:relative;border-radius:1%;">
              <iframe src="https://player.vimeo.com/video/488987561" allowfullscreen frameborder="0" style="width:75vw;height:450px;border-radius:3%;margin-left:10%">
              </iframe>
            </div>
          </v-card>
        </transition>

        <!-- COUNT CHANNELS BANNER if Business -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="width: 100%;background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="this.companyType === true">
            <v-row style="width:100%;height:auto" class="d-flex flex align-center">
              <v-col cols="6" style="height:auto;">
                <v-img height="400px" src="/SoWork Logos with Icons-162.png"></v-img>
              </v-col>

              <v-col cols="6" class="d-flex flex-column justify-center" style="height:auto">
                <v-row>
                  <v-col cols="12">
                    <h2 style="color:darkred;font-size:1.5rem">What Are Account Channels?</h2>
                    <p class="mt-4" style="font-size:1rem">Channel(s) here on SOWerk are the backbone of your account! Think of Channels as any company facility, division or department, or even a large project where you will want to specifically find, vet, and manage Vendors. You can set up as many Channels as you like and assign users within your company account to manage a Channel. A good rule of thumb is to establish Channels based on how you currently segment Vendor management or how you would like to, going forward.
                    </p>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3" style="text-align:center;">
                    <v-img src="/building.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                    <h2 style="font-weight:900;font-size:.7rem;margin-left:8%">Locations</h2>
                  </v-col>

                  <v-col cols="3" style="text-align:center">
                    <v-img src="/digging.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                    <h2 style="font-weight:900;font-size:.7rem;margin-left:8%">Major Projects</h2>
                  </v-col>

                  <v-col cols="3" style="text-align:center">
                    <v-img src="/connection.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                    <h2 style="font-weight:900;font-size:.7rem;margin-left:8%">Departments</h2>
                  </v-col>

                  <v-col cols="3" style="text-align:center">
                    <v-img src="/business-and-finance.svg" style="max-width:75px;max-height:75px;margin-left:20%;"></v-img>
                    <h2 style="font-weight:900;font-size:.7rem;margin-left:8%">Revenue Streams</h2>
                  </v-col>
                </v-row>

                <v-row>
                  <v-btn
                    style="background: linear-gradient(to right, #A61C00, #741502); width:100%;border-radius:8px"
                    large
                    outlined
                    color="white"
                    to="../../dashboard/channels/add"
                  >Add Another Channel - Click Here!</v-btn>
                </v-row>

              </v-col>
            </v-row>
          </v-card>
        </transition>

        <!-- ACCOUNT CHANNELS BANNER if Vendor -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="width: 100%;background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="this.companyType === false">
            <v-row style="width:100%;" class="d-flex flex-column align-center">
              <v-row>
                <v-col cols="12">
                  <v-img style="width:300px;height:300px;margin-bottom:-50px;margin-top:-50px" src="/SoWork Logos with Icons-162.png"></v-img>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="align-center">
                  <h2 style="color:darkred;font-size:1rem;text-align:center;">What Are Account Channels?</h2>
                  <p class="mt-4" style="font-size:.8rem;text-align:center;margin-left:3%;padding:1%">Channel(s) here on SOWerk are the backbone of your account! They can represent different areas or aspects of your business and how you serve your Customers.
                  </p>
                  <p>It's okay to have just one Channel, but you could have a Channel for service and another for supply, Channels for different locations, or even different Channels for separate product lines. The right Channel structure can help you organize Customer relationships.</p>
                </v-col>
              </v-row>

              <v-row class="justify-space-around align-center">
                <v-col cols="4" style="text-align:center;">
                  <v-img src="/building.svg" style="max-width:30px;max-height:30px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:20%;">Locations</h2>
                </v-col>

                <v-col cols="4" style="text-align:center">
                  <v-img src="/connection.svg" style="max-width:30px;max-height:30px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:20%;">Departments</h2>
                </v-col>

                <v-col cols="4" style="text-align:center">
                  <v-img src="/business-and-finance.svg" style="max-width:30px;max-height:30px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:20%;">Revenue Streams</h2>
                </v-col>
              </v-row>

              <v-row v-if="this.currentUser.is_superuser">
                <v-btn
                  style="background: linear-gradient(to right, #A61C00, #741502); width:100%;border-radius:8px;margin-left:4%;"
                  large
                  outlined
                  color="white"
                  to="../../dashboard/channels/add"
                >Add Another Channel - Click Here!</v-btn>
              </v-row>

            </v-row>
          </v-card>
        </transition>

        <v-row v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
          <!--        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">-->
          <!--          <v-progress-circular-->
          <!--            indeterminate-->
          <!--            color="primary"-->
          <!--            :size="50"-->
          <!--          ></v-progress-circular>-->
          <!--        </v-col>-->

          <v-col cols="12" class="d-flex flex-column justify-start flex-wrap" v-if="$vuetify.breakpoint.sm">
            <v-skeleton-loader
              v-if="!loading"
              type="card-avatar, article, article, article, actions"
              min-height="50vh"
              min-width="80vw"
              cols
            ></v-skeleton-loader>

            <transition name="slide-fade">
              <FacilitiesCard
                :title="'Your Channels - ' + locations.length"
                :items="locations"
                :tableProperties="headers"
                :viewAll="false"
                slug="/dashboard/channels/"
                v-if="locationApproved && loading"
                :viewLocation="viewLocation"
                :sowerkTags="sowerkTags"
                :locationFilterTags="locationFilterTags"
                :removeTag="removeTag"
                :filterItems="filterItems"
              ></FacilitiesCard>
            </transition>

            <!--          <transition name="slide-fade">-->
            <!--            <v-row v-if="loading" class="d-flex justify-space-between align-center flex-wrap mx-0" style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">-->
            <!--              <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Channel?</p>-->
            <!--              <v-btn-->
            <!--                style=""-->
            <!--                class="px-16 mr-16"-->
            <!--                large-->
            <!--                outlined-->
            <!--                rounded-->
            <!--                color="white"-->
            <!--                to="/dashboard/channels/add"-->
            <!--              >Add Now</v-btn>-->
            <!--            </v-row>-->
            <!--          </transition>-->
          </v-col>
          <v-col cols="12" class="d-flex flex-column justify-start" v-else>
            <v-skeleton-loader
              v-if="!loading"
              type="card-avatar, article, article, article, actions"
              min-height="50vh"
              min-width="80vw"
              cols
            ></v-skeleton-loader>
            <transition name="slide-fade">
              <FacilitiesCard
                :title="'Your Channels - ' + locations.length"
                :items="locations"
                :company="company"
                :tableProperties="headers"
                :viewAll="false"
                slug="/dashboard/channels/"
                v-if="locationApproved && loading"
                :viewLocation="viewLocation"
                :sowerkTags="sowerkTags"
                :locationFilterTags="locationFilterTags"
                :removeTag="removeTag"
                :filterItems="filterItems"
              ></FacilitiesCard>
            </transition>
            <!--          <transition name="slide-fade">-->
            <!--            <v-row v-if="loading" class="d-flex justify-space-between align-center mx-0" style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">-->
            <!--              <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Channel?</p>-->
            <!--              <v-btn-->
            <!--                style=""-->
            <!--                class="px-16 mr-16"-->
            <!--                large-->
            <!--                outlined-->
            <!--                rounded-->
            <!--                color="white"-->
            <!--                to="/dashboard/facilities/add"-->
            <!--              >Add Now</v-btn>-->
            <!--            </v-row>-->
            <!--          </transition>-->
          </v-col>

        </v-row>
            <!--
            This will be uncommented when FilterCard has a horizontal layout for md screens
            <v-row  v-else-if="$vuetify.breakpoint.md ">
              <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">
                <v-progress-circular
                  indeterminate
                  color="primary"
                  :size="50"
                ></v-progress-circular>
              </v-col>
              <v-row>
              <v-col cols="12">
                <FilterCard
                  title="Filter"
                  :filters="filters"
                ></FilterCard>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" class="d-flex flex-column justify-start">
                <FacilitiesCard
                  :title="'Your Facilities - ' + locations.length"
                  :items="locations"
                  :tableProperties="headers"
                  :viewAll="false"
                  slug="/dashboard/channels/"
                ></FacilitiesCard>
                <v-row class="d-flex justify-space-between align-center"style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">
                  <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Property?</p>
                  <v-btn
                    style=""
                    class="px-16 mr-16"
                    large
                    outlined
                    rounded
                    color="white"
                    to="add"
                  >Add Now</v-btn>
                </v-row>
              </v-col>
              </v-row>
            </v-row>
            -->

        <v-row  v-else>
            <!--        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">-->
            <!--          <v-progress-circular-->
            <!--            indeterminate-->
            <!--            color="primary"-->
            <!--            :size="50"-->
            <!--          ></v-progress-circular>-->
            <!--        </v-col>-->
            <!--        <v-col cols="3">-->
            <!--          <v-skeleton-loader-->
            <!--            v-if="!loading"-->
            <!--            type="article, article, article, actions"-->
            <!--            min-height="50vh"-->
            <!--          ></v-skeleton-loader>-->
            <!--          <transition name="slide-fade">-->
            <!--            <FilterCard-->
            <!--              title="Filter"-->
            <!--              :filters="filters"-->
            <!--              v-if="loading"-->
            <!--            ></FilterCard>-->
            <!--          </transition>-->
            <!--        </v-col>-->
          <v-col cols="12" class="d-flex flex-column justify-start">
            <v-skeleton-loader
              v-if="!loading"
              type="card-avatar, article, article, article, actions"
              min-height="50vh"
            ></v-skeleton-loader>
            <transition name="slide-fade">
              <FacilitiesCard
                :title="'Your Channels - ' + locations.length"
                :items="locations"
                :company="company"
                :tableProperties="headers"
                :viewAll="false"
                :viewLocation="viewLocation"
                slug="/dashboard/channels/"
                v-if="locationApproved && loading"
                :sowerkTags="sowerkTags"
                :locationFilterTags="locationFilterTags"
                :removeTag="removeTag"
                :filterItems="filterItems"
              ></FacilitiesCard>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>

  <!-- BREAKPOINT - SMALL - BREAK @ 960-600 pixels ------------------------------------------------------------>
  <div v-else-if="$vuetify.breakpoint.sm" style="width:100%">
    <v-app :class="company.company_type === 'false' ? 'grey darken-3' : 'grey lighten-3'" >
      <v-container class="px-0" style="max-width: 95%;">

        <!-- SOWERK 101 BANNER -->
        <transition name="slide-fade">
          <!-- VENDOR USER -->
          <v-card class="my-4 flex-column justify-space-between align-center mx-0" v-if="company.company_type === 'false'">

            <v-row class="justify-space-between align-center mx-0" style="background-color:#404040">
              <v-col cols="12" style="color:#404040;text-align:center;">
                <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.2rem;padding-left:2%;color:#404040">SOWERK 101</h1>
              </v-col>
            </v-row>

            <v-row class="justify-space-between align-center mx-0" style="background-color:#404040">
              <v-col cols="12" style="color:#404040;text-align:left;padding-left:2%;padding-top:2%">
                <p style="font-size:1.4rem">Watch our short video to learn about Account Channels and why they are important to your SOWerk Account.</p>
              </v-col>
            </v-row>

            <v-row class="justify-space-between align-center mx-0" style="background-color:#404040">
              <!-- VENDOR CHANNELS VIDEO -->
              <v-col cols="12" style="text-align:center;">
                <v-btn @click="showVideoCard" style="border: 1px solid white;padding:8% 10% 10% 12%;text-decoration:none;color:inherit;background-color:#404040">
                  <span style="font-size:1.2rem;letter-spacing:1px;font-weight:800;color:white;text-align:center;margin-top:5%;">
                    WATCH NOW -Account Channels-
                  </span>
                </v-btn>
              </v-col>
            </v-row>

          </v-card>

          <!-- SUPER USER -->
          <v-card class="my-4 flex-column justify-space-between align-center mx-0" v-if="company.company_type === 'true'">

            <v-row class="justify-space-between align-center mx-0" style="background-color:#404040">
              <v-col cols="12" style="color:white;text-align:center;">
                <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.2rem;padding-left:2%;color:white">SOWERK 101</h1>
              </v-col>
            </v-row>

            <v-row class="justify-space-between align-center mx-0" style="background-color:#404040">
              <v-col cols="12" style="color:white;text-align:center;padding-left:2%;padding-top:2%">
                <p style="font-size:1.4rem">Watch our short video to learn about Account Channels and why they are important to your SOWerk Account.</p>
              </v-col>
            </v-row>

            <v-row class="justify-space-between align-center mx-0" style="background-color:#404040">
              <!-- VENDOR CHANNELS VIDEO -->
              <v-col cols="12" style="text-align:center;">
                <v-btn @click="showVideoCard" style="border: 1px solid white;padding:8% 10% 10% 12%;text-decoration:none;color:inherit;background-color:#404040">
                  <span style="font-size:1.2rem;letter-spacing:1px;font-weight:800;color:white;text-align:center;margin-top:5%;">
                    WATCH NOW -Account Channels-
                  </span>
                </v-btn>
              </v-col>
            </v-row>

          </v-card>
        </transition>

        <!-- VENDOR USER VIDEO -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="height:300px;width:100%;background-color:white;border-radius:1%;" v-if="showVideo === true && company.company_type === 'false'">
            <div style="border-radius:1%;">
              <iframe src="https://player.vimeo.com/video/495537837" allowfullscreen frameborder="0" style="width:75vw;height:300px;border-radius:3%;margin-left:12%">
              </iframe>
            </div>
          </v-card>
        </transition>

        <!-- BUSINESS USER VIDEO -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="height:300px;width:100%;background-color:#404040;border-radius:1%;" v-if="showVideo === true && company.company_type === 'true'">
            <div style="border-radius:1%;">
              <iframe src="https://player.vimeo.com/video/488987561" allowfullscreen frameborder="0" style="width:75vw;height:300px;border-radius:3%;margin-left:12%">
              </iframe>
            </div>
          </v-card>
        </transition>

        <!-- COUNT CHANNELS BANNER if Business -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="width: 100%;background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="this.companyType === true">
            <v-row style="width:100%;" class="d-flex flex-column align-center">

              <v-row>
                <v-col cols="12">
                  <v-img style="width:500px;height:500px;margin-bottom:-75px;margin-top:-50px" src="/SoWork Logos with Icons-162.png"></v-img>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="align-center">
                  <h2 style="color:darkred;font-size:1.4rem;text-align:center;">What Are Account Channels?</h2>
                  <p class="mt-4" style="font-size:1rem;text-align:center;margin-left:3%;padding:1%">Channel(s) here on SOWerk are the backbone of your account! Think of Channels as any company facility, division or department, or even a large project where you will want to specifically find, vet, and manage Vendors. You can set up as many Channels as you like and assign users within your company account to manage a Channel. A good rule of thumb is to establish Channels based on how you currently segment Vendor management or how you would like to, going forward.
                  </p>
                </v-col>
              </v-row>

              <v-row class="justify-space-around align-center">
                <v-col cols="3" style="text-align:center;">
                  <v-img src="/building.svg" style="max-width:100px;max-height:100px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:35%;">Locations</h2>
                </v-col>

                <v-col cols="3" style="text-align:center">
                  <v-img src="/digging.svg" style="max-width:100px;max-height:100px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:35%;">Major Projects</h2>
                </v-col>

                <v-col cols="3" style="text-align:center">
                  <v-img src="/connection.svg" style="max-width:100px;max-height:100px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:34%;">Departments</h2>
                </v-col>

                <v-col cols="3" style="text-align:center">
                  <v-img src="/business-and-finance.svg" style="max-width:100px;max-height:100px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:35%;">Revenue Streams</h2>
                </v-col>
              </v-row>

              <v-row>
                <v-btn
                  style="background: linear-gradient(to right, #A61C00, #741502);width:100%;border-radius:8px;margin-left:4%;margin-bottom:3%;"
                  large
                  outlined
                  color="white"
                  to="../../dashboard/channels/add"
                >Add Another Channel</v-btn>
              </v-row>

            </v-row>
          </v-card>
        </transition>

        <!-- ACCOUNT CHANNELS BANNER if Vendor -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="width: 100%;background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="this.companyType === false">
            <v-row style="width:100%;" class="d-flex flex-column align-center">

              <v-row>
                <v-col cols="12">
                  <v-img style="width:300px;height:300px;margin-bottom:-50px;margin-top:-50px" src="/SoWork Logos with Icons-162.png"></v-img>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="align-center">
                  <h2 style="color:darkred;font-size:1rem;text-align:center;">What Are Account Channels?</h2>
                  <p class="mt-4" style="font-size:.8rem;text-align:center;margin-left:3%;padding:1%">Channel(s) here on SOWerk are the backbone of your account! They can represent different areas or aspects of your business and how you serve your Customers.
                  </p>
                  <p>It's okay to have just one Channel, but you could have a Channel for service and another for supply, Channels for different locations, or even different Channels for separate product lines. The right Channel structure can help you organize Customer relationships.</p>
                </v-col>
              </v-row>

              <v-row class="justify-space-around align-center">
                <v-col cols="4" style="text-align:center;">
                  <v-img src="/building.svg" style="max-width:30px;max-height:30px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:20%;">Locations</h2>
                </v-col>

                <v-col cols="4" style="text-align:center">
                  <v-img src="/connection.svg" style="max-width:30px;max-height:30px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:20%;">Departments</h2>
                </v-col>

                <v-col cols="4" style="text-align:center">
                  <v-img src="/business-and-finance.svg" style="max-width:30px;max-height:30px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:20%;">Revenue Streams</h2>
                </v-col>
              </v-row>

              <v-row v-if="this.currentUser.is_superuser">
                <v-btn
                  style="background: linear-gradient(to right, #A61C00, #741502); width:100%;border-radius:8px;margin-left:4%;"
                  large
                  outlined
                  color="white"
                  to="../../dashboard/channels/add"
                >Add Another Channel - Click Here!</v-btn>
              </v-row>

            </v-row>
          </v-card>
        </transition>

        <v-row v-if="$vuetify.breakpoint.sm">
          <!--        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">-->
          <!--          <v-progress-circular-->
          <!--            indeterminate-->
          <!--            color="primary"-->
          <!--            :size="50"-->
          <!--          ></v-progress-circular>-->
          <!--        </v-col>-->

          <v-col cols="12" class="d-flex flex-column justify-start">
            <v-skeleton-loader
              v-if="!loading"
              type="card-avatar, article, article, article, actions"
              min-height="50vh"
              min-width="80vw"
              cols
            ></v-skeleton-loader>

            <transition name="slide-fade">
              <FacilitiesCard
                :title="'Your Channels - ' + locations.length"
                :items="locations"
                :company="company"
                :tableProperties="headers"
                :viewAll="false"
                slug="/dashboard/channels/"
                v-if="locationApproved && loading"
                :viewLocation="viewLocation"
                :sowerkTags="sowerkTags"
                :locationFilterTags="locationFilterTags"
                :removeTag="removeTag"
                :filterItems="filterItems"
              ></FacilitiesCard>
            </transition>
            <!--          <transition name="slide-fade">-->
            <!--            <v-row v-if="loading" class="d-flex justify-space-between align-center mx-0" style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">-->
            <!--              <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Channel?</p>-->
            <!--              <v-btn-->
            <!--                style=""-->
            <!--                class="px-16 mr-16"-->
            <!--                large-->
            <!--                outlined-->
            <!--                rounded-->
            <!--                color="white"-->
            <!--                to="/dashboard/facilities/add"-->
            <!--              >Add Now</v-btn>-->
            <!--            </v-row>-->
            <!--          </transition>-->
          </v-col>

        </v-row>
            <!--
            This will be uncommented when FilterCard has a horizontal layout for md screens
            <v-row  v-else-if="$vuetify.breakpoint.md ">
              <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">
                <v-progress-circular
                  indeterminate
                  color="primary"
                  :size="50"
                ></v-progress-circular>
              </v-col>
              <v-row>
              <v-col cols="12">
                <FilterCard
                  title="Filter"
                  :filters="filters"
                ></FilterCard>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" class="d-flex flex-column justify-start">
                <FacilitiesCard
                  :title="'Your Facilities - ' + locations.length"
                  :items="locations"
                  :tableProperties="headers"
                  :viewAll="false"
                  slug="/dashboard/channels/"
                ></FacilitiesCard>
                <v-row class="d-flex justify-space-between align-center"style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">
                  <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Property?</p>
                  <v-btn
                    style=""
                    class="px-16 mr-16"
                    large
                    outlined
                    rounded
                    color="white"
                    to="add"
                  >Add Now</v-btn>
                </v-row>
              </v-col>
              </v-row>
            </v-row>
            -->

      </v-container>
    </v-app>
  </div>

  <!-- BREAKPOINT - EXTRA-SMALL - BREAK @ 600- pixels ------------------------------------------------------------>
  <div v-else-if="$vuetify.breakpoint.xs" style="width:100%">
    <v-app :class="company.company_type === 'false' ? 'grey darken-3' : 'grey lighten-3'">
      <v-container class="px-0" style="max-width: 95%;">

        <!-- SOWERK 101 BANNER -->
        <transition name="slide-fade">
          <!-- VENDOR USER -->
          <v-card class="my-4 flex-column justify-space-between align-center mx-0" v-if="company.company_type === 'false'">

            <v-row class="justify-space-between align-center mx-0" style="background-color:#404040">
              <v-col cols="12" style="color:#404040;text-align:center;">
                <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:1.8rem;padding-left:2%;color:#404040">SOWERK 101</h1>
              </v-col>
            </v-row>

            <v-row class="justify-space-between align-center mx-0" style="background-color:#404040">
              <v-col cols="12" style="color:#404040;text-align:left;padding-left:2%;padding-top:2%">
                <p style="font-size:1.2rem">Watch our short video to learn about Account Channels and why they are important to your SOWerk Account.</p>
              </v-col>
            </v-row>

            <v-row class="justify-space-between align-center mx-0" style="background-color:#404040">
              <!-- VENDOR CHANNELS VIDEO -->
              <v-col cols="12" style="text-align:center;">
                <v-btn @click="showVideoCard" style="border: 1px solid white;padding:8% 10% 10% 12%;text-decoration:none;color:inherit;background-color:#404040">
                  <span style="font-size:.7rem;letter-spacing:1px;font-weight:800;color:white;text-align:center;">
                    WATCH NOW -Account Channels-
                  </span>
                </v-btn>
              </v-col>
            </v-row>

          </v-card>

          <!-- SUPER USER -->
          <v-card class="my-4 flex-column justify-space-between align-center mx-0" v-if="company.company_type === 'true'">

            <v-row class="justify-space-between align-center mx-0" style="background-color:#404040">
              <v-col cols="12" style="color:white;text-align:center;">
                <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:1.8rem;padding-left:2%;color:white">SOWERK 101</h1>
              </v-col>
            </v-row>

            <v-row class="justify-space-between align-center mx-0" style="background-color:#404040">
              <v-col cols="12" style="color:white;text-align:center;padding-left:2%;padding-top:2%">
                <p style="font-size:1.2rem">Watch our short video to learn about Account Channels and why they are important to your SOWerk Account.</p>
              </v-col>
            </v-row>

            <v-row class="justify-space-between align-center mx-0" style="background-color:#404040">
              <!-- VENDOR CHANNELS VIDEO -->
              <v-col cols="12" style="text-align:center;">
                <v-btn @click="showVideoCard" style="border: 1px solid white;padding:8% 10% 10% 12%;text-decoration:none;color:inherit;background-color:#404040">
                  <span style="font-size:.7rem;letter-spacing:1px;font-weight:800;color:white;text-align:center;">
                    WATCH NOW -Account Channels-
                  </span>
                </v-btn>
              </v-col>
            </v-row>

          </v-card>
        </transition>

        <!-- VENDOR USER VIDEO -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="height:175px;width:100%;background-color:white;border-radius:1%;" v-if="showVideo === true && company.company_type === 'false'">
            <div style="border-radius:1%;">
              <iframe src="https://player.vimeo.com/video/495537837" allowfullscreen frameborder="0" style="width:75vw;height:175px;border-radius:3%;margin-left:12%">
              </iframe>
            </div>
          </v-card>
        </transition>

        <!-- BUSINESS USER VIDEO -->
        <transition name="slide-fade" this.$vuetify.breakpoint.width:500px>
          <v-card class="mb-4" style="height:175px;width:100%;background-color:#404040;border-radius:1%;" v-if="showVideo === true && company.company_type === 'true'">
            <div style="border-radius:1%;">
              <iframe src="https://player.vimeo.com/video/488987561" allowfullscreen frameborder="0" style="width:75vw;height:175px;border-radius:3%;margin-left:12%">
              </iframe>
            </div>
          </v-card>
        </transition>

        <!-- COUNT CHANNELS BANNER if Business -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="width: 100%;background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="this.companyType === true">
            <v-row style="width:100%;" class="d-flex flex-column align-center">

              <v-row>
                <v-col cols="12">
                  <v-img style="width:300px;height:300px;margin-bottom:-50px;margin-top:-50px" src="/SoWork Logos with Icons-162.png"></v-img>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="align-center">
                  <h2 style="color:darkred;font-size:1rem;text-align:center;">What Are Account Channels?</h2>
                  <p class="mt-4" style="font-size:.8rem;text-align:center;margin-left:3%;padding:1%">Channel(s) here on SOWerk are the backbone of your account! Think of Channels as any company facility, division or department, or even a large project where you will want to specifically find, vet, and manage Vendors. You can set up as many Channels as you like and assign users within your company account to manage a Channel. A good rule of thumb is to establish Channels based on how you currently segment Vendor management or how you would like to, going forward.
                  </p>
                </v-col>
              </v-row>

              <v-row class="justify-space-around align-center">
                <v-col cols="3" style="text-align:center;">
                  <v-img src="/building.svg" style="max-width:30px;max-height:30px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:20%;">Locations</h2>
                </v-col>

                <v-col cols="3" style="text-align:center">
                  <v-img src="/digging.svg" style="max-width:30px;max-height:30px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:20%;">Major Projects</h2>
                </v-col>

                <v-col cols="3" style="text-align:center">
                  <v-img src="/connection.svg" style="max-width:30px;max-height:30px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:20%;">Departments</h2>
                </v-col>

                <v-col cols="3" style="text-align:center">
                  <v-img src="/business-and-finance.svg" style="max-width:30px;max-height:30px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:20%;">Revenue Streams</h2>
                </v-col>
              </v-row>

              <v-row>
                <v-btn
                  style="background: linear-gradient(to right, #A61C00, #741502);width:100%;border-radius:8px;margin-left:4%;"
                  large
                  outlined
                  color="white"
                  to="../../dashboard/channels/add"
                >Add Another Channel - Click Here!</v-btn>
              </v-row>

            </v-row>
          </v-card>
        </transition>

        <!-- ACCOUNT CHANNELS BANNER if Vendor -->
        <transition name="slide-fade">
          <v-card class="mb-4" style="width: 100%;background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="this.companyType === false">
            <v-row style="width:100%;" class="d-flex flex-column align-center">

              <v-row>
                <v-col cols="12">
                  <v-img style="width:300px;height:300px;margin-bottom:-50px;margin-top:-50px" src="/SoWork Logos with Icons-162.png"></v-img>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="align-center">
                  <h2 style="color:darkred;font-size:1rem;text-align:center;">What Are Account Channels?</h2>
                  <p class="mt-4" style="font-size:.8rem;text-align:center;margin-left:3%;padding:1%">Channel(s) here on SOWerk are the backbone of your account! They can represent different areas or aspects of your business and how you serve your Customers.
                  </p>
                  <p>It's okay to have just one Channel, but you could have a Channel for service and another for supply, Channels for different locations, or even different Channels for separate product lines. The right Channel structure can help you organize Customer relationships.</p>
                </v-col>
              </v-row>

              <v-row class="justify-space-around align-center">
                <v-col cols="4" style="text-align:center;">
                  <v-img src="/building.svg" style="max-width:30px;max-height:30px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:20%;">Locations</h2>
                </v-col>

                <v-col cols="4" style="text-align:center">
                  <v-img src="/connection.svg" style="max-width:30px;max-height:30px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:20%;">Departments</h2>
                </v-col>

                <v-col cols="4" style="text-align:center">
                  <v-img src="/business-and-finance.svg" style="max-width:30px;max-height:30px;margin-left:40%;"></v-img>
                  <h2 style="font-weight:900;font-size:.7rem;text-align:center;margin-left:20%;">Revenue Streams</h2>
                </v-col>
              </v-row>

              <v-row v-if="this.currentUser.is_superuser">
                <v-btn
                  style="background: linear-gradient(to right, #A61C00, #741502); width:100%;border-radius:8px;margin-left:4%;"
                  large
                  outlined
                  color="white"
                  to="../../dashboard/channels/add"
                >Add Another Channel</v-btn>
              </v-row>

            </v-row>
          </v-card>
        </transition>

        <v-row v-if="$vuetify.breakpoint.xs">
          <!--        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">-->
          <!--          <v-progress-circular-->
          <!--            indeterminate-->
          <!--            color="primary"-->
          <!--            :size="50"-->
          <!--          ></v-progress-circular>-->
          <!--        </v-col>-->

          <v-col cols="12" class="d-flex flex-column justify-start">
            <v-skeleton-loader
              v-if="!loading"
              type="card-avatar, article, article, article, actions"
              min-height="50vh"
              min-width="80vw"
              cols
            ></v-skeleton-loader>

            <transition name="slide-fade">
              <FacilitiesCard
                :title="'Your Channels - ' + locations.length"
                :items="locations"
                :company="company"
                :tableProperties="headers"
                :viewAll="false"
                slug="/dashboard/channels/"
                v-if="locationApproved && loading"
                :viewLocation="viewLocation"
                :sowerkTags="sowerkTags"
                :locationFilterTags="locationFilterTags"
                :removeTag="removeTag"
                :filterItems="filterItems"
              ></FacilitiesCard>
            </transition>
            <!--          <transition name="slide-fade">-->
            <!--            <v-row v-if="loading" class="d-flex justify-space-between align-center mx-0" style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">-->
            <!--              <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Channel?</p>-->
            <!--              <v-btn-->
            <!--                style=""-->
            <!--                class="px-16 mr-16"-->
            <!--                large-->
            <!--                outlined-->
            <!--                rounded-->
            <!--                color="white"-->
            <!--                to="/dashboard/facilities/add"-->
            <!--              >Add Now</v-btn>-->
            <!--            </v-row>-->
            <!--          </transition>-->
          </v-col>

        </v-row>
            <!--
            This will be uncommented when FilterCard has a horizontal layout for md screens
            <v-row  v-else-if="$vuetify.breakpoint.md ">
              <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">
                <v-progress-circular
                  indeterminate
                  color="primary"
                  :size="50"
                ></v-progress-circular>
              </v-col>
              <v-row>
              <v-col cols="12">
                <FilterCard
                  title="Filter"
                  :filters="filters"
                ></FilterCard>
              </v-col>
              </v-row>
              <v-row>
              <v-col cols="12" class="d-flex flex-column justify-start">
                <FacilitiesCard
                  :title="'Your Facilities - ' + locations.length"
                  :items="locations"
                  :tableProperties="headers"
                  :viewAll="false"
                  slug="/dashboard/channels/"
                ></FacilitiesCard>
                <v-row class="d-flex justify-space-between align-center"style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">
                  <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Property?</p>
                  <v-btn
                    style=""
                    class="px-16 mr-16"
                    large
                    outlined
                    rounded
                    color="white"
                    to="add"
                  >Add Now</v-btn>
                </v-row>
              </v-col>
              </v-row>
            </v-row>
            -->

      </v-container>
    </v-app>
  </div>

</template>

<script>
  import HomeCard from '~/components/dashboard/HomeCard'
  import FilterCard from '~/components/dashboard/FilterCard'
  import FacilitiesCard from '@/components/dashboard/FacilitiesCard'
  import BusinessChannelsCard from '@/components/dashboard/BusinessChannelsCard'

  export default {
    name: 'facilities',
    layout: 'app',
    components: {
      FacilitiesCard,
      FilterCard,
      BusinessChannelsCard
    },
    data() {
      return {
        showVideo: false,
        loading: false,
        company: {},
        locations: [
        ],
        filters: [
          {
            name: 'Proximity',
            items: [
              'State',
              'National',
              'Under 10 Miles',
              'Under 25 Miles',
              'Under 50 Miles',
              'Under 100 Miles',
              'Under 150 Miles',
              'Under 200 Miles',
              '200+ Miles',
            ]
          },
          {
            name: 'State',
            items: [
              "Alaska",
              "Alabama",
              "Arkansas",
              "American Samoa",
              "Arizona",
              "California",
              "Colorado",
              "Connecticut",
              "District of Columbia",
              "Delaware",
              "Florida",
              "Georgia",
              "Guam",
              "Hawaii",
              "Iowa",
              "Idaho",
              "Illinois",
              "Indiana",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Massachusetts",
              "Maryland",
              "Maine",
              "Michigan",
              "Minnesota",
              "Missouri",
              "Mississippi",
              "Montana",
              "North Carolina",
              " North Dakota",
              "Nebraska",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "Nevada",
              "New York",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Pennsylvania",
              "Puerto Rico",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Virginia",
              "Virgin Islands",
              "Vermont",
              "Washington",
              "Wisconsin",
              "West Virginia",
              "Wyoming"
            ]
          },
          {
            name: 'Vendor Category',
            items: [
              'HVAC',
              'Electrical',
              'Plumbing',
              'Cleaning',
              'Landscaping'
            ]
          },
          {
            name: 'Years in Business',
            items: [
              'Less Than 1 Year',
              '1 - 3 Years',
              '3 - 5 Years',
              '5 - 10 Years',
              '10+ Years',
            ]
          },
          {
            name: 'Approved Applications',
            items: [
              'Less than 5',
              '6 - 15',
              '16 - 24',
              '25+',
            ]
          }
        ],
        headers: [
          { text: '', value: 'imageUrl', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Channel Name', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Channel Manager', value: 'contact_first_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Approved Vendors', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        locationApproved: false,
        viewLocation: false,
        originalLocations: [],
        sowerkTags: [],
        locationFilterTags: [],
        companyType: null
      }
    },
    watch: {
      loading: function() {
        if(this.loading){
          console.log(document);
          return
        }
        document.documentElement.style.overflow = 'auto'
      }
    },
    mounted() {
      this.getCompany();
      this.getSowerkTags();
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      showVideoCard(){
        if(this.showVideo === false){
          this.showVideo = true
        } else {
          this.showVideo = false
        }
      },
      async getCompany() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
        // console.log(data, "oooooooooo")
        if (data.company_type === "false"){
          this.companyType = false
        } else if (data.company_type === "true"){
          this.companyType = true
        }
        // console.log(this.companyType, "hey")
        if (this.$error(status, data.message, data.errors)) return;
        this.company = data;
        if(this.currentUser.is_superuser === false && this.company.locations[0] !== 'There are no locations') {
          for(let i=0; i<this.company.locations.length; i++){
            if(this.company.locations[i].email === this.currentUser.email && this.company.locations[i].phone === this.currentUser.phone) {
              // console.log(this.company.locations[i], "this.company.location")
              this.locations.push(this.company.locations[i]);
              this.originalLocations.push(this.company.locations[i]);
            }
          }
          this.locationApproved = true;
          this.loading = true;
        } else if (this.company.locations[0] !== 'There are no locations') {
          this.locations = this.company.locations;
          this.originalLocations = this.company.locations;
          this.locationApproved = true;
          this.loading = true;
          // console.log(this.locations, 'this.locations!!!!!!!', data)
        } else {
          this.locationApproved = true;
          this.loading = true;
        }
      },
      async getLocations() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/locations/bycompaniesid/' + this.currentUser.companies_id)
          .catch(e => e);
        if (this.$error(status, data.message, data.errors)) {
          // console.log(this.$error(status, data.message, data.errors), 'ERROR')
          this.locationApproved = true;
          this.loading = true;
          return;
        }
        this.$nextTick(function() {
          if(this.currentUser.is_superuser === false) {
            for(let i=0; i<data.location.length; i++){
              if(data.location[i].email === this.currentUser.email && data.location[i].phone === this.currentUser.phone) {
                this.locations.push(data.location[i]);
                this.originalLocations.push(data.location[i]);
              }
            }
          } else {
            this.locations = data.location;
            this.originalLocations = data.location;
            this.locationApproved = true;
            this.loading = true;
            // console.log(this.locations, 'this.locations!!!!!!!')
          }
        })
      },
      async getSowerkTags() {
        await this.$http.get('https://www.sowerkbackend.com/api/sowerktags')
          .then(response => {
            // console.log(response, 'sowerktags')
            this.sowerkTags = response.data;
          })
          .catch(err => {
            console.log(err, 'err for sowerk tags')
          })
      },
      async removeTag(item) {
        // console.log(this.locationFilterTags, 'before removal', item)
        this.locationFilterTags = this.locationFilterTags.filter(locationTag => {
          if(typeof locationTag === 'object' && locationTag.name !== item.name) {
            return locationTag
          } else if (typeof locationTag === 'string' && locationTag !== item) {
            return locationTag
          }
        })
        // console.log(this.locationFilterTags, 'after removal')
      },
      async filterItems() {
        // console.log(this.locationFilterTags, 'dataItems', this.locations)
        this.locations = this.locations.filter(location => {
          for(let i=0; i<this.locationFilterTags.length; i++) {
            if(location.locationtags.length > 0 && location.locationtags.includes(this.locationFilterTags[i].name)) {
              // console.log(location, 'location match')
              return location
            }
          }
        })
        // console.log(this.locations, 'after filter')
      }
    },
  }
</script>

<style scoped>

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>

<template>
  <div overflow-y-auto>
    <!-- <v-skeleton-loader
      v-if="!loading"
      type="card-avatar, article, article, actions"
      min-height="50vh"
      max-width="80vw"
    ></v-skeleton-loader> -->

    <!-- BUSINESS - VIDEO PLAYLIST -->
    <transition name="slide-fade">
      <v-row class="mx-auto mt-8 d-flex flex-column align-center" style="width:100%;" v-if="this.companyType === 'true' && !$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
        <iframe src='https://vimeo.com/showcase/7975303/embed' allowfullscreen frameborder='0' style='width: 90%; height: 90vh;' ></iframe>
      </v-row>
      <v-row class="mx-auto mt-8 d-flex flex-column align-center" style="width:100%;" v-if="this.companyType === 'true' && ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs)">
        <iframe src='https://vimeo.com/showcase/7975303/embed' allowfullscreen frameborder='0' style='width: 100vw; height: 70vh;'></iframe>
      </v-row>
    </transition>

    <!-- VENDOR - VIDEO PLAYLIST -->
    <transition name="slide-fade">
      <v-row class="mx-auto mt-8 d-flex flex-column align-center" style="width:100%;" v-if="this.companyType === 'false' && !$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
        <iframe src='https://vimeo.com/showcase/7955395/embed' allowfullscreen frameborder='0' style='width: 90%; height: 90vh;' ></iframe>
      </v-row>
      <v-row class="mx-auto mt-8 d-flex flex-column align-center" style="width:100%;" v-if="this.companyType === 'false' && ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs)">
        <iframe src='https://vimeo.com/showcase/7955395/embed' allowfullscreen frameborder='0' style='width: 100vw; height: 70vh;'></iframe>
      </v-row>
    </transition>

    <!-- <transition name="slide-fade"> -->
        <!-- <v-row> -->
          <!-- ALL THE BUTTONS, AND VIDEO INFO -->
            <!-- <v-col cols="4"> -->

              <!-- ALL APPLICATION VIDEOS! -->
              <!-- <v-row style="width:100%;padding-left:5%">
                <v-btn @click="showAllVenAppVidsfunc" class="py-4 mb-3" color="primary" style="width:100%;height:70px;padding:15%">
                  <span style="padding-top:5%;padding-left:5%;">
                    <p style="font-size:1.1rem"> ALL APPLICATION</p>
                    <v-spacer></v-spacer>
                    <p style="font-size:1.1rem">VIDEOS</p>
                  </span>
                </v-btn>
              </v-row>
              <v-row style="width:100%;padding-left:5%" v-if="this.showAllVenAppVids === true">
                <v-btn @click="showVidApp1of4func" style="display:block;border: 1px solid white;padding:8% 12% 10% 12%;text-decoration:none;color:inherit;background-color:#404040">
                <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">
                    WATCH NOW -Applications 1/4-
                </span>
                </v-btn>
              </v-row>
              <v-row style="width:100%;padding-left:5%" v-if="this.showAllVenAppVids === true">
                <v-btn @click="showVidApp2of4func" style="display:block;border: 1px solid white;padding:8% 12% 10% 12%;text-decoration:none;color:inherit;background-color:#404040">
                <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">
                    WATCH NOW -Applications 2/4-
                </span>
                </v-btn>
              </v-row>
              <v-row style="width:100%;padding-left:5%" v-if="this.showAllVenAppVids === true">
                <v-btn @click="showVidApp3of4func" style="display:block;border: 1px solid white;padding:8% 12% 10% 12%;text-decoration:none;color:inherit;background-color:#404040">
                <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">
                    WATCH NOW -Applications 3/4-
                </span>
                </v-btn>
              </v-row>
              <v-row style="width:100%;padding-left:5%" v-if="this.showAllVenAppVids === true">
                <v-btn @click="showVidApp4of4func" style="display:block;border: 1px solid white;padding:8% 12% 10% 12%;text-decoration:none;color:inherit;background-color:#404040">
                <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">
                    WATCH NOW -Applications 4/4-
                </span>
                </v-btn>
              </v-row>


              <v-row style="width:100%;padding-left:5%">
                  <v-btn style="display:block;border: 1px solid white;padding:8% 12% 10% 12%;text-decoration:none;color:inherit;background-color:#404040">
                  <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">
                      WATCH NOW -Vendor Applications-
                  </span>
                  </v-btn>
              </v-row>

              <v-row style="width:100%;padding-left:5%">
                  <v-btn style="display:block;border: 1px solid white;padding:8% 12% 10% 12%;text-decoration:none;color:inherit;background-color:#404040">
                  <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">
                      WATCH NOW -Vendor Applications-
                  </span>
                  </v-btn>
              </v-row>
              </v-col> -->

              <!-- JUST THE VIDEOS! -->
              <!-- <v-col cols="8">
                <v-card style="height:500px;width:100%;background-color:#404040;border-radius:1%;" v-if="this.venAppVids.vid1of4 === true">
                    <iframe src="https://player.vimeo.com/video/496999264" allowfullscreen frameborder="0" style="top:0;left:0;width:980px;height:490px;margin-left:8%;border-radius:3%;">
                    </iframe>
                </v-card>

                <v-card style="height:500px;width:100%;background-color:#404040;border-radius:1%;" v-if="this.venAppVids.vid2of4 === true">
                    <iframe src="https://player.vimeo.com/video/495537823" allowfullscreen frameborder="0" style="top:0;left:0;width:980px;height:490px;margin-left:8%;border-radius:3%;">
                    </iframe>
                </v-card>

                <v-card style="height:500px;width:100%;background-color:#404040;border-radius:1%;" v-if="this.venAppVids.vid3of4 === true">
                    <iframe src="https://player.vimeo.com/video/495537809" allowfullscreen frameborder="0" style="top:0;left:0;width:980px;height:490px;margin-left:8%;border-radius:3%;">
                    </iframe>
                </v-card>

                <v-card style="height:500px;width:100%;background-color:#404040;border-radius:1%;" v-if="this.venAppVids.vid4of4 === true">
                    <iframe src="https://player.vimeo.com/video/495537767" allowfullscreen frameborder="0" style="top:0;left:0;width:980px;height:490px;margin-left:8%;border-radius:3%;">
                    </iframe>
                </v-card>
            </v-col> -->
        <!-- </v-row> -->
    <!-- </transition> -->
  </div>
</template>

<script>

  export default {
    layout: 'app',
    name: 'sowerkInfo',
    data() {
      return {
        companyType: null,
        loading: false,
        showAllVenAppVids: false,
        venAppVids: {
          vid1of4: false,
          vid2of4: false,
          vid3of4: false,
          vid4of4: false
        },
      }
    },
    async mounted() {
      console.log(this.currentUser, "ggggggggggg")
      console.log("hello")
      this.getCompany();
    },
    computed: {
      currentUser() {
        console.log(this.$store.state.user.user.user, 'user')
        return this.$store.state.user.user.user;
      }
    },
    methods: {
        showVidApp1of4func() {
            this.venAppVids.vid1of4 = true
            this.venAppVids.vid2of4 = false
            this.venAppVids.vid3of4 = false
            this.venAppVids.vid4of4 = false
        },
        showVidApp2of4func() {
            this.venAppVids.vid1of4 = false
            this.venAppVids.vid2of4 = true
            this.venAppVids.vid3of4 = false
            this.venAppVids.vid4of4 = false
        },
        showVidApp3of4func() {
            this.venAppVids.vid1of4 = false
            this.venAppVids.vid2of4 = false
            this.venAppVids.vid3of4 = true
            this.venAppVids.vid4of4 = false
        },
        showVidApp4of4func() {
            this.venAppVids.vid1of4 = false
            this.venAppVids.vid2of4 = false
            this.venAppVids.vid3of4 = false
            this.venAppVids.vid4of4 = true
        },
        showAllVenAppVidsfunc() {
          if(this.showAllVenAppVids === true){
            this.showAllVenAppVids = false
          } else {
            this.showAllVenAppVids = true
          }
        },
        async getCompany() {
          console.log("glglglglglgl")
            await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id)
            .then(response => {
                // this.feedbackForm.company_name = response.data.account_name;
                console.log(response.data, 'company');
                this.companyType = response.data.company_type
                console.log(this.companyType)
                this.loading = true;
            })
            .catch(err => {
                console.log(err);
            })
        },
    }
  }

</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .7s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

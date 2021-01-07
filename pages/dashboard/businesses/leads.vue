<template>
  <v-app class="grey lighten-3 overflow-scroll" overflow-y-auto>
    <v-row style="width: 100%;" class="d-flex flex-column" v-if="!loading">
      <v-col cols="12" class="mx-2 my-2">
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, actions"
          min-height="30vh"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" class="mx-2 my-2">
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, actions"
          min-height="30vh"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" class="mx-2 my-2">
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, actions"
          min-height="30vh"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <!-- NOT SUPER USER -->
    <transition name="slide-fade">
      <!-- VENDOR USER -->
      <v-card class="my-4 flex-row justify-space-between align-center mx-0" v-if="loading">
        <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto; background-color: #707070">
          <v-col cols="3" style="color:white;width:100%;text-align:center;">
            <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;color:white">SOWERK 101</h1>
          </v-col>
          <v-col cols="5" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
            <p style="font-size:1.1rem">Watch our short video to learn what Customer Application Requests are and why they are important to your SOWerk Account.</p>
          </v-col>
          <!-- VENDOR CHANNELS VIDEO -->
          <v-col cols="4" style="width:100%;text-align:center;">
            <v-btn @click="showVideoCard" color="white" outlined style="width: 80%; border-radius: 20px;" class="py-8">
              <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">WATCH NOW</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </transition>
    <!-- VENDOR USER -->
    <transition name="slide-fade">
      <v-card style="height:450px;width:100%;background-color:white;border-radius:1%;" v-if="showVideo === true">
        <div style="position:relative;border-radius:1%;">
          <iframe src="https://player.vimeo.com/video/495537837" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:900px;height:450px;margin-left:22%;border-radius:3%;">
          </iframe>
        </div>
      </v-card>
    </transition>
    <!--VENDOR'S BUSINESS SEARCH BANNER -->
    <transition name="slide-fade">
      <v-card class="my-4" style="width: 99%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loading">
        <v-row style="width:100%;height:auto" class="d-flex justify-center nowrap">
          <v-col cols="7" style="">
            <v-img height="400px" src="/SoWork Logos with Icons-171.png"></v-img>
          </v-col>

          <v-col cols="5" class="d-flex flex-column justify-center">
            <v-card-title style="color:darkred; font-size: 24px">What Are Customer Application Requests?</v-card-title>
            <v-card-text style="font-size: 18px;">Business every day are using SOWerk to find their next approved vendor. When they identify your account as a potential solution to their needs they can choose to request your application. To make things easier on you the Vendor any of these requests will all be shown here so that you can quickly review and apply.</v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </transition>
  </v-app>
</template>

<script>
  export default {
    name: "leads",
    layout: "app",
    data() {
      return {
        showVideo: false,
        company: {},
        loading: false,
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
    computed: {
      currentUser() {
        return this.$store.getters['user/user'].user.user;
      }
    },
    async mounted() {
      await this.getCompany();
    },
    methods: {
      async getCompany() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
        console.log('company from business/index: ', data.company_type);
        this.company = data;
        this.loading = true;
      },
      showVideoCard(){
        if(this.showVideo === false){
          this.showVideo = true
        } else {
          this.showVideo = false
        }
      },
    }
  }
</script>

<style scoped>

</style>

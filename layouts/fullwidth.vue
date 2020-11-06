<template>
  <v-app dark width="auto" class="d-flex flex-column" style="min-height: 100vh;">
    <v-app-bar :clipped-left="clipped" fixed app color="rgba(0,0,0,0)" flat v-if="$vuetify.breakpoint.mobile">
    <v-sheet  style="position: relative; background-color:rgba(0,0,0,0.5);margin:auto 0;padding: 0;z-index:6"  >
    <v-container class="fill-height" >
      <v-row align="center" justify="center">
        <v-btn text color="white" @click.stop="drawer = !drawer">
          <v-icon >
            menu
          </v-icon>
        </v-btn>
      </v-row>
    </v-container>
    <v-navigation-drawer v-model="drawer" absolute temporary style="height:400px;max-width:none; background:black">
      <v-list-item>
        <v-list-item-content style="overflow: visible;color:white;">
          <v-btn :href="'../../'" style="width: 15vw;" text><v-img :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'" style="width: 16vw;margin-top:15px;" alt="SOWerkHome"></v-img></v-btn>
          <v-list-item-title text><a style="color:white;text-decoration:none; font-size:16px;cursor:pointer" href="/"></a></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          path

        >
          <!-- if we want icons this will allow for icons we will need to find the icons needed.
            <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          -->
          <v-list-item-content>
              <a :href=item.path style="color:white;text-decoration:none; font-size:16px;cursor:pointer"><v-list-item-title>{{ item.title }}</v-list-item-title></a>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
  </v-app-bar>

    <v-app-bar :clipped-left="clipped"
 app color="rgba(0,0,0,0.5)" flat v-else :class="{change_color: scrollPosition > 50}" class="desktop-navbar" style="z-index: 5000">
    <v-container style="padding-top:35px;">
        <v-row >
          <v-btn :href="'../../'" style="width: 15vw;" text><v-img :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'" style="width: 16vw;" alt="SOWerk"></v-img></v-btn>
          <v-spacer></v-spacer>
        <v-btn :href=item.path
          v-for="item in items"
          :key="item.title"
          path
          text color="white"
          style="text-transform: capitalize; letter-spacing: 1px; font-size: 16px; font-weight: 500;"
        >
        {{ item.title }}
        </v-btn>
          <!-- if we want icons this will allow for icons we will need to find the icons needed.
            <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          -->
      </v-row>
    </v-container>

    </v-app-bar>
    <v-content class="py-0 flex-grow-1">
      <nuxt />
    </v-content>

<!-- -----------FOOTER----------- -->
    <v-footer style="background:#a61c00; color: white; height: auto; width: 100%; display: flex;flex-direction: column">
      <v-row style="text-align: center; width: 100%;" class="pb-15 pb-sm-0" align="center">

      <!-- TERMS CONDITIONS PRIVACY -->
      <v-col cols="4" class="text-left d-flex flex-end " style="display: flex; flex-direction: column; font-size:11px;" >
<!--        // JUST FOR NOW THIS WILL BE ADDED LATER I PROMISE-->
      <v-row v-show="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
      <v-col cols="6" style="text-align:left;" >
        <ul>
          <li style="list-style: none"><a href="/DCMAPolicy" style="text-decoration: none;color: white">DCMA Policy</a></li>
          <li style="list-style: none"><a href="/customerTerms" style="text-decoration: none;color: white">Customer Terms</a></li>
          <li style="list-style: none"><a href="/acceptableUsePolicy" style="text-decoration: none;color: white">Acceptable Use Policy</a></li>
          <li style="list-style: none"><a href="/CustomerSpecificSupplement" style="text-decoration: none;color: white">Customer Specific Supplement</a></li>
        </ul>
      </v-col>
       <v-col cols="6" style="text-align:left;" >
        <ul>
          <li style="list-style: none"><a href="/serviceLevelAgreement" style="text-decoration: none;color: white">Service Level Agreement</a></li>
          <li style="list-style: none"><a href="/UserTerms" style="text-decoration: none;color: white">User Terms</a></li>
          <li style="list-style: none"><a href="/privacypolicy" style="text-decoration: none; color: white">Privacy Policy</a></li>
        </ul>
      </v-col>
      </v-row>
      </v-col>
      

        <!-- SOWERK LOGO -->
       <v-col cols="4">
          <img width="120px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153-cropped.png" alt="SOWerk" />
      </v-col>

      <!-- TERMS CONDITIONS PRIVACY  for mobile-->
      <v-col cols="12" class="text-left d-flex flex-end " style="display: flex; flex-direction: column; font-size:11px;" v-show="$vuetify.breakpoint.xs && $vuetify.breakpoint.sm" >
      <v-row >
      <v-col cols="6" style="text-align:left;" >
        <ul>
          <li style="list-style: none"><a href="/DCMAPolicy" style="text-decoration: none;color: white">DCMA Policy</a></li>
          <li style="list-style: none"><a href="/customerTerms" style="text-decoration: none;color: white">Customer Terms</a></li>
          <li style="list-style: none"><a href="/acceptableUsePolicy" style="text-decoration: none;color: white">Acceptable Use Policy</a></li>
          <li style="list-style: none"><a href="/CustomerSpecificSupplement" style="text-decoration: none;color: white">Customer Specific Supplement</a></li>
        </ul>
      </v-col>
       <v-col cols="6" style="text-align:left;" >
        <ul>
          <li style="list-style: none"><a href="/serviceLevelAgreement" style="text-decoration: none;color: white">Service Level Agreement</a></li>
          <li style="list-style: none"><a href="/UserTerms" style="text-decoration: none;color: white">User Terms</a></li>
          <li style="list-style: none"><a href="/privacypolicy" style="text-decoration: none; color: white">Privacy Policy</a></li>
        </ul>
      </v-col>
      </v-row>
      </v-col>


      <!-- FOOTER LINKS -->
       <v-col cols="4" style="display: flex; flex-direction: column;" class="d-none d-sm-flex">
         <ul>
         <li :href=item.path
          v-for="item in items"
          :key="item.title"
          path
          color="white"
          style="text-transform: capitalize; letter-spacing: 1px; font-size: 12px; text-align: left; list-style: none; cursor: pointer"
        >
        {{ item.title }}
        </li>
        </ul>
      </v-col>
      </v-row>
       <!-- COPYRIGHT -->
      <v-row style="font-size: 10.5px; justify-content: center;">
        <p style="text-align: center;">SOWerk &copy; {{ new Date().getFullYear() }}<br>All Rights Reserved.</p>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'about',
          title: 'Vendors',
          path: '../../landingpage/join-service-landing',
        },
        {
          icon: 'Businesses',
          title: 'Businesses',
          path: '../../landingpage/join-product-landing',
        },
       /* {
          icon: 'About SOW',
          title: 'About SOW',
          path: '../../landingpage/about',
        },*/
        {
          icon: 'Register',
          title: 'Register',
          path: '../../register',
        },
        {
          icon: 'Login',
          title: 'Login',
          path: '../../login',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'SOWerk',
    }
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
},
mounted() {
    window.addEventListener('scroll', this.updateScroll);
}
}
</script>

<style scoped>
header {
  background-color: transparent !important;
}

.desktop-navbar:before {
  background: rgb(34,34,34);
  background: linear-gradient(180deg, rgba(255,255,255,0.3) 15%, rgba(0,0,0,0.15) 50%);
  position: absolute;
  content: "";
  height: 200%;
  width: 100%;
  top: 0;
  transform: translateY(0px);
}

.desktop-navbar.v-app-bar--is-scrolled:before {
  transform: translateY(-64px);
}

.change_color {
    background-color:white;
}

  @media(max-width: 375px) {
    img {
      margin-left: -15px !important;
    }
  }





</style>

<template>
    <v-app dark width="auto">
    <v-app-bar :clipped-left="clipped" fixed app color="rgba(0,0,0,0)" flat v-if="$vuetify.breakpoint.mobile">
    <v-sheet  style="position: relative; background-color:rgba(0,0,0,0.5);margin:auto 0;padding: 0;"  >
    <v-container class="fill-height" >
      <v-row align="center" justify="center">
        <v-btn text color="white" @click.stop="drawer = !drawer">
          <v-icon >
            menu
          </v-icon>
        </v-btn>
      </v-row>
    </v-container>
    <v-navigation-drawer v-model="drawer" absolute temporary style="height:400;max-width:none; background:black">
      <v-list-item>
        <v-list-item-content style="overflow: visable;color:white;">
          <v-list-item-title text><a style="color:white;text-decoration:none; font-size:16px;cursor:pointer" href="/">SOWerk</a></v-list-item-title>
          <!-- <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png"></img> -->
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

  <v-app-bar :clipped-left="clipped" hide-on-scroll
 app color="rgba(0,0,0,0.5)" flat v-else >
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
    <v-content class="py-0">
      <nuxt />
    </v-content>

<!-- -----------FOOTER----------- -->
    <v-footer style="background:#a61c00; color: white; height: auto; width: 100%">
      <v-row style="text-align: center" align="center">
      
      <!-- SOWERK IMAGE LOGO -->
      <v-col cols="4">
        <div style="text-align: right;">
        <img width="120px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153-cropped.png" alt="SOWerk"></img>
      </div>
      </v-col>

        <!-- TRADEMARK -->
       <v-col cols="4" style="font-size: 12px">
         <span>SOWerk &copy; {{ new Date().getFullYear() }}</span><br>
         <span>All Rights Reserved.</span>
      </v-col>

      <!-- FOOTER LINKS -->
       <v-col cols="4" style="display: flex; flex-direction: column;">
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
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'about',
          title: 'Service Providers',
          path: '../../landingpage/join-service-landing',
        },
        {
          icon: 'Businesses',
          title: 'Businesses',
          path: '../../landingpage/join-product-landing',
        },
        {
          icon: 'About SOW',
          title: 'About SOW',
          path: '../../landingpage/about',
        },
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
}
</script>

<style scoped>
header {
  background-color: transparent !important;
}

</style>

<template>
  <v-app dark width="auto">
    <v-app-bar :clipped-left="clipped" fixed app color="rgba(0,0,0,0)" flat v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
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
    <v-navigation-drawer v-model="drawer" absolute temporary style="height:400;max-width:none; background-color:rgba(21, 21, 21, 1);">
      <v-list-item>
        <v-list-item-content style="overflow: visable;color:white;">
          <v-list-item-title text>SOWerk</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            path
          >
            <!-- 
              if we want icons this will allow for icons we will need to find the icons needed. 
              <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            -->
            <v-list-item-content>
                <a :href=item.path style="color:white;text-decoration:none;"><v-list-item-title>{{ item.title }}</v-list-item-title></a>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
  </v-app-bar>

  <v-app-bar :clipped-left="clipped" fixed app color="rgba(0,0,0,0.5)" flat v-else>
    <v-container>
        <v-row>
          <v-toolbar-title v-text="title" style="color: white!important; font-weight: bold;"/>
          <v-spacer></v-spacer>
        <v-btn :href=item.path
          v-for="item in items"
          :key="item.title"
          path
          text color="white"
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
    <!--
      legacy code that can be removed. I am keeping in till we are ready to remove
      <v-container>
        <v-row>
          <v-toolbar-title v-text="title" style="color: white!important; font-weight: bold;"/>
          <v-spacer></v-spacer>
          <v-btn href="/landingpage/landinghome" text color="white">Home</v-btn>
          <v-btn href="/landingpage/about" text color="white">About</v-btn>
          <v-btn href="#" text color="white">Features</v-btn>
          <v-btn to="/register" text color="white">Register</v-btn>
          <v-btn to="/login" text color="white">Login</v-btn>
        </v-row>
      </v-container>
      -->
    </v-app-bar>
    <v-content>
        <nuxt />
    </v-content>
    <v-footer :fixed="fixed" app style="background: #a61c00; color: white; display: flex; flex-direction: row; height: 80px;">
      <v-row style="display: flex; justify-content: center;" >
      
      <v-col cols="3">

        </v-col>
        <v-col cols="3" style="text-align: center">
        <span> SOWerk &copy; {{ new Date().getFullYear() }}</span>
        <p>All rights Reserved</p>
      </v-col>
      <v-col cols="3">
         <v-list-item >
      <v-list-item-content style="background: transparent">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
//working to get this to import so that I we will be able to use the nav bar across multiple docs and only needing to pass in the arguments for the actual nav
//import navBar from '~/components/landing/navBar';
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'Home',
          path: '/landingpage/landinghome'
        },
        {
          icon: 'about',
          title: 'About',
          path: '/landingpage/about'
        }
        ,
        {
          icon: 'Features',
          title: 'Features',
          path: '#'
        }
        ,
        {
          icon: 'register',
          title: 'Register',
          path: '/register'
        }
        ,
        {
          icon: 'login',
          title: 'Login',
          path: '/login'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'SOWerk'
    }
  }
}
</script>

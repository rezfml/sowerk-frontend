<template>
    <v-app dark width="auto">
    <v-app-bar :clipped-left="clipped" app color="rgba(0,0,0,0)" flat v-if="$vuetify.breakpoint.mobile">
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
    <v-navigation-drawer v-model="drawer" absolute temporary style="height:400px;max-width:none; background-color:rgba(21, 21, 21, 1);">
      <v-list-item>
        <v-list-item-content style="overflow: visible;color:white;">
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
    </v-app>
</template>
<script>
export default {
   name: "navBar",
    data: () => ({
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
          ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'SOWerk'
    })
  }
</script>

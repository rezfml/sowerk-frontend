<template>
  <v-card min-height="90vh" style="position: relative;" light>
    <v-img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" max-height="150px"></v-img>
    <div style="width: 100%; position: absolute; z-index: 3; top: 75px;" class="d-flex justify-center">
      <v-avatar style=" border: 3px solid #212121;" size="150" rounded class="text-center mx-auto elevation-10">
        <v-img src="https://prociseoutdoors.com/wp-content/uploads/2018/10/bass-pro-shops-logo-png-transparent-2.png" ></v-img>
      </v-avatar>
    </div>

    <v-card-title class="text-center mt-12 pt-12">

      <v-row v-if="location">
        <v-col cols="12" class="py-1">
          <p class="mx-auto text-center primary--text mb-0" style="font-size: 24px;">{{ location.name }}</p>
        </v-col>
        <v-col cols="12" class="py-1">
          <p class="mb-2" style="word-break: break-word!important;"><span class="primary--text">142</span> Approved SOWerk Providers At This Facility</p>
        </v-col>
        <v-col cols="12" md="6" class="py-1">
          <v-btn outlined rounded block color="primary" class="px-5">Dashboard</v-btn>
        </v-col><v-col cols="12" md="6" class="py-1">
          <v-btn outlined rounded block color="primary" class="px-10">Share</v-btn>
        </v-col>
      </v-row>

      <v-row v-else>
        <v-col cols="12" class="py-1">
          <p class="mx-auto text-center primary--text mb-0" style="font-size: 24px;">Bass Pro Shops</p>
        </v-col>
        <v-col cols="12" class="py-1">
          <p class="mb-2"><span class="primary--text">2,438</span> Approved SOWerk Providers</p>
          <p><span class="primary--text">169</span> Facilities Nationwide</p>
          <v-btn outlined rounded color="primary" class="px-10">Share</v-btn>
        </v-col>
      </v-row>

    </v-card-title>

    <v-divider class="mx-auto" style="width: 90%;"></v-divider>

    <v-card-text class="mx-auto" style="width: 80%;">
      <template v-if="location">
        <p class="title text-center primary--text">About</p>
        <p class="body-2">Address: {{location.address}}</p>
        <p class="body-2">Founded: 1971</p>
        <p class="body-2">Joined SOWerk: 2020</p>
      </template>
      <template v-else>
        <p class="title text-center primary--text">About</p>
        <p class="body-2">BPS Direct, LLC is an American privately held retailer of hunting, fishing, camping and other related outdoor recreation merchandise. Bass Pro Shops supports and sells merchandise for the National Audubon Society.</p>
        <p class="body-2">Address: 1935 S Campbell Ave, Springfield, MO 65807</p>
        <p class="body-2">Founded: 1971</p>
        <p class="body-2">Joined SOWerk: 2020</p>
      </template>
    </v-card-text>

    <v-divider class="mx-auto" style="width: 90%;"></v-divider>

    <v-card-text class="mx-auto" style="width: 80%;">
      <template v-if="location">
        <p class="title text-center primary--text">Main Contact</p>
        <p class="body-2">{{location.name}}</p>
        <p class="body-2">{{location.email}}</p>
        <p class="body-2">{{location.phone}}</p>
      </template>
      <template v-else>
        <p class="title text-center primary--text">Profile Contact</p>
        <p class="body-2">BPS Direct, LLC is an American privately held retailer of hunting, fishing, camping and other related outdoor recreation merchandise. Bass Pro Shops supports and sells merchandise for the National Audubon Society.</p>
        <p class="body-2">Stan Great</p>
        <p class="body-2">sgreat@bpsmail.com</p>
        <p class="body-2">(234) 543-8968</p>
      </template>
    </v-card-text>

  </v-card>
</template>

<script>
  export default {
    name: "ProfileCard",
    props: [
      'location'
    ]
  };
</script>

<style scoped>

</style>

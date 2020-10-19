<template>
  <v-card class="white pt-0 mt-12 mb-4" style="width: 100%">
    <v-container class="pt-0" fluid>
      <v-card-title
              style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;"
              class="primary white--text font-weight-regular red-gradient"
      >{{ title }}</v-card-title>
      <v-card-actions class="d-flex justify-end px-4 py-0">
        <v-row class="py-0">
          <v-spacer></v-spacer>
          <v-col cols="4" class="py-0">
            <v-text-field label="Search" light></v-text-field>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-card-text class="pt-0 pb-2">
        <v-data-table
                :items="items"
                :headers="tableProperties"
                :items-per-page="10"
                style="font-size: 14px;"
        >
          <template v-slot:item.services="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p>{{item.serviceName}}</p>
            </v-row>
          </template>
          <template class="d-flex" v-slot:item.companyName="{item}">
            <v-row class="d-flex">
              <p><v-img style="width: 30px !important; height: 30px; border-radius: 50px;" :src="item.img"></v-img> {{item.companyName}}</p>
            </v-row>
          </template>
          <template v-slot:item.full_name="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p>{{item.contact}}</p>
            </v-row>
          </template>
          <template v-slot:item.email="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p>{{item.email}}</p>
            </v-row>
          </template>
          <template v-slot:item.phone="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p>{{item.phone}}</p>
            </v-row>
          </template>
          <template v-slot:item.addressCityState="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p>{{item.addressName}}</p>
            </v-row>
          </template>
          <template v-slot:item.yearFounded="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p>{{item.yearFounded}}</p>
            </v-row>
          </template>
          <template v-slot:item.radius="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p>{{item.radius}}</p>
            </v-row>
          </template>
          <template v-slot:item.actions="{ item }" class="d-flex">
            <v-btn color="green" outlined @click="Approve(item)">Approve</v-btn>
            <v-btn block color="primary" outlined>Deny</v-btn>
            <v-btn block color="primary" >Review</v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name:'activeapplicationscard',
    props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'company', "getPMService", "getSPCompany", "getSPLocation"],
    data() {
      return {

      }
    },
    async created() {
      console.log(this.items, 'yayyy');
    },
    methods: {
      async Approve(itemVal) {
        console.log(itemVal, 'itemVal');
        const changes = {
          approval_status: 1
        };
        const approvedproviderconnection = {
          propertymanager_id: itemVal.pmcompanies_id,
          serviceprovider_id: itemVal.spcompanies_id
        }
        await this.$http.put('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/applications/' + itemVal.id, changes)
          .then(response => {
            console.log('success in changes', response)
          })
          .catch(err => {
            console.log('err', err);
          })
        await this.$http.post('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/approvedproviderconnection', approvedproviderconnection)
          .then(response => {
            console.log('success', response);
            this.$router.go();
          })
          .catch(err => {
            console.log('err', err)
          })
      }
    }
  }
</script>

<style>

</style>

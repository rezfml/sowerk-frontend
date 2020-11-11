<template>
  <v-card class="white pt-0 mt-12 mb-4" style="width: 100%">
    <v-container class="pt-0" fluid>
      <v-card-title
              style="position: absolute; top: -30px; left: 25px; width: 50%; border-radius: 3px; font-size: 18px;"
              class="primary white--text font-weight-regular red-gradient"
      >{{ title }}</v-card-title>
<!--      <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loadingRequests">-->
<!--        <v-progress-circular-->
<!--          indeterminate-->
<!--          color="primary"-->
<!--          :size="50"-->
<!--        ></v-progress-circular>-->
<!--      </v-col>-->
      <v-card-actions class="d-flex justify-end px-4 py-0">
        <v-row class="py-0">
          <v-spacer></v-spacer>
          <v-col cols="4" class="py-0">
            <v-text-field label="Search" light></v-text-field>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-card-text class="pt-0 pb-2" v-if="items.length > 0">
        <v-data-table
                :items="items"
                :headers="tableProperties"
                :items-per-page="5"
                style="font-size: 14px;"
        >
          <template v-slot:item.services="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p class="mx-auto mb-0">{{item.serviceName}}</p>
            </v-row>
          </template>
          <template class="d-flex" v-slot:item.companyName="{item}">
            <v-row class="d-flex">
<!--              <p><v-img style="width: 30px !important; height: 30px; border-radius: 50px;" :src="item.img"></v-img> {{item.companyName}}</p>-->
              <p class="mx-auto mb-0">{{item.companyName}}</p>
            </v-row>
          </template>
          <template v-slot:item.full_name="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p class="mx-auto mb-0">{{item.contact}}</p>
            </v-row>
          </template>
          <template v-slot:item.email="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p class="mx-auto mb-0">{{item.email}}</p>
            </v-row>
          </template>
          <template v-slot:item.phone="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p class="mx-auto mb-0">{{item.phone}}</p>
            </v-row>
          </template>
          <template v-slot:item.addressCityState="{item}">
            <v-row class="d-flex" cols="12" md="6">
              <p class="mx-auto mb-0">{{item.addressName}}</p>
            </v-row>
          </template>
<!--          <template v-slot:item.yearFounded="{item}">-->
<!--            <v-row class="d-flex" cols="12" md="6">-->
<!--              <p class="mx-auto mb-0">{{item.yearFounded}}</p>-->
<!--            </v-row>-->
<!--          </template>-->
<!--          <template v-slot:item.radius="{item}">-->
<!--            <v-row class="d-flex" cols="12" md="6">-->
<!--              <p class="mx-auto mb-0">{{item.radius}}</p>-->
<!--            </v-row>-->
<!--          </template>-->
          <template v-slot:item.actions="{ item }" class="d-flex">
            <v-btn color="#707070" outlined  @click="Approve(item)">Approve</v-btn>
            <v-btn block color="#802525" outlined @click="Deny(item)">Deny</v-btn>
            <v-btn block color="primary"  @click="Review(item)">Review</v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name:'activeapplicationscard',
    props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'company', "loadingRequests"],
    data() {
      return {

      }
    },
    async mounted() {
      console.log(this.items, 'yayyy');
    },
    methods: {
      async Approve(itemVal) {
        console.log(itemVal, 'itemVal');
        const approvalChanges = {
          approval_status: 1
        };
        const approvedproviderconnection = {
          propertymanager_id: itemVal.pmcompanies_id,
          serviceprovider_id: itemVal.spcompanies_id
        }
        await this.$http.put('https://www.sowerkbackend.com/api/applications/' + itemVal.id, approvalChanges)
          .then(response => {
            console.log('success in changes', response)
          })
          .catch(err => {
            console.log('err', err);
          })
        await this.$http.put('https://www.sowerkbackend.com/api/companies/' + itemVal.pmcompanies_id, approvalChanges)
          .then(response => {
            console.log('success in changes', response)
          })
          .catch(err => {
            console.log('err', err);
          })
        await this.$http.post('https://www.sowerkbackend.com/api/approvedproviderconnection', approvedproviderconnection)
          .then(response => {
            console.log('success', response);
            this.$router.go();
          })
          .catch(err => {
            console.log('err', err)
          })
      },
      async Deny(itemVal) {
        console.log(itemVal, 'itemVal deny');
        const denialChanges = {
          approval_status: 2
        }
        await this.$http.put('https://www.sowerkbackend.com/api/applications/' + itemVal.id, denialChanges)
          .then(response => {
            console.log('success in changes', response)
            this.$router.go();
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async Review(itemVal) {
        console.log(itemVal)
        this.$router.push('/dashboard/vendors/applicants/' + itemVal.id)
      }
    }
  }
</script>

<style>

</style>

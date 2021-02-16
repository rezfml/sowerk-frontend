<template>
  <v-card class="mt-16 mb-4" style="width: 80vw;" v-if="!success">
    <v-card-title
      style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient"
    >{{ title }}</v-card-title>
        <!--      <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loadingRequests">-->
        <!--        <v-progress-circular-->
        <!--          indeterminate-->
        <!--          color="primary"-->
        <!--          :size="50"-->
        <!--        ></v-progress-circular>-->
        <!--      </v-col>-->

    <v-text-field clearable outlined class="pt-12" style="width: 80%; margin-left: 10%;" label="Search By Channel Name" v-model="searchChannels" light></v-text-field>

    <v-data-table
      :search="searchChannels"
      :headers="tableProperties"
      :items="bizAndVendorData"
      :items-per-page="5"
      item-key="businessChannelId"
      class=""
      :expanded.sync="expanded"
      show-expand
      single-expand
      >

      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-simple-table
          fixed-header
          height="300px"
          >
            <template v-slot:default>
                <thead>
                  <tr>
                    <th style="color:darkred">Application Category</th>
                    <th style="color:darkred">Application Type</th>
                    <th style="color:darkred">Company</th>
                    <th style="color:darkred">Channel</th>
                    <th style="color:darkred">Contact Name</th>
                    <!-- <th style="color:darkred">Approved Connections</th> -->
                    <th style="color:darkred">Review</th>
                    <th style="color:darkred">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="app in item.vendorAppsForThisChannel" :key="app.id">
                    <td>{{ item.appCat }}</td>
                    <td>{{ item.appType }}</td>
                    <td>{{ app.companyName }}</td>
                    <td>{{ app.channelName }}</td>
                    <td>{{ app.contact }}</td>
                    <!-- <td>{{ app.approveConnections }}</td> -->

                    <td>
                      <v-btn class="my-1" block color="primary"  @click="Review(app)">Review</v-btn>
                    </td>

                    <td>
                      <v-btn class="my-1" block color="#707070" outlined  @click="Approve(app)">Approve</v-btn>
                      <v-btn class="my-1" block color="#802525" outlined @click="Deny(app)">Deny</v-btn>
                    </td>
                  </tr>
                </tbody>
            </template>
          </v-simple-table>
        </td>
      </template>

<!--      &lt;!&ndash; <template v-slot:item.bizAndVendorData="{ item }">-->
<!--        <td style="color:red;">{{ item.bizAndVendorData.businessChannelName }}</td>-->
<!--      </template>-->

<!--      <template v-slot:item.bizAndVendorData="{ item }">-->
<!--        <p style="color:red;">{{ item.bizAndVendorData[0].vendorAppsForThisChannel.length }}</p>-->
<!--      </template> &ndash;&gt;-->

    </v-data-table>
  </v-card>

  <v-card v-else style="height: auto;" class="d-flex flex-column align-center">
    <v-img style="max-height: 250px;" class="mt-10" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
    <v-card-title class="mt-2" color="primary">Your SOWerk Application Has Been Approved!</v-card-title>
    <v-btn color="primary" :href="'../../../dashboard/vendors/applicants'" class="mb-4" rounded>Return To SOWerk Request Dashboard</v-btn>
  </v-card>
</template>

<script>
  export default {
    name:'activeapplicationscard',
    props: ['bizAndVendorData', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'company', "loadingRequests"],
    data() {
      return {
        searchChannels: '',
        denialMessage: {
          service: '',
          company: '',
          primary_contact_first_name: this.$store.state.user.user.user.first_name,
          primary_contact_last_name: this.$store.state.user.user.user.last_name,
          message: '',
          location: '',
          userprofiles_id: this.$store.state.user.user.user.id,
          pmMessageRead: false,
          spMessageRead: false,
          spLocationId: Number,
          spLocationName: Number
        },
        success: false,
        expanded: [],
        singleExpand: true,
      }
    },
    async mounted() {
      console.log(this.bizAndVendorData, 'yayyy');
    },
    methods: {
      async Approve(itemVal) {
        if(confirm("You are about to approve this Vendor's application. Feel free to send them any pertinent documents at this time.")){

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
              this.success = true
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

          await this.messageVendorAboutApproval();

        } else {
          console.log("did not confirm")
        }
      },
      async messageVendorAboutApproval() {
        console.log(this.application);

        let pmLocation;
        let applicationName;
        let companyName;
        let spCompanyName;

        await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + this.application.pmuserforms_id)
          .then(response => {
            console.log('SUCCESS userform', response)
            applicationName = response.data.name
          })
          .catch(err => {
            console.log(err);
          })

        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.application.pmcompanies_id)
          .then(response => {
            console.log('SUCCESS company', response)
            companyName = response.data.account_name
          })
          .catch(err => {
            console.log(err);
          })


        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.application.spcompanies_id)
          .then(response => {
            console.log('SUCCESS company', response)
            spCompanyName = response.data.account_name
          })
          .catch(err => {
            console.log(err);
          })

        // No longer needed as part of the message
        // await this.$http.get('https://www.sowerkbackend.com/api/services/' + this.application.pmservices_id)
        //   .then(response => {
        //     console.log('SUCCESS', response)
        //     this.denialMessage.service = response.data.service.name;
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   })

        // Get Property Manager Location that application was sent to
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + this.application.pmlocations_id)
          .then(response => {
            console.log('SUCCESS', response)
            pmLocation = response.data.name;
            this.approvalMessage.location = response.data.name + ' - ' + response.data.address + ' '+ response.data.city + ' ' + response.data.state + ' ' + response.data.zipcode.toString()
            this.approvalMessage.service = response.data.services[0].name
            this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.application.pmcompanies_id)
              .then(responseVal => {
                console.log(responseVal.data)
                this.approvalMessage.company = responseVal.data.account_name
              })
          })
          .catch(err => {
            console.log(err);
          })

        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + this.application.splocations_id)
          .then(response => {
            console.log('SUCCESS', response)
            this.approvalMessage.spLocationId = response.data.id
            this.approvalMessage.spLocationName = response.data.name
          })
          .catch(err => {
            console.log(err);
          })

        // Congratulations __vendor account name__, the approved Vendor application that your company applied for (__application name__)  has been reviewed. __business account name__ has approved your application and you are now connected to __business channel name__, a channel of __account name__. We will automatically update your profile details so others on SOWerk know you are a trusted solution for __business account name__. You will also be able to view and maintain your relationship details with __business account name__ by viewing their profile. This can be found in the Customer section of your navigation.
        this.approvalMessage.message = `Congratulations ${spCompanyName}, the approved Vendor application that your company applied for ${applicationName} has been reviewed. ${companyName} has approved your application and you are now connected to ${pmLocation}, a channel of ${companyName}. We will automatically update your profile details so others on SOWerk know you are a trusted solution for ${pmLocation}. You will also be able to view and maintain your relationship details with ${companyName} by viewing their profile. This can be found in the Customer section of your navigation.`
        console.log(this.approvalMessage, this.application, 'wow submit this.approvalMessage and application')
        await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.application.spcompanies_id, this.approvalMessage)
          .then(response => {
            console.log('SUCCESS', response)
          })
          .catch(err => {
            console.log(err);
          })

        await this.$router.go();
      },
      async Deny(itemVal) {
        console.log(itemVal, 'itemVal deny');
        const denialChanges = {
          approval_status: 2
        }
        await this.$http.put('https://www.sowerkbackend.com/api/applications/' + itemVal.id, denialChanges)
          .then(async(response) => {
            console.log('success in changes', response)
            let pmLocation;
            let applicationName;
            let companyName;
            let spCompanyName;

            await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + itemVal.pmuserforms_id)
              .then(response => {
                console.log('SUCCESS userform', response)
                applicationName = response.data.name
              })
              .catch(err => {
                console.log(err);
              })

            await this.$http.get('https://www.sowerkbackend.com/api/companies/' + itemVal.pmcompanies_id)
              .then(response => {
                console.log('SUCCESS company', response)
                companyName = response.data.account_name
              })
              .catch(err => {
                console.log(err);
              })


            await this.$http.get('https://www.sowerkbackend.com/api/companies/' + itemVal.spcompanies_id)
              .then(response => {
                console.log('SUCCESS company', response)
                spCompanyName = response.data.account_name
              })
              .catch(err => {
                console.log(err);
              })

            // No longer needed as part of the message
            // await this.$http.get('https://www.sowerkbackend.com/api/services/' + itemVal.pmservices_id)
            //   .then(response => {
            //     console.log('SUCCESS', response)
            //     this.denialMessage.service = response.data.service.name;
            //   })
            //   .catch(err => {
            //     console.log(err);
            //   })

            // Get Property Manager Location that application was sent to
            await this.$http.get('https://www.sowerkbackend.com/api/locations/' + itemVal.pmlocations_id)
              .then(response => {
                console.log('SUCCESS', response)
                pmLocation = response.data.name;
                this.denialMessage.location = response.data.name + ' - ' + response.data.address + ' '+ response.data.city + ' ' + response.data.state + ' ' + response.data.zipcode.toString()
                this.denialMessage.service = response.data.services[0].name
                this.$http.get('https://www.sowerkbackend.com/api/companies/' + itemVal.pmcompanies_id)
                  .then(responseVal => {
                    console.log(responseVal.data)
                    this.denialMessage.company = responseVal.data.account_name
                  })
              })
              .catch(err => {
                console.log(err);
              })

            await this.$http.get('https://www.sowerkbackend.com/api/locations/' + itemVal.splocations_id)
              .then(response => {
                console.log('SUCCESS', response)
                this.denialMessage.spLocationId = response.data.id
                this.denialMessage.spLocationName = response.data.name
              })
              .catch(err => {
                console.log(err);
              })

            // Dear __vendor account name__, the application you submitted (__application name__) to __business channel name__, a channel of __business account name__, was not approved at  this time.
            this.denialMessage.message = "Dear " + spCompanyName + ", the application you submitted, " + applicationName + ", to " + pmLocation + ", a channel of " + companyName + ", was not approved at this time. \n\n If the denial reason was provided it will be listed below. Please keep in mind there are many ways to connect to businesses and their channels here on SOWerk including ones where you may have been denied before.\n\n" + itemVal.denial_reason;
            console.log(this.denialMessage, itemVal, 'wow submit denial and application')
            await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + itemVal.spcompanies_id, this.denialMessage)
              .then(response => {
                console.log('SUCCESS', response)
              })
              .catch(err => {
                console.log(err);
              })
          })
          .catch(err => {
            console.log('err', err);
          })
        await this.$router.go();
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

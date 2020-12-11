<template>
  <v-container class="px-0" style="max-width: 100%">
    <v-row style="width: 95%;" class="mx-auto">
      <v-col cols="12" class="d-flex flex-column justify-space-between">
        <p class="white--text text-h5 font-weight-bold">Search Accepting Businesses</p>
        <v-card class="white">
          <div style="width: 100%; height: 20vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading">
            <v-progress-circular
              indeterminate
              color="primary"
              :size="50"
            ></v-progress-circular>
          </div>
          <v-data-table
            :items="requestingLocations"
            :headers="providerHeaders"
            v-else
          >
            <template v-slot:item.imageUrl="{item}"  >
              <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"></v-img>
              <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"></v-img>
            </template>
            <template v-slot:item.actions="{ item }" class="d-flex">
              <v-btn color="primary" block class="my-2" :to="'/dashboard/businesses/' + item.id">View</v-btn>
            </template>
          </v-data-table>

<!--          <v-simple-table>-->
<!--            <thead>-->
<!--              <tr>-->
<!--                <th class="primary&#45;&#45;text">ID</th>-->
<!--                <th class="primary&#45;&#45;text">Facility</th>-->
<!--                <th class="primary&#45;&#45;text">Address</th>-->
<!--                <th class="primary&#45;&#45;text">Primary Contact</th>-->
<!--                <th class="primary&#45;&#45;text">Email</th>-->
<!--                <th class="primary&#45;&#45;text">Phone</th>-->
<!--                <th class="primary&#45;&#45;text">Actions</th>-->
<!--              </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--              <tr v-for="(business, index) in businesses">-->
<!--                <div v-for="(location, locationIndex) in business.locations">-->
<!--                  <div v-for="(service, serviceIndex) in location.services">-->
<!--&lt;!&ndash;                    <div v-for="(userform, userformIndex) in userforms">&ndash;&gt;-->
<!--&lt;!&ndash;                      {{userform}}&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                      <template v-if="userform.active">&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <p>{{userform.active}}</p>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                      </template>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <td>{{location.id}}</td>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <td>{{location.name}}</td>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <td>{{location.address}}</td>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <td>{{location.contact_first_name}}</td>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <td>{{location.email}}</td>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <td>{{location.phone}}</td>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--              </tr>-->
<!--            </tbody>-->
<!--          </v-simple-table>-->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "requesting",
  layout: "app",
  data() {
    return {
      businesses: [],
      services: [],
      requestingBusinesses: [],
      requestingLocations: [],
      activeUserforms: [],
      providerHeaders: [
        { text: '', value: 'imageUrl', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
        { text: 'Facility', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        { text: 'Primary Contact', value: 'contact_first_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        { text: 'Phone', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
      ],
      loading: false,
    }
  },
  mounted() {
    this.getActiveUserforms();
    this.getAllCompanies();
  },
  methods: {
    async getActiveUserforms() {
        this.loading = true;
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/userforms/byStatusId/1').catch(e => e);
        this.activeUserforms = data;
        console.log(this.activeUserforms, 'active userforms!!')
    },
    async getAllCompanies() {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/type/true')
        .then(response => {
          console.log(response.data, 'get ALL COMPANIES');
          for(let i = 0; i < response.data.length; i++) {
            this.getWholeCompanyObject(response.data[i].id);
          }
        })
        .catch(err => {
          console.log('err', err)
        });
    },
    async createRequestingCompaniesArray(business) {
      console.log(business, 'BUSINESS')
      if(business.locations[0] !== 'There are no locations') {
        for(const location of business.locations) {
          console.log(location, 'LOCATION OF BUSINESS LOCATIONS')
          if (location && Array.isArray(location.userforms) && location.userforms.length > 0 && location.userforms[0] !== 'There are no userforms') {
            console.log(location, 'LOCATION OF BUSINESS LOCATIONS THAT MEETS CONDITION')
            for (const userform of location.userforms) {
              console.log(location.userforms, 'LOCATION THAT HAS USERFORM')
              for (const activeUserform of this.activeUserforms) {
                if (activeUserform.id === userform.id) {
                  this.requestingBusinesses.push(business);
                }
              }
            }
          }
        }
      }
      console.log(this.requestingBusinesses, 'REQUESTING BUSINESSES')
      let uniqueChars = [...new Set(this.requestingBusinesses)];
      console.log(uniqueChars);
      this.requestingBusinesses = uniqueChars;
      this.requestingBusinesses.forEach(business => {
        business.locations.forEach(location => {
          this.requestingLocations.push(location);
        })
      })

      console.log(this.requestingLocations);
      let uniqueLocations = [...new Set(this.requestingLocations)];
      console.log(uniqueLocations);
      this.requestingLocations = uniqueLocations;
      this.loading = false;

    },
    async getWholeCompanyObject(business_id) {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/' +  business_id)
        .then(response => {
          console.log(response, 'COMPANY RESPONSE')

          if(response.data.locations[0] !== 'There are no locations') {
            this.getLocations(response.data);
          }
        })
        .catch(err => {
          console.log('err', err)
        });
    },
    async getLocations(business) {
      await this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + business.id)
        .then(response => {
          console.log(response.data.location, 'locations for company')
          let business = {
            id: response.data.location.id,
            locations: response.data.location,
          }
          this.createRequestingCompaniesArray(business);
        })
    }
    // getAllUserforms(businesses) {
    //   console.log('hello');
    //   console.log(businesses);
    //   for(const business of this.businesses) {
    //     if(business && Array.isArray(business.locations) && business.locations.length > 0) {
    //       for(const location of business.locations) {
    //         if(location && Array.isArray(location.services) && location.services.length > 0) {
    //           for(const service of location.services) {
    //             if(service && Array.isArray(service.userforms) && service.userforms.length > 0) {
    //              this.services.push(service);
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }
}
</script>

<style scoped>

</style>

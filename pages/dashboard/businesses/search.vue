<template>
  <v-container class="px-0" style="max-width: 100%">
    <v-row style="width: 95%;" class="mx-auto">
      <v-col cols="12" class="d-flex flex-column justify-space-between">
        <p class="white--text text-h5 font-weight-bold">All Customers</p>
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
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
          class: 'primary--text font-weight-regular'
        },
        { text: 'Facility', value: 'name', class: 'primary--text font-weight-regular' },
        { text: 'Address', value: 'address', class: 'primary--text font-weight-regular' },
        { text: 'Primary Contact', value: 'contact_first_name', class: 'primary--text font-weight-regular' },
        { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
        { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
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
    },
    async getAllCompanies() {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/type/true')
        .then(response => {
          console.log(response.data);
          for(let i = 0; i < response.data.length; i++) {
            this.getWholeCompanyObject(response.data[i].id);
          }
          this.createRequestingCompaniesArray(this.businesses);
        })
        .catch(err => {
          console.log('err', err)
        });
    },
    async createRequestingCompaniesArray(business) {
      for(const location of business.locations) {
        if (location && Array.isArray(location.services) && location.services.length > 0) {
          for (const service of location.services) {
            if (service && Array.isArray(service.userforms) && service.userforms.length > 0) {
              for (const userform of service.userforms) {
                for (const activeUserform of this.activeUserforms) {
                  if (activeUserform.id === userform.id) {
                    this.requestingBusinesses.push(business);
                  }
                }
              }
            }
          }
        }
      }
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
          let business = {
            id: response.data.id,
            locations: response.data.locations,
          }
          this.createRequestingCompaniesArray(business);
        })
        .catch(err => {
          console.log('err', err)
        });
    },
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

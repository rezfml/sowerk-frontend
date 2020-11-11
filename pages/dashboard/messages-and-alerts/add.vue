<template>
  <div style="width: 100%;" class="d-flex flex-column align-center" overflow-y-auto>
    <v-row class="mt-10 d-flex flex-column" style="width: 80%; height: auto;">
      <v-text-field style="max-height: 15vh !important;" v-model="search" placeholder="Search companies here..." label="Search Company And Select To Send Message:"/>
      <MessageCompanyCard
        :items="filteredCompanies"
        title="Companies"
        :tableProperties="headers"
        slug="/dashboard/messages-and-alerts/add"
        :selectCompany="selectCompany"
        class="mt-12"
      ></MessageCompanyCard>
    </v-row>
    <v-form class="my-10 d-flex flex-column align-center" style="width: 80%;" v-if="companySelection === true">
      <v-col cols="12" class="d-flex justify-center">
        <v-text-field class="mx-2 text-h6" style="width: 30%;" readonly label="From" v-model="messageForm.company"></v-text-field>
        <v-text-field class="mx-2 text-h6" style="width: 20%;" readonly label="First Name" v-model="messageForm.primary_contact_first_name"></v-text-field>
        <v-text-field class="mx-2 text-h6" style="width: 20%;" readonly label="Last Name" v-model="messageForm.primary_contact_last_name"></v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex">
        <v-select cols="8"  label="Which Location" v-model="messageForm.location" :items="locations" name="location" item-text="name address city state zipcode" item-value="name address city state zipcode" class="text-caption mx-1">
          <template slot="selection" slot-scope="data">
            <v-card-text class="text-h6" @click="getServices(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</v-card-text>
          </template>
          <template slot="item" slot-scope="data">
            <v-card-text class="text-h6" @click="getServices(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</v-card-text>
          </template>
        </v-select>
        <v-select cols="4"  label="Your Service For Location Goes Here" v-model="messageForm.service" :items="services" name="service" item-text="name" item-value="name" class="text-caption mx-1">
          <template slot="selection" slot-scope="data">
            <v-card-text class="text-h6">{{ data.item.name }}</v-card-text>
          </template>
          <template slot="item" slot-scope="data">
            <v-card-text class="text-h6">{{ data.item.name }}</v-card-text>
          </template>
        </v-select>
      </v-col>
      <v-col cols="12" class="d-flex">
        <v-select cols="12"  label="To" :items="spcompanylocations" name="location" item-text="name address city state zipcode" item-value="name address city state zipcode" class="text-caption mx-1">
          <template slot="selection" slot-scope="data">
            <v-card-text class="text-h6" @click="getLocationForSP(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</v-card-text>
          </template>
          <template slot="item" slot-scope="data">
            <v-card-text class="text-h6" @click="getLocationForSP(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</v-card-text>
          </template>
        </v-select>
      </v-col>
      <v-text-field style="width: 100%;" class="text-h6" placeholder="Message Goes Here" v-model="messageForm.message"></v-text-field>
      <v-btn color="primary" class="py-5 px-10" large @click="submit">Send Message</v-btn>
    </v-form>
  </div>
</template>

<script>
  import MessageCompanyCard from '@/components/dashboard/MessageCompanyCard'

  export default {
    name: 'addMessage',
    layout: 'app',
    components: {
      MessageCompanyCard
    },
    data() {
      return {
        messageForm: {
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
        companiesFilter: [],
        search: '',
        sendToId: Number,
        companySelection: false,
        company: {

        },
        spcompany: {

        },
        spcompanylocations: [],
        locations: [],
        services: [],
        headers: [
          { text: 'ID', value: 'id', class: 'primary--text font-weight-regular'},
          { text: 'Services Offered', value: 'service', class: 'primary--text font-weight-regular' },
          { text: 'Company', value: 'company', class: 'primary--text font-weight-regular' },
          { text: 'Address', value: 'full_address', class: 'primary--text font-weight-regular' },
        ]
      }
    },
    async mounted() {
      console.log(this.currentUser);
      await this.getCompanies();
      await this.getCompany();
    },
    computed: {
      currentUser() {
        console.log(this.$store.state.user.user.user, 'user')
        return this.$store.state.user.user.user;
      },
      filteredCompanies() {
        return this.companiesFilter.filter(company => {
          return company.account_name.toLowerCase().includes(this.search.toLowerCase());
        })
      }
    },
    methods: {
      async getCompanies() {
        await this.$http.get('https://www.sowerkbackend.com/api/companies')
          .then(response => {
            this.companiesFilter = response.data;
            console.log(response.data, 'response.data', this.companiesFilter);
            console.log(this.companiesFilter, 'companiesFilter', response.data, 'data');
          })
          .catch(err => {
            console.log(err);
          })
        for(let i=0; i< this.companiesFilter.length; i++) {
          console.log(this.companiesFilter[i], 'hi');
          this.companiesFilter[i].servicesOffered = String(this.companiesFilter[i].servicesOffered).replace(/"/g,"").replace(",", ', ').replace("{", '').replace("}", '');
        }
      },
      async getCompany() {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id)
          .then(response => {
            this.company = response.data;
            this.locations = response.data.locations
            this.messageForm.company = response.data.account_name;
            console.log(this.company, 'company');
          })
          .catch(err => {
            console.log(err);
          })
      },
      async submit() {
        console.log(this.messageForm, 'this.messageForm')
        this.messageForm.location = `${this.messageForm.location.name} - ${this.messageForm.location.address} ${this.messageForm.location.city}, ${this.messageForm.location.state} ${this.messageForm.location.zipcode}`
        console.log(this.messageForm, 'after location change')
        await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.sendToId, this.messageForm)
          .then(response => {
            console.log('SUCCESS', response)
          })
          .catch(err => {
            console.log(err);
          })
        this.$router.push('/dashboard/messages-and-alerts');
      },
      async selectCompany(companyParam) {
        this.companySelection = true;
        this.sendToId = companyParam.id;
        this.messageForm.recieversId = companyParam.id
        this.getSPCompany(companyParam.id);
      },
      async getSPCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            this.spcompany = response.data;
            this.spcompanylocations = response.data.locations;
          })
          .catch(err => {
            console.log(err);
          })
      },
      async getServices(item) {
        this.services = item.services
        console.log(this.services, 'this.services');
      },
      async getLocationForSP(item) {
        console.log(item, 'location for sp');
        this.messageForm.spLocationId = item.id;
        this.messageForm.spLocationName = `${item.name} - ${item.address} ${item.city}, ${item.state} ${item.zipcode}`
      }
    },
  }

</script>

<style scoped>

</style>

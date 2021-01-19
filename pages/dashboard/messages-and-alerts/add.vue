<template>
  <div style="width: 100%;" class="d-flex flex-column align-center" overflow-y-auto>
    <v-row class="mt-10 d-flex flex-column" style="width: 80%; height: auto;">
<!--      <v-text-field style="max-height: 15vh !important;" v-model="search" placeholder="Search companies here..." label="Search Company And Select To Send Message:"/>-->
      <MessageCompanyCard
        :items="filteredCompanies"
        title="Companies"
        :tableProperties="headers"
        slug="/dashboard/messages-and-alerts/add"
        :selectCompany="selectCompany"
        class="mt-12"
      ></MessageCompanyCard>
    </v-row>
    <v-form class="mb-10 d-flex flex-column align-center" style="width: 80%;" v-if="companySelection === true && company.company_type === 'true'">
      <v-row style="width: 100%;" class="d-flex justify-center">
        <v-col cols="12" sm="12" md="4">
          <v-text-field outlined class="mx-2 text-h6" readonly label="From" v-model="messageForm.company"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-text-field outlined class="mx-2 text-h6" readonly label="First Name" v-model="messageForm.primary_contact_first_name"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-text-field outlined class="mx-2 text-h6" readonly label="Last Name" v-model="messageForm.primary_contact_last_name"></v-text-field>
        </v-col>
      </v-row>
      <v-row style="width: 100%;" class="d-flex justify-center">
        <v-col cols="12" sm="12" md="6">
          <v-autocomplete outlined cols="8" multiple clearable label="Which Channels Are Associated With Your Message" v-model="messageForm.location" :items="locations" name="location" item-text="name" item-value="name address city state zipcode" class="text-caption mx-1">
            <template slot="selection" slot-scope="data">
              <v-card-text class="text-h6" @click="getServices(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</v-card-text>
            </template>
            <template slot="item" slot-scope="data">
              <v-card-text class="text-h6" @click="getServices(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</v-card-text>
            </template>
          </v-autocomplete>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-select outlined cols="4" clearable label="Your Category For Channel Goes Here" v-model="messageForm.service" :items="naicsList" name="service" item-text="name" item-value="name" class="text-caption mx-1">
            <template slot="selection" slot-scope="data">
              <v-card-text class="text-h6">{{ data.item.name }}</v-card-text>
            </template>
            <template slot="item" slot-scope="data">
              <v-card-text class="text-h6">{{ data.item.name }}</v-card-text>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-row style="width: 100%;" class="d-flex">
        <v-col cols="12">
          <v-select outlined label="Channel of Company you are sending message to" :items="spcompanylocations" name="location" item-text="name address city state zipcode" item-value="name address city state zipcode" class="text-caption mx-1">
            <template slot="selection" slot-scope="data">
              <v-card-text class="text-h6" @click="getLocationForSP(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</v-card-text>
            </template>
            <template slot="item" slot-scope="data">
              <v-card-text class="text-h6" @click="getLocationForSP(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</v-card-text>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-textarea outlined style="width: 100%;" class="text-h6" placeholder="Message Goes Here" v-model="messageForm.message" auto-grow rows="1"></v-textarea>
      </v-col>
      <v-btn outlined style="width: 80%;" rounded color="primary" class="py-8 px-10" large @click="submit">Send Message</v-btn>
    </v-form>
    <v-form class="mb-10 d-flex flex-column align-center" style="width: 80%; background-color: white; border-radius: 20px; box-shadow: 4px 4px 4px darkred; border: 1px solid #A61c00;" v-else-if="companySelection === true && company.company_type === 'false'">
      <v-row style="width: 100%;" class="d-flex justify-center">
        <v-col cols="12" sm="12" md="4">
          <v-text-field outlined class="mx-2 text-h6" readonly label="From" v-model="messageForm.company"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-text-field outlined class="mx-2 text-h6" readonly label="First Name" v-model="messageForm.primary_contact_first_name"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-text-field outlined class="mx-2 text-h6" readonly label="Last Name" v-model="messageForm.primary_contact_last_name"></v-text-field>
        </v-col>
      </v-row>
      <v-row style="width: 100%;" class="d-flex justify-center">
        <v-col cols="12" sm="12" md="6">
          <v-autocomplete outlined cols="8" multiple clearable label="Which Channels Are Associated With Your Message" v-model="messageForm.location" :items="locations" name="location" item-text="name" item-value="name address city state zipcode" class="text-caption mx-1">
            <template slot="selection" slot-scope="data">
              <v-card-text class="text-h6" @click="getServices(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</v-card-text>
            </template>
            <template slot="item" slot-scope="data">
              <v-card-text class="text-h6" @click="getServices(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</v-card-text>
            </template>
          </v-autocomplete>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-select outlined cols="4" clearable label="Your Category For Channel Goes Here" v-model="messageForm.service" :items="naicsList" name="service" item-text="name" item-value="name" class="text-caption mx-1">
            <template slot="selection" slot-scope="data">
              <v-card-text class="text-h6">{{ data.item.name }}</v-card-text>
            </template>
            <template slot="item" slot-scope="data">
              <v-card-text class="text-h6">{{ data.item.name }}</v-card-text>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-row style="width: 100%;" class="d-flex">
        <v-col cols="12">
          <v-select outlined label="Channel of Company you are sending message to" :items="spcompanylocations" name="location" item-text="name address city state zipcode" item-value="name address city state zipcode" class="text-caption mx-1">
            <template slot="selection" slot-scope="data">
              <v-card-text class="text-h6" @click="getLocationForSP(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</v-card-text>
            </template>
            <template slot="item" slot-scope="data">
              <v-card-text class="text-h6" @click="getLocationForSP(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</v-card-text>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-textarea outlined style="width: 100%;" class="text-h6" placeholder="Message Goes Here" v-model="messageForm.message" auto-grow rows="1"></v-textarea>
      </v-col>
      <v-btn outlined style="width: 80%;" rounded color="primary" class="py-8 px-10" large @click="submit">Send Message</v-btn>
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
        naicsList: [],
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
          { text: 'ID', value: 'id', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Categories Offered', value: 'service', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Company', value: 'company', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Address', value: 'full_address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ]
      }
    },
    async mounted() {
      console.log(this.currentUser);
      await this.getNaicsList();
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
      async getNaicsList() {
        await this.$http.get('https://www.sowerkbackend.com/api/naicslist/')
          .then(response => {
            console.log(response.data, 'RESPONSE DATA FOR NAICS LIST')
            this.naicsList = response.data.sort((a,b) => {
              return b.timesUsed-a.timesUsed;
            })
          })
          .catch(err => {
            console.log(err, 'ERR IN GETTING NAICS LIST')
          })
        console.log(this.naicsList, 'naicsList')
      },
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
        // for(let i=0; i< this.companiesFilter.length; i++) {
        //   console.log(this.companiesFilter[i], 'hi');
        //   this.companiesFilter[i].servicesOffered = String(this.companiesFilter[i].servicesOffered).replace(/"/g,"").replace(",", ', ').replace("{", '').replace("}", '');
        // }
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
        console.log(companyParam, 'COMPANY PARAM')
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
        // this.services = item.services
        console.log(this.messageForm.service, 'this.services');
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

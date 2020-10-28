<template>
  <div style="width: 100%;" class="d-flex flex-column align-center" overflow-y-auto>
    <v-row class="mt-10 d-flex flex-column" style="width: 80%;">
      <v-text-field v-model="search" placeholder="Search companies here..." label="Search Company And Select To Send Message:"/>
      <MessageCompanyCard
        :items="filteredCompanies"
        title="Companies"
        :tableProperties="headers"
        slug="/dashboard/messages-and-alerts/add"
        :selectCompany="selectCompany"
      ></MessageCompanyCard>
    </v-row>
    <v-form class="my-10" style="width: 80%;" v-if="companySelection === true">
      <v-text-field placeholder="Service Goes Here" v-model="messageForm.service"></v-text-field>
      <v-text-field placeholder="Company Goes Here" v-model="messageForm.company"></v-text-field>
      <v-text-field placeholder="First Name Goes Here" v-model="messageForm.primary_contact_first_name"></v-text-field>
      <v-text-field placeholder="Last Name Goes Here" v-model="messageForm.primary_contact_last_name"></v-text-field>
      <v-text-field placeholder="Message Goes Here" v-model="messageForm.message"></v-text-field>
        <v-select  placeholder="Location Goes Here" v-model="messageForm.location" :items="locations" name="location" item-text="name address city state zipcode" item-value="name address city state zipcode" class="text-caption">
          <template slot="selection" slot-scope="data">
            {{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}
          </template>
          <template slot="item" slot-scope="data">
            {{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}
          </template>
        </v-select>
      <v-btn @click="submit">Send Message</v-btn>
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
          userprofiles_id: this.$store.state.user.user.user.id
        },
        companiesFilter: [],
        search: '',
        sendToId: Number,
        companySelection: false,
        company: {

        },
        locations: [],
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
            this.messageForm.service = String(response.data.servicesOffered);
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
      }
    }
  }

</script>

<style scoped>

</style>

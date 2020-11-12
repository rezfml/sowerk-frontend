<template>
  <v-card class="white pt-0 mt-12 mb-4" style="width: 100%">
    <transition name="slide-fade" v-if="!sent">
<!--      SMALL AND EXTRA SMALL BREAKPOINT-->
      <v-container v-if="items && !replyLoad && ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs)" class="pt-0" fluid>
        <v-card-title
          style="position: absolute; top: -100px; left: 25px; width: 50%; border-radius: 3px; font-size: 18px;"
          class="primary white--text font-weight-regular red-gradient"
        >{{ title }}</v-card-title>
        <v-card-actions class="d-flex justify-end px-4 py-0">
          <v-row class="py-0">
            <v-spacer></v-spacer>
            <v-col cols="12" class="py-0">
              <v-text-field label="Search" light></v-text-field>
            </v-col>
          </v-row>
        </v-card-actions>
        <v-card-text class="pt-0 pb-2">
          <v-data-table
            :headers="tableProperties"
            :items="items"
            :items-per-page="5"
          >
            <template v-slot:item.pmMessageRead="{ item }">
              <p v-if="company.company_type === 'true'">{{ item.pmMessageRead}}</p>
              <p v-else>{{item.spMessageRead}}</p>
            </template>
            <template v-slot:item.full_name="{ item }">
              <v-icon color="primary">mdi-account</v-icon>
              {{ item.primary_contact_first_name }}
              {{ item.primary_contact_last_name }}
            </template>
            <template v-slot:item.message="{ item }">
              <p v-if="item.message.length > 8">{{ item.message.slice(0,8)}}...</p>
              <p v-else>{{item.message}}</p>
            </template>
            <template v-slot:item.actions="{ item }">
              <nuxt-link :to="slug + item.id" style="width: 90%; text-decoration: none!important;background-color:#707070;" append>
                <v-btn class="my-1" style="width: 90%; text-decoration: none!important;background-color:#707070;" color="white" outlined>View</v-btn>
              </nuxt-link>
              <v-btn @click="replyLoading(item)" class="my-1" color="primary" outlined style="width: 90%;">Reply</v-btn>
              <v-btn class="my-1" style="width: 90%;background-color:rgba(166,29,0,1);" color="white" outlined @click="deleteMessage(item)">Delete</v-btn>
            </template>
            <template v-slot:footer>
              <v-row class="d-flex justify-center my-4" style="width: 100%;">
                <v-btn to='/dashboard/messages-and-alerts/add' color="primary" class="px-16" style="width: 100%;" rounded outlined large>Send New Message</v-btn>
              </v-row>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
          <v-btn
            color="primary"
            class="px-8"
            rounded
            outlined
            small
            style="font-size: 12px"
          >View All</v-btn
          >
        </v-card-actions>
      </v-container>
<!--      MEDIUM AND LARGE BREAKPOINT-->
      <v-container v-if="items && !replyLoad && ($vuetify.breakpoint.lg || $vuetify.breakpoint.md)" class="pt-0" fluid>
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
            :headers="tableProperties"
            :items="items"
            :items-per-page="5"
          >
            <template v-slot:item.pmMessageRead="{ item }">
              <p v-if="company.company_type === 'true'">{{ item.pmMessageRead}}</p>
              <p v-else>{{item.spMessageRead}}</p>
            </template>
            <template v-slot:item.full_name="{ item }">
              <v-icon color="primary">mdi-account</v-icon>
              {{ item.primary_contact_first_name }}
              {{ item.primary_contact_last_name }}
            </template>
            <template v-slot:item.message="{ item }">
              <p v-if="item.message.length > 8">{{ item.message.slice(0,8)}}...</p>
              <p v-else>{{item.message}}</p>
            </template>
            <template v-slot:item.actions="{ item }">
              <nuxt-link :to="slug + item.id" style="width: 90%; text-decoration: none!important;background-color:#707070;" append>
                <v-btn class="my-1" style="width: 90%; text-decoration: none!important;background-color:#707070;" color="white" outlined>View</v-btn>
              </nuxt-link>
              <v-btn @click="replyLoading(item)" class="my-1" color="primary" outlined style="width: 90%;">Reply</v-btn>
              <v-btn class="my-1" style="width: 90%;background-color:rgba(166,29,0,1);" color="white" outlined @click="deleteMessage(item)">Delete</v-btn>
            </template>
            <template v-slot:footer>
              <v-row class="d-flex justify-center my-4" style="width: 100%;">
                <v-btn to='/dashboard/messages-and-alerts/add' color="primary" class="px-16" rounded outlined large>Send New Message</v-btn>
              </v-row>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
          <v-btn
            color="primary"
            class="px-8"
            rounded
            outlined
            small
            style="font-size: 12px"
          >View All</v-btn
          >
        </v-card-actions>
      </v-container>
    </transition>

    <transition name="slide-fade">
      <!--      SMALL AND EXTRA SMALL BREAKPOINT-->
      <v-container v-if="sent && ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs)" class="pt-0" fluid>
        <v-card-title
          style="position: absolute; top: -100px; left: 25px; width: 50%; border-radius: 3px; font-size: 18px;"
          class="primary white--text font-weight-regular red-gradient"
        >{{ title }}</v-card-title>
        <v-card-actions class="d-flex justify-end px-4 py-0">
          <v-row class="py-0">
            <v-spacer></v-spacer>
            <v-col cols="12" class="py-0">
              <v-text-field label="Search" light></v-text-field>
            </v-col>
          </v-row>
        </v-card-actions>
        <v-card-text class="pt-0 pb-2">
          <v-data-table
            :headers="tableProperties"
            :items="sent"
            :items-per-page="5"
          >
            <template v-slot:item.full_name="{ item }">
              <v-icon color="primary">mdi-account</v-icon>
              {{ item.primary_contact_first_name }}
              {{ item.primary_contact_last_name }}
            </template>
            <template v-slot:item.pmMessageRead="{ item }">
              <p v-if="company.company_type === 'true'">{{item.spMessageRead}}</p>
              <p v-else>{{ item.pmMessageRead}}</p>
            </template>
            <template v-slot:item.message="{ item }">
              <p v-if="item.message.length > 8">{{ item.message.slice(0,8)}}...</p>
              <p v-else>{{item.message}}</p>
            </template>
            <template v-slot:item.actions="{ item }">
              <nuxt-link :to="'../../../dashboard/messages-and-alerts/sent/' + item.id" append>
                <v-btn class="my-1" style="width: 90%; text-decoration: none!important;background-color:#707070" color="white" outlined>View</v-btn>
              </nuxt-link>
              <v-btn class="my-1" style="width: 90%;" color="primary"  @click="deleteMessage(item)">Delete</v-btn>
            </template>
            <template v-slot:footer>
              <v-row class="d-flex justify-center my-4" style="width: 100%;">
                <v-btn to='/dashboard/messages-and-alerts/add' color="primary" class="px-16" style="width:100%;" rounded outlined large>Send New Message</v-btn>
              </v-row>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
          <v-btn
            color="primary"
            class="px-8"
            rounded
            outlined
            small
            style="font-size: 12px"
          >View All</v-btn
          >
        </v-card-actions>
      </v-container>
      <!--      MEDIUM AND LARGE BREAKPOINT-->
      <v-container v-if="sent" class="pt-0" fluid>
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
            :headers="tableProperties"
            :items="sent"
            :items-per-page="5"
          >
            <template v-slot:item.full_name="{ item }">
              <v-icon color="primary">mdi-account</v-icon>
              {{ item.primary_contact_first_name }}
              {{ item.primary_contact_last_name }}
            </template>
            <template v-slot:item.pmMessageRead="{ item }">
              <p v-if="company.company_type === 'true'">{{item.spMessageRead}}</p>
              <p v-else>{{ item.pmMessageRead}}</p>
            </template>
            <template v-slot:item.message="{ item }">
              <p v-if="item.message.length > 8">{{ item.message.slice(0,8)}}...</p>
              <p v-else>{{item.message}}</p>
            </template>
            <template v-slot:item.actions="{ item }">
              <nuxt-link :to="'../../../dashboard/messages-and-alerts/sent/' + item.id" append>
                <v-btn class="my-1" style="width: 90%; text-decoration: none!important;background-color:#707070" color="white" outlined>View</v-btn>
              </nuxt-link>
              <v-btn class="my-1" style="width: 90%;" color="primary"  @click="deleteMessage(item)">Delete</v-btn>
            </template>
            <template v-slot:footer>
              <v-row class="d-flex justify-center my-4" style="width: 100%;">
                <v-btn to='/dashboard/messages-and-alerts/add' color="primary" class="px-16" rounded outlined large>Send New Message</v-btn>
              </v-row>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
          <v-btn
            color="primary"
            class="px-8"
            rounded
            outlined
            small
            style="font-size: 12px"
          >View All</v-btn
          >
        </v-card-actions>
      </v-container>
    </transition>
    <transition name="slide-fade">
      <v-card class="d-flex flex-column align-center" v-if="replyLoad" style="width: 90vw; position: absolute; margin-top: -40vh;">
        <v-card-title class="mt-10">Reply to {{user.first_name}} {{user.last_name}} from {{message.company}} - {{message.location}}</v-card-title>
        <v-form style="width: 100%;" class="d-flex flex-column align-center">
          <v-textarea
            label="Your Message Goes Here"
            v-model="messageForm.message"
            style="width: 80%;"
          ></v-textarea>
          <v-btn @click="reply" class="primary px-10 mb-4" style="width: 50%;" rounded>Reply to {{user.first_name}}</v-btn>
        </v-form>
        <v-btn text style="font-size: 25px; position:absolute; top: 10px; right: 10px;" @click="closeLoading">X</v-btn>
      </v-card>
    </transition>
  </v-card>
</template>
<script>
export default {
  name: 'HomeCard',
  props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'sent', 'company'],
  data() {
    return {
      messages: null,
      message: {},
      user: {},
      replyCompany: {},
      replyLoad: false,
      messageForm: {
        service: '',
        primary_contact_first_name: this.$store.state.user.user.user.first_name,
        primary_contact_last_name: this.$store.state.user.user.user.last_name,
        message: '',
        location: '',
        userprofiles_id: this.$store.state.user.user.user.id,
        pmMessageRead: false,
        spMessageRead: false,
        spLocationId: Number,
        spLocationName: ""
      }
    }
  },
  mounted() {
    console.log(this.items, 'this.items')
  },
  computed: {
    currentUser() {
      console.log(this.$store.state.user.user.user, 'user')
      return this.$store.state.user.user.user;
    },
  },
  methods: {
    deleteMessage(messageParam) {
      let confirmDelete = confirm('Are you sure you want to delete this message? Cannot be undone.');
      if (confirmDelete === true) {
        this.$http.delete('https://www.sowerkbackend.com/api/messages/' + messageParam.id)
        .then(response => {
          alert('Message successfully deleted');
          this.$router.go()
        })
        .catch(err => {
          alert('Error - could not delete message');
        })
      }
    },
    replyLoading(message) {
      this.replyLoad = true;
      this.message = message;
      this.getUser(message.userprofiles_id);
      this.getCompanyByName(this.message.company)
    },
    closeLoading() {
      this.replyLoad = false;
    },
    async getUser(inboxId) {
      await this.$http.get('https://www.sowerkbackend.com/api/auth/users/' + inboxId)
        .then(response => {
          console.log(response.data, 'response for user')
          this.user = response.data
          console.log(this.message, 'message')
        })
    },
    async getCompanyByName(id) {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/name/' + id)
        .then(response => {
          this.replyCompany = response.data.company[0];
          this.messageForm.company = response.data.company[0].account_name;
          this.messageForm.spMessageRead = this.message.spMessageRead
          this.messageForm.spLocationName = this.message.spLocationName
          this.messageForm.spLocationId = this.message.spLocationId
          this.messageForm.location = this.message.location
          this.messageForm.pmMessageRead = this.message.pmMessageRead
          this.messageForm.service = this.message.service
          console.log(this.replyCompany, 'company');
        })
        .catch(err => {
          console.log(err);
        })
      console.log(this.messageForm, 'messageForm', this.replyCompany, 'company', this.user, 'user')
    },
    async reply() {
      await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.replyCompany.id, this.messageForm)
        .then(response => {
          console.log('SUCCESS', response)
          this.replyLoad = false
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.red-gradient {
  background: rgb(166, 28, 0);
  background: linear-gradient(
      90deg,
      rgba(166, 28, 0, 1) 0%,
      rgba(116, 21, 2, 1) 100%
  );
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .7s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

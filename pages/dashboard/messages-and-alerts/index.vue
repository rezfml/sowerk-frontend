<template>
  <v-row
    align="stretch"
    justify="center"
    class="mx-auto py-12"
    style="width: 90%;"
    overflow-y-auto
  >
<!--    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">-->
<!--      <v-progress-circular-->
<!--        indeterminate-->
<!--        color="primary"-->
<!--        :size="50"-->
<!--      ></v-progress-circular>-->
<!--    </div>-->

    <v-col cols="12" v-if="loading">
      <transition name="slide-fade">
        <v-card class="my-4" style="width: 100%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" >
          <v-row style="width: 50%; height: auto;" class="d-flex flex align-center">
            <v-img class="" src="/SoWorkLogo-MessagesAlerts-167.png" style="height:250px;"></v-img>


          </v-row>
        </v-card>
      </transition>
    </v-col>

    <v-skeleton-loader
      v-if="!loading"
      type="card-avatar, article, article, actions"
      min-height="50vh"
      min-width="50vw"
    ></v-skeleton-loader>
<!--    <v-col cols="12">-->
<!--      <transition name="slide-fade">-->
<!--      <h1 v-if="loading" class="font-weight-regular">Messages & Alerts</h1>-->
<!--      </transition>-->
<!--    </v-col>-->

    <v-col cols="12">
      <transition name="slide-fade">
      <MessageCard
        :items="messages"
        :company="company"
        title="Inbox - Messages & Alerts"
        :tableProperties="headers"
        slug="/dashboard/messages-and-alerts/"
        v-if="loading"
      ></MessageCard>
      </transition>
    </v-col>
  </v-row>
</template>

<script>
import MessageCard from "~/components/dashboard/MessageCard";

export default {
  layout: 'app',
  name: "messages-and-alerts",
  components: {
    MessageCard
  },
  data() {
    return {
      loading: false,
      messages: [
      ],
      company: {

      },
      headers: [
        { text: 'Read', value: 'pmMessageRead', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
        { text: 'From', value: 'company', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
        { text: 'Sender', value: 'full_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
        { text: 'Associated Channel', value: 'location', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
        { text: 'Message', value: 'message', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
      ]
    }
  },
  watch: {
    loading: function() {
      if(this.loading){
        console.log(document);
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
  },
  async mounted() {
    await this.getCompany();
    await this.getMessages();
  },
  computed: {
    currentUser() {
      return this.$store.state.user.user.user;
    },
  },
  methods: {
    async getCompany() {
      let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
      if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.company = data;
        console.log(this.company, 'company');
      })
    },
    async getMessages() {
      await this.$http.get('https://www.sowerkbackend.com/api/messages/byRecieverId/' + this.company.id)
        .then(response => {
          console.log('messages', response)
          this.messages = response.data
          for(let i=0; i<this.messages.length;i++) {
            if(this.company.company_type === 'true') {
              if(this.messages[i].pmMessageRead === false) {
                this.messages[i].pmMessageRead = "No";
              } else {
                this.messages[i].pmMessageRead = 'Yes';
              }
            } else {
              if(this.messages[i].spMessageRead === false) {
                this.messages[i].spMessageRead = "No";
              } else {
                this.messages[i].spMessageRead = 'Yes';
              }
            }
          }
          this.loading = true;
        })
        .catch(err => {
          console.log('cannot get messages', err)
          this.loading = true;
        })
    }
  }
};
</script>

<style scoped>
.card-bg >>> .v-image__image {
  background-size: 140%;
}

.red-gradient {
  background: rgb(166,28,0);
  background: linear-gradient(90deg, rgba(166,28,0,1) 0%, rgba(116,21,2,1) 100%);
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .7s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

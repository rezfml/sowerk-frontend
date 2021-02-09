<template>
  <div class="grey lighten-3">
    <v-container class="px-0 fill-height" style="max-width: 95%;height: 100vh;">
      <v-row>
        <v-col>
          <p v-if="verification && verification !== null" >Thanks for verifying your invite status! You can now continue with registering below. To help speed things up, we have pre-filled some data points using the information provided to us when you were invited!</p>
          <p v-else-if="verification === false" >This confirmation link has expired or the user doesn't exist. Please click here to resend a confirmation email.</p>
          <p v-else-if="verification === null" >Checking your verification, please wait.</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HomeCard from '~/components/dashboard/HomeCard'
import FilterCard from '~/components/dashboard/FilterCard'
import ProfileCard from "~/components/dashboard/ProfileCard";
import ProfileEditCard from "~/components/dashboard/ProfileEditCard";
import CustomFormCard from "~/components/dashboard/CustomFormCard";

export default {
  name: 'verify',
  layout: 'fullwidth',
  components: {
    HomeCard,
    FilterCard,
    ProfileCard,
    ProfileEditCard,
    CustomFormCard
  },
  data() {
    return {
      verificationId: null,
      verification: null,
      payload: {
        isVerified: true
      }
    }
  },
  async mounted() {
    console.log(this.$route.params.id);
    this.verificationId = this.$route.params.id;
    await this.getVerification()
  },
  methods: {
    async getVerification() {
      let {data, status} = await this.$http.put('https://www.sowerkbackend.com/api/auth/verify/' + this.verificationId, this.payload).catch(e => e);
      if (this.$error(status)) return;
      console.log(data);
      this.verification = data;
      setTimeout(function() {
        window.location.href = '/login';
      }, 5000);
    },
  }
}
</script>

<style scoped>

</style>

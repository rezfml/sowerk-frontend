<template>
  <div class="grey lighten-3">
    <v-container class="px-0 fill-height" style="max-width: 95%;height: 100vh;">
      <v-row>
        <v-col>
          <p v-if="this.verification">Thanks for verifying! You will be redirected to the login page momentarily.</p>
          <p v-else>This confirmation link has expired or the user doesn't exist. Please click here to resend a confirmation email.</p>
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
  mounted() {
    console.log(this.$route.params.id);
    this.verificationId = this.$route.params.id;
    this.getVerification()
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

<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-row style="height: 100%;">
        <v-col cols="4" class="py-12" v-if="this.currentUser.is_superuser">
          <ProfileCard :user="currentUser"></ProfileCard>
        </v-col>
        <v-col cols="8" class="pb-12 d-flex flex-column" v-if="this.currentUser.is_superuser">
          <ProfileEditCard :user="currentUser"></ProfileEditCard>
        </v-col>

        <v-col cols="12" class="py-12" v-if="this.currentUser.is_superuser === false">
          <ProfileCard :user="currentUser"></ProfileCard>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import ProfileCard from "~/components/dashboard/ProfileCard";
  import ProfileEditCard from "~/components/dashboard/ProfileEditCard";
  import CustomFormCard from "~/components/dashboard/CustomFormCard";

  export default {
    name: "profile",
    layout: "app",
    components: {
      ProfileCard,
      ProfileEditCard,
      CustomFormCard
    },
    data() {
      return {

      }
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
  };
</script>

<style scoped>

</style>



























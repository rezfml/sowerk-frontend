<template>
  <v-tab-item eager>
    <v-container style="max-width: 80%;" mx-auto>
      <v-card-text class="pa-0">
        <template v-if="editingLocation">
          <p class="mt-4">Channels are locations, properties, departments or even divisions in your company where you will want to find, vet, and manage Vendors now or in the future.<br/>Complete the below details for each location. You will be able to view  your list of channels after every add. You can also add more channels after registration is complete.<br/> Need help uploading multiple channels? Contact <a target="_blank" href="mailto:Support@SOWerk.com">SOWERK Here </a ></p>
          <v-form class="mx-auto">
            <v-container>
              <FormLocation
                :location="location"
                :index="editingIndex"
                :user="user"
                :company="company"
                :companyImageUrl="companyImageUrl"
                ref="formLocation"
              />
            </v-container>
          </v-form>
        </template>
        <template v-else class="d-flex flex-column align-center">
          <v-card-title class="my-2 d-flex justify-center" style="color: #A61C00; width: 100%;">Would You Like To Add More Channels?</v-card-title>
          <v-card-subtitle class="my-2" style="width: 100%; text-align: center;">You can always add or adjust Channels in your SOWerk dashboard</v-card-subtitle>
          <v-data-table
            :headers="headers"
            :items="locations"
            :items-per-page="10"
          >
            <template v-slot:item.id="{ item }">{{
              locations.indexOf(item) + 1
            }}</template>
            <template v-slot:item.full_name="{ item }"
              >{{ item.contact_first_name }}
              {{ item.contact_last_name }}</template
            >
            <template v-slot:item.actions="{ item }">
              <v-btn icon @click="editLocation(locations.indexOf(item))">
                <v-icon small class="mr-2">
                  mdi-pencil
                </v-icon>
              </v-btn>
              <v-icon small @click="deleteLocation(locations.indexOf(item))">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </template>
      </v-card-text>
    </v-container>
  </v-tab-item>
</template>

<script>
import FormLocation from '@/components/FormLocation'
export default {
  name: 'CompanyLocations',
  components: {
      FormLocation,
  },
  props: {
    company: {
      type: Object,
      return: true,
    },
    user: {
      type: Object,
      return: true,
    },
    companyImageUrl: {
      type: String,
      return: true
    },
    editLocation: {
      type: Function,
      editLocation(index) {
        console.log(index)
        this.editingIndex = index
        this.location = this.locations[index]
        console.log(this.location)
        this.editingLocation = true
      },
    },
    deleteLocation: {
      type: Function,
      deleteLocation(index) {
        console.log(index, 'deleteLocation!')
        this.locations.splice(1, index)
      },
    },
    editingLocation: {
        type: Boolean,
        editingLocation: true,
    },
    location: {
        type: Object,
        return: true
    },
    locations: {
      type: Array,
      return: true
    },
    headers: {
      type: Array,
      return: true
    },
    editingIndex: 0,
  },
  mounted() {
    console.log('this.location this.user', this.location, this.user)
    this.location.contact_first_name = this.user.first_name;
    this.location.contact_last_name = this.user.last_name;
    this.location.phone = this.user.phone;
    this.location.email = this.user.email;
  },
}
</script>

<style>
</style>

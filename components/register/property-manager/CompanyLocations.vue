<template>
  <v-tab-item eager>
    <v-container style="max-width: 80%;" mx-auto>
      <v-card-text class="pa-0">
        <template v-if="editingLocation">
          <span
            class="title font-weight-regular text-center my-12 grey--text text--darken-2"
            >Complete The Below Details For Each Location. All progress is saved
            automatically and you can view your list of locations after every
            add. Need Help Uploading Multiple Locations? Contact SOWERK
            Here</span
          >
          <v-form class="mx-auto">
            <v-container>
              <FormLocation
                :location="location"
                :index="editingIndex"
                :user="user"
              />
            </v-container>
          </v-form>
        </template>
        <template v-else>
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
              <v-icon small @click="deleteItem(item)">
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
    editingLocation: {
        type: Boolean,
        editingLocation: true,
    },
    location: {
        type: Object,
        return: true
    },
    editingIndex: 0,
    locations: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  },
}
</script>

<style>
</style>

<template>
  <div>
    <v-container v-if="this.editStartLoad === false && this.locationAssignLoad === false">
      <v-card-title
        style="position: absolute; top: -30px; left: 25px; width: 50%; border-radius: 3px; font-size: 18px;"
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
          :items-per-page="10"
        >
          <template v-slot:item.userfull_name="{item}">
            <p><v-icon color="primary">mdi-account</v-icon> {{item.first_name}} {{item.last_name}}</p>
          </template>
          <template v-slot:item.useremail="{item}">
            <p>{{item.email}}</p>
          </template>
          <template v-slot:item.userphone="{item}">
            <p>{{item.phone}}</p>
          </template>
          <template v-slot:item.usercreated="{item}">
            <p>{{item.created}}</p>
          </template>
          <template v-slot:item.useradmin="{item}">
            <p v-if="item.is_superuser === true">Super Admin</p>
            <p v-else>Staff Account</p>
          </template>
          <template v-slot:item.userverify="{item}">
            <p v-if="item.isVerified===true">Yes</p>
            <p v-else>No</p>
          </template>
          <template v-slot:item.useractions="{item}">
            <div class="d-flex flex-column align-center">
              <v-btn @click="assignLocation(item)" class="my-1" style="width: 90%;background-color: #D15959;" color="white" outlined v-if="currentUser.is_superuser === true">Assign Location</v-btn>
              <v-btn @click="editStart(item)" class="my-1" style="width: 90%;background-color:#707070;" color="white" outlined v-if="currentUser.is_superuser === true || (currentUser.email === item.email && currentUser.first_name === item.first_name)">Edit</v-btn>
              <v-btn @click="deleteStart(item.id)" class="my-1" style="width: 90%;" color="primary" outlined v-if="currentUser.is_superuser === true">Delete</v-btn>
            </div>
          </template>

        </v-data-table>
      </v-card-text>
    </v-container>

    <v-card v-if="editStartLoad === true" class="mt-n8 d-flex flex-column align-center">
      <v-card-title style="color: #a61c00">Edit User #{{userEdit.id}} - {{userEdit.first_name}} {{userEdit.last_name}}</v-card-title>
      <v-form style="width: 80%;" class="d-flex flex-wrap justify-center">
        <v-text-field v-model="userEditForm.first_name" :placeholder="userEdit.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field v-model="userEditForm.last_name" :placeholder="userEdit.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field v-model="userEditForm.phone" :placeholder="userEdit.phone" :label="'Phone'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field v-model="userEditForm.email" :placeholder="userEdit.email" :label="'Email'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-text-field :type="'password'" v-model="userEditForm.password" :label="'Password'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
        <v-select v-model="userEditForm.is_superuser" :label="'Account Level'" :items="selectOptions"></v-select>
      </v-form>
      <v-btn @click="submitEditUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
      <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px;">X</v-btn>
      <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successUserEditForm === true">SUCCESS! You have edited a user # {{userEdit.id}}</v-card-title>
    </v-card>

    <v-card v-if="locationAssignLoad === true" class="mt-n8 d-flex flex-column align-center" style="width: 95%;">
      <FacilitiesCard
        v-if="locations && locationAssignLoad === true"
        :items="locations"
        :title="'Facilities'"
        :tableProperties="headers"
        slug="/dashboard/facilities/"
        :viewLocation="true"
        :locationAssignUser="locationAssignUser"
        :assignUserToLocation="assignUserToLocation"
      ></FacilitiesCard>
      <v-btn @click="assignExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px;">X</v-btn>
    </v-card>
  </div>
</template>

<script>
  import HomeCard from '~/components/dashboard/HomeCard'
  import FacilitiesCard from '~/components/dashboard/FacilitiesCard'
export default {
  name: 'UserCard',
  props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'company', 'currentUser'],
  components: {
    HomeCard,
    FacilitiesCard
  },
  data() {
    return {
      editStartLoad: false,
      userEdit: {},
      userEditForm: {
        email: "",
        is_superuser: false,
        first_name: "",
        last_name: "",
        phone: "",
        password: ""
      },
      selectOptions: [
        'Super Admin',
        'Staff Account'
      ],
      successUserEditForm: false,
      locationAssignUser: {},
      locationAssignLoad: false,
      locations: [],
      headers: [
        { text: 'ID', value: 'id', class: 'primary--text font-weight-regular'},
        { text: 'Location', value: 'name', class: 'primary--text font-weight-regular' },
        { text: 'Address', value: 'address', class: 'primary--text font-weight-regular' },
        { text: 'Primary Contact', value: 'full_name', class: 'primary--text font-weight-regular' },
        { text: 'Email', value: 'email', class: 'primary--text font-weight-regular' },
        { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
        { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
      ],
    }
  },
  mounted() {
    console.log(this.items, 'this.items')
  },
  methods: {
    async assignLocation(user) {
      this.locationAssignUser = user;
      this.locationAssignLoad = true;
      this.getLocations();
    },
    async getLocations() {
      let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/locations/bycompaniesid/' + this.currentUser.companies_id).catch(e => e);
      if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.locations = data.location;
        console.log(this.locations, 'locations', data, 'data')
      })
    },
    async assignExit() {
      this.locationAssignLoad = false;
    },
    async editStart(user) {
      this.userEdit = user;
      this.userEditForm.email = user.email
      this.userEditForm.is_superuser = user.is_superuser
      this.userEditForm.first_name = user.first_name
      this.userEditForm.last_name = user.last_name
      this.userEditForm.phone = user.phone
      this.editStartLoad = true;
    },
    async editExit() {
      this.editStartLoad = false;
    },
    async submitEditUser() {
      if(this.userEditForm.is_superuser === 'Super Admin') {
        this.userEditForm.is_superuser = true;
      } else {
        this.userEditForm.is_superuser = false;
      }
      await this.$http.put('https://www.sowerkbackend.com/api/auth/users/' + this.userEdit.id, this.userEditForm)
        .then(response => {
          console.log(response, 'SUCCESS IN EDITING')
          this.successUserEditForm = true;
        })
        .catch(err => {
          console.log(err, 'ERROR IN EDITING')
        })
      console.log(this.userEditForm);
      setTimeout(() => {
        this.$router.go();
      }, 1500)
    },
    async deleteStart(id) {
      let confirmDelete = confirm('Are you sure you want to delete this account? Cannot be undone');
      if(confirmDelete === true) {
        this.$http.delete('https://www.sowerkbackend.com/api/auth/users/' + id)
          .then(response => {
            alert('Account successfully deleted');
            this.$router.go()
          })
          .catch(err => {
            console.log(err, 'err', id);
            alert('Error - could not delete account.')
          })
      }
    },
    async assignUserToLocation(location) {
      console.log('location', location, 'this.locationAssignUser on ASSIGN', this.locationAssignUser)
      let locationId = location.id;
      console.log(locationId);
      let locationAssign = {
        email: "",
        phone: "",
        contact_first_name: "",
        contact_last_name: "",
        adminLevel: Number
      };
      if(this.locationAssignUser.is_superuser === true) {
        locationAssign = {
          email: this.locationAssignUser.email,
          phone: this.locationAssignUser.phone,
          contact_first_name: this.locationAssignUser.first_name,
          contact_last_name: this.locationAssignUser.last_name,
          adminLevel: 1
        }
      } else {
        locationAssign = {
          email: this.locationAssignUser.email,
          phone: this.locationAssignUser.phone,
          contact_first_name: this.locationAssignUser.first_name,
          contact_last_name: this.locationAssignUser.last_name,
          adminLevel: 0
        }
      }
      await setTimeout(async () => {
        await this.$http.put('https://www.sowerkbackend.com/api/locations/' + locationId, locationAssign)
          .then(response => {
            console.log('success', response)
            this.successAssign = true;
            alert(`Successfully assigned location #${location.id} - ${location.name} to be managed by user #${this.locationAssignUser.id} - ${this.locationAssignUser.first_name} ${this.locationAssignUser.last_name}`)
            this.locationAssignLoad = false;
          })
          .catch(err => {
            console.log(err, 'err')
            alert('Error in assigning user to this location')
          })
      }, 500)
    },
  }
}

</script>

<style>

</style>

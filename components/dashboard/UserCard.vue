<template>
  <div style="width: 100%;">

    <v-container v-if="this.editStartLoad === false && this.locationAssignLoad === false">
      <v-card-title v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm"
        style="position: absolute; top: -30px; left: 25px; width: 50%; border-radius: 3px; font-size: 18px;"
        class="primary white--text font-weight-regular red-gradient"
      >{{ title }}</v-card-title>
       <v-card-title v-else
        style="position: absolute; top: -30px; left: 0px; width: 100%; border-radius: 3px; font-size: .95rem;"
        class="primary white--text font-weight-regular red-gradient"
      >{{ title }}</v-card-title>
      <v-btn :to="'../../dashboard/user-creation/add'" outlined color="primary" large rounded class="px-16" style="position: absolute; top: 10px; right: 10px;">+ New User</v-btn>
      <v-card-actions class="d-flex justify-end px-4 py-0">
        <v-row class="py-0" v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
          <v-spacer></v-spacer>
          <v-col cols="4" class="pt-8">
            <v-text-field label="Search By Name, Email, or Phone" v-model="search" light></v-text-field>
          </v-col>
        </v-row>
        <v-row class="pt-16" v-else>
          <v-spacer></v-spacer>
          <v-col cols="12" class="pt-8">
            <v-text-field label="Search By Name, Email, or Phone" v-model="search" light></v-text-field>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-card-text class="pt-0 pb-2" v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
        <v-data-table
          :headers="tableProperties"
          :items="items"
          :search="search"
          :items-per-page="10"
          style="width:100%;height:auto;"
          v-if="items"
        >
          <template v-slot:item.first_name="{item}">
            <p>{{item.first_name}} {{item.last_name}}</p>
          </template>
          <template v-slot:item.locationAccess="{item}">
            <p>{{item.locationAccess}}</p>
          </template>
          <template v-slot:item.email="{item}">
            <p>{{item.email}}</p>
          </template>
          <template v-slot:item.phone="{item}">
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
              <v-btn @click="assignLocation(item)" class="my-1" style="width: 90%;background-color: #D15959;" color="white" outlined v-if="currentUser.is_superuser === true">Assign Channel</v-btn>
              <v-btn @click="editStart(item)" class="my-1" style="width: 90%;background-color:#707070;" color="white" outlined v-if="currentUser.is_superuser === true || (currentUser.email === item.email && currentUser.first_name === item.first_name)">Edit</v-btn>
              <v-btn @click="deleteStart(item.id)" class="my-1" style="width: 90%;" color="primary" outlined v-if="currentUser.is_superuser === true && items.length > 1">Delete</v-btn>
            </div>
          </template>

        </v-data-table>
      </v-card-text >
      <v-card-text class="pt-0 pb-2" v-else>
        <v-data-table
          :headers="tableProperties"
          :items="items"
          :search="search"
          :items-per-page="10"
          class="mobileTable"
          v-if="items"
        >
          <template v-slot:item.first_name="{item}">
            <p>{{item.first_name}} {{item.last_name}}</p>
          </template>
          <template v-slot:item.locationAccess="{item}">
            <p>{{item.locationAccess}}</p>
          </template>
          <template v-slot:item.email="{item}">
            <p>{{item.email}}</p>
          </template>
          <template v-slot:item.phone="{item}">
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
          <template v-slot:item.useractions="{item}" >
            <div class="d-flex flex-column align-center" style="margin-top:50%;">
              <v-btn @click="assignLocation(item)" class="my-1" style="width: 90%;background-color: #D15959;" color="white" outlined v-if="currentUser.is_superuser === true">Assign Channel</v-btn>
              <v-btn @click="editStart(item)" class="my-1" style="width: 90%;background-color:#707070;" color="white" outlined v-if="currentUser.is_superuser === true || (currentUser.email === item.email && currentUser.first_name === item.first_name)">Edit</v-btn>
              <v-btn @click="deleteStart(item.id)" class="my-1" style="width: 90%;" color="primary" outlined v-if="currentUser.is_superuser === true && items.length > 1">Delete</v-btn>
            </div>
          </template>

        </v-data-table>
      </v-card-text>
    </v-container>

    <v-container v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
      <transition name="slide-fade">
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
          <v-btn @click="submitEditUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submitsdfsdf</v-btn>
          <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px;">X</v-btn>
          <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successUserEditForm === true">SUCCESS! You have edited user # {{userEdit.id}}</v-card-title>
        </v-card>
      </transition>

      <transition name="slide-fade">
        <v-card v-if="locationAssignLoad === true" class="mt-n8 d-flex flex-column align-center" style="width: 95%;">
          <FacilitiesCard
            v-if="locations && locationAssignLoad === true"
            :items="locations"
            :title="'Channels'"
            :tableProperties="headers"
            slug="/dashboard/facilities/"
            :viewLocation="true"
            :locationAssignUser="locationAssignUser"
            :assignUserToLocation="assignUserToLocation"
            :massAssignUserToLocation="massAssignUserToLocation"
            :submitMassAssignUserToLocation="submitMassAssignUserToLocation"
          ></FacilitiesCard>
          <v-btn @click="assignExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px;">X</v-btn>
        </v-card>
      </transition>
    </v-container>

    <v-container v-else style="">
      <transition name="slide-fade">
        <v-card v-if="editStartLoad === true" class="mt-8 d-flex flex-column align-center" style="margin-top:-20%;">
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
      </transition>

      <transition name="slide-fade">
        <v-card v-if="locationAssignLoad === true" class="mt-8 d-flex flex-column align-center" style="width: 95%;margin-top:-20%;">
          <FacilitiesCard
            v-if="locations && locationAssignLoad === true"
            :items="locations"
            :title="'Facilities'"
            :tableProperties="headers"
            slug="/dashboard/facilities/"
            :viewLocation="true"
            :locationAssignUser="locationAssignUser"
            :assignUserToLocation="assignUserToLocation"
            :massAssignUserToLocation="massAssignUserToLocation"
            :submitMassAssignUserToLocation="submitMassAssignUserToLocation"
          ></FacilitiesCard>
          <v-btn @click="assignExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px;">X</v-btn>
        </v-card>
      </transition>
    </v-container>
  </div>
</template>

<script>
  import HomeCard from '~/components/dashboard/HomeCard'
  import FacilitiesCard from '~/components/dashboard/FacilitiesCard'
export default {
  name: 'UserCard',
  props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'company', 'currentUser', 'locations', 'getLocations', 'getUsers', 'viewLocation'],
  components: {
    HomeCard,
    FacilitiesCard
  },
  data() {
    return {
      search: '',
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
      headers: [
        { text: 'ID', value: 'id', class: 'primary--text text-h6 font-weight-bold text-left'},
        { text: 'Channel', value: 'name', class: 'primary--text text-h6 font-weight-bold text-left' },
        { text: 'Address', value: 'address', class: 'primary--text text-h6 font-weight-bold text-left' },
        { text: 'Primary Contact', value: 'full_name', class: 'primary--text text-h6 font-weight-bold text-left' },
        { text: 'Email', value: 'email', class: 'primary--text text-h6 font-weight-bold text-left' },
        { text: 'Phone', value: 'phone', class: 'primary--text text-h6 font-weight-bold text-left' },
        { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text text-h6 font-weight-bold text-left' },
      ],
      massLocation: [],
    }
  },
  mounted() {
    console.log(this.items, 'this.items')
  },
  methods: {
    async assignLocation(user) {
      this.locationAssignUser = user;
      this.locationAssignLoad = true;
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
          .then(async (response) => {
            console.log('success', response)
            this.successAssign = true;
            this.locationAssignLoad = false;
          })
          .catch(err => {
            console.log(err, 'err')
            alert('Error in assigning user to this location')
          })
        await this.getLocations();
        await this.getUsers();
      }, 500)
    },
    async massAssignUserToLocation(location) {
      document.getElementById(location.id).checked = !document.getElementById(location.id).checked
      console.log(document.getElementById(location.id).checked, 'checked');
      const checkboxes = document.querySelectorAll('input[name="massAssign"]:checked');
      console.log(checkboxes, 'checkboxes');
      if(document.getElementById(location.id).checked === true) {
        console.log('location for mass assign', location)
        this.massLocation.push(location)
      } else {
        this.massLocation = this.massLocation.filter(locationVal => {
          if(locationVal !== location) {
            return locationVal
          }
        })
      }
      console.log(this.massLocation, 'massLocation')
    },
    async submitMassAssignUserToLocation() {
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
      if (this.massLocation.length > 0) {
        for(let i=0; i<this.massLocation.length; i++) {
          await setTimeout(async () => {
            await this.$http.put('https://www.sowerkbackend.com/api/locations/' + this.massLocation[i].id, locationAssign)
              .then(async (response) => {
                console.log('success', response)
                this.successAssign = true;
                this.locationAssignLoad = false;
              })
              .catch(err => {
                console.log(err, 'err')
                alert('Error in assigning user to this location')
              })
          }, 500)
        }
        await this.getLocations();
        await this.getUsers();
      } else {
        alert('Please select the checkboxes for each location that you want to assign to the user!')
      }
    }
  }
}

</script>

<style scoped>
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

 @media (max-width: 800px) {
   table{
     margin-bottom: 50%;
   }

}
</style>

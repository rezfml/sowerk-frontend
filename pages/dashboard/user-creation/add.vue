<template>


  <!-- BREAKPOINT - EXTRA-LARGE - BREAK @ 1904+ pixels ------------------------------------------------------------>
  <div style="width: 100%;" class="d-flex align-center" v-if="$vuetify.breakpoint.xl">

        <!-- THIS RENDERS IF COMPANY_TYPE = TRUE -->
        <v-card class="d-flex flex-column align-center" v-if="company.company_type === 'true'">
          <v-skeleton-loader
            v-if="!companyLoad"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="70vw"
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <v-card v-if="this.requiredFieldsFilled === false && $vuetify.breakpoint.xl" class="mt-n8" style="position:absolute;top:45vh;justify-content:center;background-color:#a61c00;z-index:1;overlay:true">
              <v-card-title style="color:white;padding-top:12%;font-size:2.5rem;justify-content:space-around;">All Fields Are Required!</v-card-title>
              <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px; color: white">X</v-btn>
            </v-card>
          </transition>
          <template>
            <transition name="slide-fade">
              <v-card-title style="width: 40%; border-radius: 3px; font-size:2rem;line-height:1.5;" class="primary white--text justify-center font-weight-regular red-gradient mb-10" v-if="companyLoad">Invite A New User </v-card-title>
            </transition>
              <v-card-title v-if="companyLoad" style="color: #a61c00; font-size:1rem">Fill out the form below to add a new user to your company! All fields are required!</v-card-title>
            <transition name="slide-fade">
              <v-form style="width: 80%;" class="d-flex flex-wrap justify-center" v-if="companyLoad">
                <v-text-field type="email" v-model="addUserForm.email" :rules="rules.emailRules" :label="'Email'" hint="Shared With Approved Vendors ONLY If Assigned To A Channel" persistent-hint class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
<!--                <v-text-field :type="'password'" v-model="addUserForm.password" :rules="rules.passwordRules" :label="'Temporary Password'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>-->
                <v-text-field v-model="addUserForm.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
                <v-text-field v-model="addUserForm.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
                <v-text-field type="tel" v-model="addUserForm.phone" :label="'Phone'" maxlength="14" @input="enforcePhoneFormat()" :rules="rules.requiredRules" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
                <v-select v-model="addUserForm.is_superuser" :label="'Account Level'" :items="selectOptions" style="width: 40%; font-size: 18px;"></v-select>
                <v-col cols="12">
                  <v-select
                    :items="locations"
                    item-value="name"
                    v-model="locationsChosen"
                    multiple
                    label="Select Channels Where User Is POC For Channel Approved Vendors"
                    clearable
                  >
                    <template slot="selection" slot-scope="data">
                      <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                    </template>
                    <template slot="item" slot-scope="data">
                      <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                    </template>
                  </v-select>
<!--                  <v-checkbox-->
<!--                    label="Select this to assign ALL channels to this user"-->
<!--                    v-model="locationsChosenCheck"-->
<!--                  ></v-checkbox>-->
                </v-col>
                <v-card-text>Please Note The Difference Between Account Level Permissions.</v-card-text>
                <v-card-text><span style="font-weight: bold;">SOWerk Administrator Accounts</span> can create & manage property locations, add staff accounts, and access any vendor applicants or approved vendors.</v-card-text>
                <v-card-text><span style="font-weight: bold;">SOWerk Staff Accounts</span> offer you the tools to create structure within your company. A Staff Account can be limited to one property location or you may select a few locations where this person can find, vet, & manage vendors for only that location.</v-card-text>
                <transition name="slide-fade">
                  <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
                  <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>
                </transition>
              </v-form>
            </transition>
            <!--    <transition name="slide-fade">-->
            <!--      <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>-->
            <!--      <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>-->
            <!--    </transition>-->
          </template>
        </v-card>

        <!-- THIS RENDERS IF COMPANY_TYPE = FALSE -->
        <section class=" d-flex flex-column align-center" v-else>
          <v-skeleton-loader
            v-if="!companyLoad"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="70vw"
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <v-card v-if="this.requiredFieldsFilled === false && $vuetify.breakpoint.xl" class="mt-n8" style="position:absolute;top:45vh;justify-content:center;background-color:#a61c00;z-index:1;overlay:true">
              <v-card-title style="color:white;padding-top:12%;font-size:2.5rem;justify-content:space-around;">All Fields Are Required!</v-card-title>
              <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px; color: white">X</v-btn>
            </v-card>
          </transition>
          <template>
            <transition name="slide-fade">
              <v-card-title style="width: 40%; border-radius: 3px; font-size:2rem;line-height:1.5;" class="primary white--text justify-center font-weight-regular red-gradient mb-10" v-if="companyLoad">Invite A New User </v-card-title>
            </transition>
            <v-card-title v-if="companyLoad" style="color: white; font-size:1rem">Fill out the form below to add a new user to your company! All fields are required!</v-card-title>
            <transition name="slide-fade">
              <v-form style="width: 80%; background-color: white; border-radius: 20px; border: 1px solid #A61c00; box-shadow: 4px 4px 4px darkred" class="py-4 px-4 d-flex flex-wrap justify-center" v-if="companyLoad">
                <v-text-field type="email" v-model="addUserForm.email" :rules="rules.emailRules" :label="'Email'" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>
<!--                <v-text-field :type="'password'" v-model="addUserForm.password" :rules="rules.passwordRules" :label="'Temporary Password'" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>-->
                <v-text-field v-model="addUserForm.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px; color: white;" :rules="rules.requiredFirstNameRules"></v-text-field>
                <v-text-field v-model="addUserForm.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px; color: white;" :rules="rules.requiredLastNameRules"></v-text-field>
                <v-text-field type="tel" v-model="addUserForm.phone" :label="'Phone'" maxlength="14" @input="enforcePhoneFormat()" :rules="rules.phoneRules" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>
                <v-select
                  :items="selectOptions"
                  v-model="addUserForm.is_superuser"
                  label="Select the type of Account you want this User assigned to be"
                  style="width: 40%; font-size: 18px;"
                ></v-select>
                <v-col cols="12">
                  <v-select
                    :items="locations"
                    v-model="locationsChosen"
                    multiple
                    label="Select All of the Channels that you want to assign this user to"
                    clearable
                  >
                    <template slot="selection" slot-scope="data">
                      <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                    </template>
                    <template slot="item" slot-scope="data">
                      <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                    </template>
                  </v-select>
<!--                  <v-checkbox-->
<!--                    label="Select this to assign ALL channels to this user"-->
<!--                    v-model="locationsChosenCheck"-->
<!--                  ></v-checkbox>-->
                </v-col>
                <v-card-text>Please Note The Difference Between Account Level Permissions.</v-card-text>
                <v-card-text><span style="font-weight: bold;">SOWerk Administrator Accounts</span> can create & manage property locations, add staff accounts, and access any vendor applicants or approved vendors.</v-card-text>
                <v-card-text><span style="font-weight: bold;">SOWerk Staff Accounts</span> offer you the tools to create structure within your company. A Staff Account can be limited to one property location or you may select a few locations where this person can find, vet, & manage vendors for only that location.</v-card-text>
                <transition name="slide-fade">
                  <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
                  <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>
                </transition>
              </v-form>
            </transition>
            <!--    <transition name="slide-fade">-->
            <!--      <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>-->
            <!--      <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>-->
            <!--    </transition>-->
          </template>
        </section>

    </div>

  <!-- BREAKPOINT - LARGE - BREAK @ 1904-1264 pixels (1264 sidebar vanishes) -------------------------------------->
  <div v-else-if="$vuetify.breakpoint.lg">

      <!-- THIS RENDERS IF COMPANY_TYPE = TRUE -->
      <v-card class="d-flex flex-column align-center" v-if="company.company_type === 'true'">
        <v-skeleton-loader
          v-if="!companyLoad"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="70vw"
        ></v-skeleton-loader>
        <transition name="slide-fade">
          <v-card v-if="this.requiredFieldsFilled === false && $vuetify.breakpoint.lg" class="mt-n8" style="position:absolute;top:45vh;justify-content:center;background-color:#a61c00;z-index:1;overlay:true">
            <v-card-title style="color:white;padding-top:12%;font-size:2.5rem;justify-content:space-around;">All Fields Are Required!</v-card-title>
            <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px; color: white">X</v-btn>
          </v-card>
        </transition>
        <template>
          <transition name="slide-fade">
            <v-card-title style="width: 40%; border-radius: 3px; font-size:2rem;line-height:1.5;" class="primary white--text justify-center font-weight-regular red-gradient mb-10" v-if="companyLoad">Invite A New User </v-card-title>
          </transition>
            <v-card-title v-if="companyLoad" style="color: #a61c00; font-size:1rem">Fill out the form below to add a new user to your company! All fields are required!</v-card-title>
          <transition name="slide-fade">
            <v-form style="width: 80%;" class="d-flex flex-wrap justify-center" v-if="companyLoad">
              <v-text-field type="email" v-model="addUserForm.email" :rules="rules.emailRules" :label="'Email'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
<!--              <v-text-field :type="'password'" v-model="addUserForm.password" :rules="rules.passwordRules" :label="'Temporary Password'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>-->
              <v-text-field v-model="addUserForm.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
              <v-text-field v-model="addUserForm.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
              <v-text-field type="tel" v-model="addUserForm.phone" :label="'Phone'" maxlength="14" @input="enforcePhoneFormat()" :rules="rules.requiredRules" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
              <v-select v-model="addUserForm.is_superuser" :label="'Account Level'" :items="selectOptions" style="width: 40%; font-size: 18px;"></v-select>
              <v-col cols="12">
                <v-select
                  :items="locations"
                  v-model="locationsChosen"
                  multiple
                  label="Select Channels Where User Is POC For Channel Approved Vendors"
                  clearable
                >
                  <template slot="selection" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                  <template slot="item" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                </v-select>
<!--                <v-checkbox-->
<!--                  label="Select this to assign ALL channels to this user"-->
<!--                  v-model="locationsChosenCheck"-->
<!--                ></v-checkbox>-->
              </v-col>
              <v-card-text>Please Note The Difference Between Account Level Permissions.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Administrator Accounts</span> can create & manage property locations, add staff accounts, and access any vendor applicants or approved vendors.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Staff Accounts</span> offer you the tools to create structure within your company. A Staff Account can be limited to one property location or you may select a few locations where this person can find, vet, & manage vendors for only that location.</v-card-text>
              <transition name="slide-fade">
                <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
                <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>
              </transition>
            </v-form>
          </transition>
          <!--    <transition name="slide-fade">-->
          <!--      <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>-->
          <!--      <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>-->
          <!--    </transition>-->
        </template>
      </v-card>

      <!-- THIS RENDERS IF COMPANY_TYPE = FALSE -->
      <v-card class="d-flex flex-column align-center" v-else>
        <v-skeleton-loader
          v-if="!companyLoad"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="70vw"
        ></v-skeleton-loader>
        <transition name="slide-fade">
          <v-card v-if="this.requiredFieldsFilled === false && $vuetify.breakpoint.lg" class="mt-n8" style="position:absolute;top:45vh;justify-content:center;background-color:#a61c00;z-index:1;overlay:true">
            <v-card-title style="color:white;padding-top:12%;font-size:2.5rem;justify-content:space-around;">All Fields Are Required!</v-card-title>
            <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px; color: white">X</v-btn>
          </v-card>
        </transition>
        <template>
          <transition name="slide-fade">
            <v-card-title style="width: 40%; border-radius: 3px; font-size:2rem;line-height:1.5;" class="primary white--text justify-center font-weight-regular red-gradient mb-10" v-if="companyLoad">Invite A New User </v-card-title>
          </transition>
          <v-card-title v-if="companyLoad" style="color: white; font-size:1rem">Fill out the form below to add a new user to your company! All fields are required!</v-card-title>
          <transition name="slide-fade">
            <v-form style="width: 80%; background-color: white; border-radius: 20px; border: 1px solid #A61c00; box-shadow: 4px 4px 4px darkred" class="py-4 px-4 d-flex flex-wrap justify-center" v-if="companyLoad">
              <v-text-field type="email" v-model="addUserForm.email" :rules="rules.emailRules" :label="'Email'" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>
<!--              <v-text-field :type="'password'" v-model="addUserForm.password" :rules="rules.passwordRules" :label="'Temporary Password'" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>-->
              <v-text-field v-model="addUserForm.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px; color: white;" :rules="rules.requiredFirstNameRules"></v-text-field>
              <v-text-field v-model="addUserForm.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px; color: white;" :rules="rules.requiredLastNameRules"></v-text-field>
              <v-text-field type="tel" v-model="addUserForm.phone" :label="'Phone'" maxlength="14" @input="enforcePhoneFormat()" :rules="rules.phoneRules" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>
              <v-select
                :items="selectOptions"
                v-model="addUserForm.is_superuser"
                label="Select the type of Account you want this User assigned to be"
                style="width: 40%; font-size: 18px;"
              ></v-select>
              <v-col cols="12">
                <v-select
                  :items="locations"
                  v-model="locationsChosen"
                  multiple
                  label="Select All of the Channels that you want to assign this user to"
                  clearable
                >
                  <template slot="selection" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                  <template slot="item" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                </v-select>
<!--                <v-checkbox-->
<!--                  label="Select this to assign ALL channels to this user"-->
<!--                  v-model="locationsChosenCheck"-->
<!--                ></v-checkbox>-->
              </v-col>
              <v-card-text>Please Note The Difference Between Account Level Permissions.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Administrator Accounts</span> can create & manage property locations, add staff accounts, and access any vendor applicants or approved vendors.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Staff Accounts</span> offer you the tools to create structure within your company. A Staff Account can be limited to one property location or you may select a few locations where this person can find, vet, & manage vendors for only that location.</v-card-text>
              <transition name="slide-fade">
                <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
                <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>
              </transition>
            </v-form>
          </transition>
          <!--    <transition name="slide-fade">-->
          <!--      <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>-->
          <!--      <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>-->
          <!--    </transition>-->
        </template>
      </v-card>

  </div>

  <!-- BREAKPOINT - MEDIUM - BREAK @ 1264-960 pixels ------------------------------------------------------------>
  <div v-else-if="$vuetify.breakpoint.md">

      <!-- THIS RENDERS IF COMPANY_TYPE = TRUE -->
      <v-card class="d-flex flex-column align-center" v-if="company.company_type === 'true'">
        <v-skeleton-loader
          v-if="!companyLoad"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="70vw"
        ></v-skeleton-loader>
        <transition name="slide-fade">
          <v-card v-if="this.requiredFieldsFilled === false && $vuetify.breakpoint.md" class="mt-n8" style="position:absolute;top:45vh;justify-content:center;background-color:#a61c00;z-index:1;overlay:true">
            <v-card-title style="color:white;padding-top:12%;font-size:2.5rem;justify-content:space-around;">All Fields Are Required!</v-card-title>
            <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px; color: white">X</v-btn>
          </v-card>
        </transition>
        <template>
          <transition name="slide-fade">
            <v-card-title style="width: 40%; border-radius: 3px; font-size:2rem;line-height:1.5;" class="primary white--text justify-center font-weight-regular red-gradient mb-10" v-if="companyLoad">Invite A New User </v-card-title>
          </transition>
            <v-card-title v-if="companyLoad" style="color: #a61c00; font-size:1rem">Fill out the form below to add a new user to your company! All fields are required!</v-card-title>
          <transition name="slide-fade">
            <v-form style="width: 80%;" class="d-flex flex-wrap justify-center" v-if="companyLoad">
              <v-text-field type="email" v-model="addUserForm.email" :rules="rules.emailRules" :label="'Email'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
<!--              <v-text-field :type="'password'" v-model="addUserForm.password" :rules="rules.passwordRules" :label="'Temporary Password'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>-->
              <v-text-field v-model="addUserForm.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
              <v-text-field v-model="addUserForm.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
              <v-text-field type="tel" v-model="addUserForm.phone" :label="'Phone'" maxlength="14" @input="enforcePhoneFormat()" :rules="rules.requiredRules" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
              <v-select v-model="addUserForm.is_superuser" :label="'Account Level'" :items="selectOptions" style="width: 40%; font-size: 18px;"></v-select>
              <v-col cols="12">
                <v-select
                  :items="locations"
                  v-model="locationsChosen"
                  multiple
                  label="Select Channels Where User Is POC For Channel Approved Vendors"
                  clearable
                >
                  <template slot="selection" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                  <template slot="item" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                </v-select>
<!--                <v-checkbox-->
<!--                  label="Select this to assign ALL channels to this user"-->
<!--                  v-model="locationsChosenCheck"-->
<!--                ></v-checkbox>-->
              </v-col>
              <v-card-text>Please Note The Difference Between Account Level Permissions.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Administrator Accounts</span> can create & manage property locations, add staff accounts, and access any vendor applicants or approved vendors.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Staff Accounts</span> offer you the tools to create structure within your company. A Staff Account can be limited to one property location or you may select a few locations where this person can find, vet, & manage vendors for only that location.</v-card-text>
              <transition name="slide-fade">
                <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
                <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>
              </transition>
            </v-form>
          </transition>
          <!--    <transition name="slide-fade">-->
          <!--      <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>-->
          <!--      <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>-->
          <!--    </transition>-->
        </template>
      </v-card>

      <!-- THIS RENDERS IF COMPANY_TYPE = FALSE -->
      <v-card class="d-flex flex-column align-center" v-else>
        <v-skeleton-loader
          v-if="!companyLoad"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="70vw"
        ></v-skeleton-loader>
        <transition name="slide-fade">
          <v-card v-if="this.requiredFieldsFilled === false && $vuetify.breakpoint.md" class="mt-n8" style="position:absolute;top:45vh;justify-content:center;background-color:#a61c00;z-index:1;overlay:true">
            <v-card-title style="color:white;padding-top:12%;font-size:2.5rem;justify-content:space-around;">All Fields Are Required!</v-card-title>
            <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px; color: white">X</v-btn>
          </v-card>
        </transition>
        <template>
          <transition name="slide-fade">
            <v-card-title style="width: 40%; border-radius: 3px; font-size:2rem;line-height:1.5;" class="primary white--text justify-center font-weight-regular red-gradient mb-10" v-if="companyLoad">Invite A New User </v-card-title>
          </transition>
          <v-card-title v-if="companyLoad" style="color: white; font-size:1rem">Fill out the form below to add a new user to your company! All fields are required!</v-card-title>
          <transition name="slide-fade">
            <v-form style="width: 80%; background-color: white; border-radius: 20px; border: 1px solid #A61c00; box-shadow: 4px 4px 4px darkred" class="py-4 px-4 d-flex flex-wrap justify-center" v-if="companyLoad">
              <v-text-field type="email" v-model="addUserForm.email" :rules="rules.emailRules" :label="'Email'" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>
<!--              <v-text-field :type="'password'" v-model="addUserForm.password" :rules="rules.passwordRules" :label="'Temporary Password'" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>-->
              <v-text-field v-model="addUserForm.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px; color: white;" :rules="rules.requiredFirstNameRules"></v-text-field>
              <v-text-field v-model="addUserForm.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px; color: white;" :rules="rules.requiredLastNameRules"></v-text-field>
              <v-text-field type="tel" v-model="addUserForm.phone" :label="'Phone'" maxlength="14" @input="enforcePhoneFormat()" :rules="rules.phoneRules" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>
              <v-select
                :items="selectOptions"
                v-model="addUserForm.is_superuser"
                label="Select the type of Account you want this User assigned to be"
                style="width: 40%; font-size: 18px;"
              ></v-select>
              <v-col cols="12">
                <v-select
                  :items="locations"
                  v-model="locationsChosen"
                  multiple
                  label="Select All of the Channels that you want to assign this user to"
                  clearable
                >
                  <template slot="selection" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                  <template slot="item" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                </v-select>
<!--                <v-checkbox-->
<!--                  label="Select this to assign ALL channels to this user"-->
<!--                  v-model="locationsChosenCheck"-->
<!--                ></v-checkbox>-->
              </v-col>
              <v-card-text>Please Note The Difference Between Account Level Permissions.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Administrator Accounts</span> can create & manage property locations, add staff accounts, and access any vendor applicants or approved vendors.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Staff Accounts</span> offer you the tools to create structure within your company. A Staff Account can be limited to one property location or you may select a few locations where this person can find, vet, & manage vendors for only that location.</v-card-text>
              <transition name="slide-fade">
                <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
                <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>
              </transition>
            </v-form>
          </transition>
          <!--    <transition name="slide-fade">-->
          <!--      <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>-->
          <!--      <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>-->
          <!--    </transition>-->
        </template>
      </v-card>

  </div>

  <!-- BREAKPOINT - SMALL - BREAK @ 960-600 pixels ------------------------------------------------------------>
  <div v-else-if="$vuetify.breakpoint.sm">

      <!-- THIS RENDERS IF COMPANY_TYPE = TRUE -->
      <v-card class="d-flex flex-column align-center" v-if="company.company_type === 'true'">
        <v-skeleton-loader
          v-if="!companyLoad"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="70vw"
        ></v-skeleton-loader>

        <transition name="slide-fade">
          <v-card v-if="this.requiredFieldsFilled === false && $vuetify.breakpoint.sm" class="mt-n8" style="position:absolute;top:55vh;justify-content:center;background-color:#a61c00;z-index:1;overlay:true">
            <v-card-title style="color:white;padding-top:12%;font-size:1.8rem;justify-content:space-around;">All Fields Are Required!</v-card-title>
            <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px; color: white">X</v-btn>
          </v-card>

        </transition>

        <template>
          <transition name="slide-fade">
            <v-card-title style="width: 40%; border-radius: 3px; font-size:1.5rem;line-height:1.5;" class="primary white--text justify-center font-weight-regular red-gradient mb-10" v-if="companyLoad">Invite A New User </v-card-title>
          </transition>
            <v-card-title v-if="companyLoad" style="color: #a61c00; font-size:.8rem">Fill out the form below to add a new user to your company! All fields are required!</v-card-title>
          <transition name="slide-fade">
            <v-form style="width: 80%;" class="d-flex flex-wrap justify-center" v-if="companyLoad">
              <v-text-field type="email" v-model="addUserForm.email" :rules="rules.emailRules" :label="'Email'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
<!--              <v-text-field :type="'password'" v-model="addUserForm.password" :rules="rules.passwordRules" :label="'Temporary Password'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>-->
              <v-text-field v-model="addUserForm.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
              <v-text-field v-model="addUserForm.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
              <v-text-field type="tel" v-model="addUserForm.phone" :label="'Phone'" maxlength="14" @input="enforcePhoneFormat()" :rules="rules.requiredRules" class="mx-2" style="width: 40%; font-size: 18px;"></v-text-field>
              <v-select v-model="addUserForm.is_superuser" :label="'Account Level'" :items="selectOptions" style="width: 40%; font-size: 18px;"></v-select>
              <v-col cols="12">
                <v-select
                  :items="locations"
                  v-model="locationsChosen"
                  multiple
                  label="Select Channels Where User Is POC For Channel Approved Vendors"
                  clearable
                >
                  <template slot="selection" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                  <template slot="item" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                </v-select>
<!--                <v-checkbox-->
<!--                  label="Select this to assign ALL channels to this user"-->
<!--                  v-model="locationsChosenCheck"-->
<!--                ></v-checkbox>-->
              </v-col>
              <v-card-text>Please Note The Difference Between Account Level Permissions.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Administrator Accounts</span> can create & manage property locations, add staff accounts, and access any vendor applicants or approved vendors.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Staff Accounts</span> offer you the tools to create structure within your company. A Staff Account can be limited to one property location or you may select a few locations where this person can find, vet, & manage vendors for only that location.</v-card-text>
              <transition name="slide-fade">
                <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
                <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>
              </transition>
            </v-form>
          </transition>
          <!--    <transition name="slide-fade">-->
          <!--      <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>-->
          <!--      <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>-->
          <!--    </transition>-->
        </template>
      </v-card>

      <!-- THIS RENDERS IF COMPANY_TYPE = FALSE -->
      <v-card class="d-flex flex-column align-center" v-else>
        <v-skeleton-loader
          v-if="!companyLoad"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="70vw"
        ></v-skeleton-loader>

        <transition name="slide-fade">
          <v-card v-if="this.requiredFieldsFilled === false && $vuetify.breakpoint.sm" class="mt-n8" style="position:absolute;top:55vh;justify-content:center;background-color:#a61c00;z-index:1;overlay:true">
            <v-card-title style="color:white;padding-top:12%;font-size:1.8rem;justify-content:space-around;">All Fields Are Required!</v-card-title>
            <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px; color: white">X</v-btn>
          </v-card>
        </transition>

        <template>
          <transition name="slide-fade">
            <v-card-title style="width: 40%; border-radius: 3px; font-size:2rem;line-height:1.5;" class="primary white--text justify-center font-weight-regular red-gradient mb-10" v-if="companyLoad">Invite A New User </v-card-title>
          </transition>
          <v-card-title v-if="companyLoad" style="color: white; font-size:1rem">Fill out the form below to add a new user to your company! All fields are required!</v-card-title>
          <transition name="slide-fade">
            <v-form style="width: 80%; background-color: white; border-radius: 20px; border: 1px solid #A61c00; box-shadow: 4px 4px 4px darkred" class="py-4 px-4 d-flex flex-wrap justify-center" v-if="companyLoad">
              <v-text-field type="email" v-model="addUserForm.email" :rules="rules.emailRules" :label="'Email'" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>
<!--              <v-text-field :type="'password'" v-model="addUserForm.password" :rules="rules.passwordRules" :label="'Temporary Password'" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>-->
              <v-text-field v-model="addUserForm.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px; color: white;" :rules="rules.requiredFirstNameRules"></v-text-field>
              <v-text-field v-model="addUserForm.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px; color: white;" :rules="rules.requiredLastNameRules"></v-text-field>
              <v-text-field type="tel" v-model="addUserForm.phone" :label="'Phone'" maxlength="14" @input="enforcePhoneFormat()" :rules="rules.phoneRules" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>
              <v-select
                :items="selectOptions"
                v-model="addUserForm.is_superuser"
                label="Select the type of Account you want this User assigned to be"
                style="width: 40%; font-size: 18px;"
              ></v-select>
              <v-col cols="12">
                <v-select
                  :items="locations"
                  v-model="locationsChosen"
                  multiple
                  label="Select All of the Channels that you want to assign this user to"
                  clearable
                >
                  <template slot="selection" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                  <template slot="item" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                </v-select>
<!--                <v-checkbox-->
<!--                  label="Select this to assign ALL channels to this user"-->
<!--                  v-model="locationsChosenCheck"-->
<!--                ></v-checkbox>-->
              </v-col>
              <v-card-text>Please Note The Difference Between Account Level Permissions.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Administrator Accounts</span> can create & manage property locations, add staff accounts, and access any vendor applicants or approved vendors.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Staff Accounts</span> offer you the tools to create structure within your company. A Staff Account can be limited to one property location or you may select a few locations where this person can find, vet, & manage vendors for only that location.</v-card-text>
              <transition name="slide-fade">
                <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
                <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>
              </transition>
            </v-form>
          </transition>
          <!--    <transition name="slide-fade">-->
          <!--      <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>-->
          <!--      <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>-->
          <!--    </transition>-->
        </template>
      </v-card>

  </div>

  <!-- BREAKPOINT - EXTRA-SMALL - BREAK @ 600- pixels ------------------------------------------------------------>
  <div v-else-if="$vuetify.breakpoint.xs">

      <!-- THIS RENDERS IF COMPANY_TYPE = TRUE -->
      <v-card class="d-flex flex-column align-center" v-if="company.company_type === 'true'">
        <v-skeleton-loader
          v-if="!companyLoad"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="70vw"
        ></v-skeleton-loader>

        <transition name="slide-fade">
          <v-card v-if="this.requiredFieldsFilled === false && $vuetify.breakpoint.xs" class="mt-n8" style="position:absolute;top:55vh;justify-content:center;background-color:#a61c00;z-index:1;overlay:true">
            <v-card-title style="color:white;padding-top:12%;font-size:1.8rem;justify-content:space-around;">All Fields Are Required!</v-card-title>
            <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px; color: white">X</v-btn>
          </v-card>

        </transition>

        <template>
          <transition name="slide-fade">
            <v-card-title style="width: 40%; border-radius: 3px; font-size:1.1rem;line-height:1.5;" class="primary white--text justify-center font-weight-regular red-gradient mb-10" v-if="companyLoad">Invite A New User </v-card-title>
          </transition>
            <v-card-title v-if="companyLoad" style="color: #a61c00; font-size:.9rem;">Fill out the form below to add a new user to </v-card-title>
            <v-card-title v-if="companyLoad" style="color: #a61c00; font-size:.9rem;">your company! All fields are required!</v-card-title>
          <transition name="slide-fade">
            <v-form style="width: 80%;" class="d-flex flex-wrap justify-center" v-if="companyLoad">
              <v-text-field type="email" v-model="addUserForm.email" :rules="rules.emailRules" :label="'Email'" class="mx-2" style="width: 40%; font-size: 1rem;"></v-text-field>
<!--              <v-text-field :type="'password'" v-model="addUserForm.password" :rules="rules.passwordRules" :label="'Temporary Password'" class="mx-2" style="width: 40%; font-size: 1rem;"></v-text-field>-->
              <v-text-field v-model="addUserForm.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 1rem;"></v-text-field>
              <v-text-field v-model="addUserForm.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 1rem;"></v-text-field>
              <v-text-field type="tel" v-model="addUserForm.phone" :label="'Phone'" maxlength="14" @input="enforcePhoneFormat()" :rules="rules.requiredRules" class="mx-2" style="width: 40%; font-size: 1rem;"></v-text-field>
              <v-select v-model="addUserForm.is_superuser" :label="'Account Level'" :items="selectOptions" class="mx-2" style="width: 40%; font-size: 18px;"></v-select>
              <v-col cols="12">
                <v-select
                  :items="locations"
                  item-text="name"
                  v-model="locationsChosen"
                  multiple
                  label="Select Channels Where User Is POC For Channel Approved Vendors"
                  clearable
                >
                  <template slot="selection" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                  <template slot="item" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                </v-select>
<!--                <v-checkbox-->
<!--                  label="Select this to assign ALL channels to this user"-->
<!--                  v-model="locationsChosenCheck"-->
<!--                ></v-checkbox>-->
              </v-col>
              <v-card-text>Please Note The Difference Between Account Level Permissions.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Administrator Accounts</span> can create & manage property locations, add staff accounts, and access any vendor applicants or approved vendors.</v-card-text>
              <v-card-text><span style="font-weight: bold;">SOWerk Staff Accounts</span> offer you the tools to create structure within your company. A Staff Account can be limited to one property location or you may select a few locations where this person can find, vet, & manage vendors for only that location.</v-card-text>
              <transition name="slide-fade">
                <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
                <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>
              </transition>
            </v-form>
          </transition>
          <!--    <transition name="slide-fade">-->
          <!--      <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>-->
          <!--      <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>-->
          <!--    </transition>-->
        </template>
      </v-card>

      <!-- THIS RENDERS IF COMPANY_TYPE = FALSE -->
      <v-card class="d-flex flex-column align-center" v-else>
        <v-skeleton-loader
          v-if="!companyLoad"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="70vw"
        ></v-skeleton-loader>

        <transition name="slide-fade">
          <v-card v-if="this.requiredFieldsFilled === false && $vuetify.breakpoint.xs" class="mt-n8" style="position:absolute;top:55vh;justify-content:center;background-color:#a61c00;z-index:1;overlay:true">
            <v-card-title style="color:white;padding-top:12%;font-size:1.8rem;justify-content:space-around;">All Fields Are Required!</v-card-title>
            <v-btn @click="editExit" text style="font-size: 24px; position: absolute; right: 5px; top: 5px; color: white">X</v-btn>
          </v-card>
        </transition>

        <template>
          <transition name="slide-fade">
            <v-card-title style="width: 40%; border-radius: 3px; font-size:2rem;line-height:1.5;" class="primary white--text justify-center font-weight-regular red-gradient mb-10" v-if="companyLoad">Invite A New User </v-card-title>
          </transition>
          <v-card-title v-if="companyLoad" style="color: white; font-size:1rem">Fill out the form below to add a new user to your company! All fields are required!</v-card-title>
          <transition name="slide-fade">
            <v-form style="width: 80%; background-color: white; border-radius: 20px; border: 1px solid #A61c00; box-shadow: 4px 4px 4px darkred" class="py-4 px-4 d-flex flex-wrap justify-center" v-if="companyLoad">
              <v-text-field type="email" v-model="addUserForm.email" :rules="rules.emailRules" :label="'Email'" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>
<!--              <v-text-field :type="'password'" v-model="addUserForm.password" :rules="rules.passwordRules" :label="'Temporary Password'" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>-->
              <v-text-field v-model="addUserForm.first_name" :label="'First Name'" class="mx-2" style="width: 40%; font-size: 18px; color: white;" :rules="rules.requiredFirstNameRules"></v-text-field>
              <v-text-field v-model="addUserForm.last_name" :label="'Last Name'" class="mx-2" style="width: 40%; font-size: 18px; color: white;" :rules="rules.requiredLastNameRules"></v-text-field>
              <v-text-field type="tel" v-model="addUserForm.phone" :label="'Phone'" maxlength="14" @input="enforcePhoneFormat()" :rules="rules.phoneRules" class="mx-2" style="width: 40%; font-size: 18px; color: white;"></v-text-field>
              <v-select
                :items="selectOptions"
                v-model="addUserForm.is_superuser"
                label="Select the type of Account you want this User assigned to be"
                style="width: 40%; font-size: 18px;"
              ></v-select>
              <v-col cols="12">
                <v-select
                  :items="locations"
                  v-model="locationsChosen"
                  multiple
                  label="TSelect All of the Channels that you want to assign this user to"
                  clearable
                >
                  <template slot="selection" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                  <template slot="item" slot-scope="data">
                    <v-card-text style="" v-if="data.item.name">{{ data.item.name }}</v-card-text>
                  </template>
                </v-select>
<!--                <v-checkbox-->
<!--                  label="Select this to assign ALL channels to this user"-->
<!--                  v-model="locationsChosenCheck"-->
<!--                ></v-checkbox>-->
              </v-col>
              <v-card-text>Please Note The Difference Between Account Level Permissions.</v-card-text>
              <v-card-text><span style="font-weight: bold;">Super Administrator Accounts</span> can create & manage any and all Channels, add User Accounts, access any part of Vendor requirements, and manage any and all aspects of a Vendor relationship in the account.</v-card-text>
              <v-card-text><span style="font-weight: bold;">Staff Accounts</span> offer you the tools to create structure within your company. A Staff Account can be limited to one Channel or as many Channels as you like. A Staff Account, in a number of ways, is similar to a Super Administrator Account but limited to a specific Channel(s).</v-card-text>
              <transition name="slide-fade">
                <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>
                <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>
              </transition>
            </v-form>
          </transition>
          <!--    <transition name="slide-fade">-->
          <!--      <v-btn v-if="companyLoad" @click="submitAddUser" style="width: 50%;" class="my-4" large color="primary" rounded>Submit</v-btn>-->
          <!--      <v-card-title style="color: #a61c00" class="mb-6 mt-n2" v-if="successAddUserForm === true">SUCCESS! You have added a new user, please let them know to check their email and verify their account so they can login and start using SOWerk!</v-card-title>-->
          <!--    </transition>-->
        </template>
      </v-card>

  </div>

</template>
<script>
  export default {
    name: 'add-user',
    layout: 'app',
    data() {
      return {
        locations: null,
        locationsChosen: [],
        locationsChosenCheck: false,
        requiredFieldsFilled: null,
        company: {},
        companyLoad: false,
        addModal: false,
        addUserForm: {
          companies_id: Number,
          email: '',
          password: '',
          is_superuser: false,
          first_name: '',
          last_name: '',
          phone: '',
          isVerified: false,
          companyName: "",
          companyImg: "",
          senderFirstName: "",
          senderLastName: "",
          temporaryPasswordBoolean: true,
        },
        successAddUserForm: false,
        selectOptions: [
          'Super Admin',
          'Staff Account'
        ],
        rules: {
          requiredRules: [(v) => !!v || 'Field is required'],
          requiredFirstNameRules: [(v) => !!v || 'First Name is required'],
          requiredLastNameRules: [(v) => !!v || 'Last Name is required'],
          // usernameRules: [
          //   (v) => !!v  'Name is required',
          //   (v) =>
          //     (v && v.length <= 100)  'Name must be less than 100 characters',
          // ],
          emailRules: [
            v => !!v || 'E-mail is required',
            (v) => /.+@.+/.test(v) || 'E-mail must be valid',
            // v => /.+@.[A-Z]+/.test(v)  'E-mail must be valid',
            v => (v && v.length <= 100) || 'Email must be less than 100 characters'
          ],
          // emailNotRequiredRules: [
          //   (v) => /.+@.+/.test(v)  'E-mail must be valid',
          //   (v) =>
          //     (v && v.length <= 100)  'Email must be less than 100 characters',
          // ],
          phoneRules: [
            (v) => (v && v.length === 14) || 'Phone Number must be 10 digits',
          ],
          passwordRules: [
            v => !!v || 'Password is required',
            v => /[*@!?#%&()^~{}]+/.test(v) || 'Password must contain 1 special character',
            v => /[A-Z]+/.test(v) || 'Password must contain at least 1 Uppercase character',
            v => /[a-z]+/.test(v) || 'Password must contain at least 1 Lowercase character',
            v => /[0-9]+/.test(v) || 'Password must contain at least 1 Number ',
            v => (v && v.length >= 6) || 'Password must be at least 6 characters',
            v => (v && v.length <= 255) || 'Password must be less than 255 characters'
          ]
          ,
          selectRules: [
            v => !!v || 'You must select either Super Admin or Staff Account'
          ]
          // urlRules: [
          //   v => !!v  'A website is required',
          //   v => /.+([A-Z0-9a-z]+).([a-z]+)+/.test(v)  'A valid URL is required',/[a-z]://www./
          //   v => (v && v.length >= 4)  'URL must be at least 4 characters',
          //   v => (v && v.length <= 250) || 'URL must be less than 250 characters'
          // ]
        },
        confirmPassword: null,
      }
    },
    async mounted() {
      await this.getCompany();
      await this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + this.$store.state.user.user.user.companies_id)
        .then(async (response) => {
          this.locations = response.data.location
          console.log(this.locations)
        })
        .catch(err => {
          console.log("error log", err)
        })
    },
    computed: {
      currentUser() {
        return this.$store.getters['user/user'].user.user;
      },
      confirmPasswordRules() {
        return [
          () =>
            this.addUserForm.password === this.confirmPassword || 'Password must match',
          (v) => !!v || 'Confirmation Password is required',
        ]
      },
    },
    methods: {
      async getCompany() {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id)
          .then(response => {
            console.log(response.data, 'company');
            this.company = response.data
          })
          .catch(err => {
            console.log(err, 'error in getting company')
          })

        this.companyLoad = true;
      },
      async submitAddUser() {
        if (this.addUserForm.email === '' || this.addUserForm.first_name === '' || this.addUserForm.last_name === ''||  this.addUserForm.phone === '' || this.addUserForm.is_superuser === '') {
          if(this.locationsChosenCheck === true) {
            this.locationsChosen = this.locations;
          }
          console.log(this.locationsChosen, 'locationsChosen', this.locationsChosenCheck);

          return this.requiredFieldsFilled = false
        } else {
          if(this.locationsChosenCheck === true) {
            this.locationsChosen = this.locations;
          }
          this.requiredFieldsFilled = true
          this.addUserForm.companies_id = this.company.id;
          this.addUserForm.companyName = this.company.account_name;
          this.addUserForm.companyImg = this.company.imgUrl;
          this.addUserForm.senderFirstName = this.currentUser.first_name;
          this.addUserForm.senderLastName = this.currentUser.last_name;
          this.addUserForm.password = '!' + Math.random().toString(36).substr(2, 8) + '!';
          if(this.addUserForm.is_superuser === 'Super Admin') {
            this.addUserForm.is_superuser = true;
          } else {
            this.addUserForm.is_superuser = false;
          }
          console.log(this.locationsChosen, 'locationsChosen');
          if(this.locationsChosen.length > 0) {
            this.locationsChosen.forEach(location => {
              this.$http.put('https://www.sowerkbackend.com/api/locations/' + location.id, {
                email: this.addUserForm.email,
                contact_first_name: this.addUserForm.first_name,
                contact_last_name: this.addUserForm.last_name,
                phone: this.addUserForm.phone
              })
                .then(response => {
                  console.log(response, 'respones for put edit location on submit')
                })
                .catch(err => {
                  console.log(err, 'err in put edit location on submit')
                })
            })
          }
          setTimeout(() => {
            this.$http.post('https://www.sowerkbackend.com/api/auth/register/userAdd', this.addUserForm)
              .then(response => {
                console.log(response, 'SUCCESS IN REGISTERING')
              })
              .catch(err => {
                console.log(err, 'ERROR IN REGISTERING')
              })
            console.log(this.addUserForm);
            this.successAddUserForm = true;
            this.$router.push('../user-creation')
          }, 2000)
        }
      },
      enforcePhoneFormat() {
        let x = this.addUserForm.phone
          .replace(/\D/g, "")
          .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);

        this.addUserForm.phone = !x[2]
          ? x[1]
          : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
      },
      editExit() {
        this.requiredFieldsFilled = true
      },
      async massAssignUserToLocation(location) {
        // document.getElementById(location.id).checked = !document.getElementById(location.id).checked
        // console.log(document.getElementById(location.id).checked, 'checked');
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
      async removeLocation(locationVal) {
        this.locationsChosen = this.locationsChosen.filter(location => location.name !== locationVal.name)
      }
    }
  }
</script>

<style scoped>

  /*  Enter and leave animations can use different */
  /*  durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    .slide-fade-leave-active below version 2.1.8 {
    transform: translateX(10px);
    opacity: 0;
  }

</style>

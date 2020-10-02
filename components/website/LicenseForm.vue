<template>
  <v-list-item :class="backgroundColor" class="py-6">
    <v-row justify="center">
      <v-col cols="10">
        <v-form>
          <v-row>
            <v-col cols="12" md="6" class="d-flex flex-column align-center">
              <p class="text-h6">Upload A Copy Of License</p>
              <ul>
                <li class="text-body-1 font-weight-regular">License Card</li>
              </ul>
              <v-file-input class="insurance-upload my-8"></v-file-input>
              <v-checkbox label="Allow Uploaded Document to be Visible to Others"></v-checkbox>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column justify-space-around">
              <v-text-field label="License Name" class="license__input flex-grow-0" placeholder=" " v-model="license.name" hint="An Label For Your Own Internal Naming Purposes"></v-text-field>
              <v-text-field label="License Number" class="license__input flex-grow-0" placeholder=" " v-model="license.number"></v-text-field>
              <v-select label="License Type" class="license__input flex-grow-0" placeholder=" " v-model="license.type"></v-select>
              <v-select label="License Location" class="license__input flex-grow-0" placeholder=" " v-model="license.licenseLocation"></v-select>
              <v-text-field label="Expiration Date" class="license__input flex-grow-0" placeholder=" " v-model="license.expirationDate"></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-list-item>
</template>

<script>
  export default {
    name: 'InsuranceForm',
    props: {
      index: {
        type: Number,
      },
      license: {
        type: Object,
        required: true
      },
      backgroundColor: {
        type: String,
        required: true
      }
    },
  }
</script>

<style scoped>
  .insurance-upload {
    max-width: 300px;
    height: 100vh;
    max-height: 300px;
    width: 100%;
  }

  .insurance-upload >>> .v-input__control {
    height: 100%;
    position: relative;
  }

  .insurance-upload >>> .v-input__control:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '+';
    font-weight: bold;
    color: white;
    font-size: 100px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }

  .insurance-upload >>> .v-input__slot {
    height: 100%;
    background-color: #ddd;
    border-radius: 10px;
    -webkit-box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.5);
  }

  .insurance-upload >>> .v-input__slot:hover {
    cursor: pointer;
  }

  .insurance-upload >>> .v-input__prepend-outer {
    display: none;
  }

  .insurance-upload >>> .v-input__slot:before {
    height: 100%;
    border-width: 0;
  }

  .insurance-upload >>> .v-text-field__slot {
    height: 100%;
    width: 100%;
  }

  .insurance-upload >>> .v-input__slot:after {
    display: none;
  }

  .license__input >>> .v-label {
    color: black;
    font-weight: bold;
    font-size: 1.25em;
    top: 0;
  }
</style>

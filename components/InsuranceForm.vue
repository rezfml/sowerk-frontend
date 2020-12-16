<template>
  <v-list-item :class="backgroundColor" class="py-6">
    <v-row justify="center">
      <v-col cols="10">
        <v-form>
          <v-row>
            <v-col cols="12" md="6" class="d-flex flex-column align-center">
              <p class="text-h6">Upload Insurance Document</p>
              <ul>
                <li class="text-body-1 font-weight-regular">Proof of Policy</li>
                <li class="text-body-1 font-weight-regular">Certificate of Coverage</li>
              </ul>
              <div style="width: 100%; position: relative;" class="d-flex justify-center">
                <v-file-input class="insurance-upload my-8" :class="{'insurance-upload--selected' : file}" v-model="file" v-on:change.native="readFile"></v-file-input>
                <v-img :src="url" :aspect-ratio="1" style="position: absolute; max-width: 300px; height: 100%; width: 100%; max-height: 288px; bottom: 0;" class="my-8 pt-3" v-if="file"></v-img>
              </div>
              <v-checkbox label="Allow Uploaded Document to be Visible to Others" v-model="insurance.documentVisible"></v-checkbox>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column justify-space-around">
              <v-text-field label="Your Insurance Agency Name (Producer)" class="insurance__input flex-grow-0" placeholder=" " v-model="insurance.name"></v-text-field>
<!--              <v-select label="Insurance Company" class="insurance__input flex-grow-0" placeholder=" " v-model="insurance.insuranceCompany"></v-select>-->
              <v-text-field label="Insurance Company Name" class="insurance__input flex-grow-0" placeholder=" " v-model="insurance.insuranceCompany"></v-text-field>
              <v-text-field label="Policy Number" class="insurance__input flex-grow-0" placeholder=" " v-model="insurance.policyNumber"></v-text-field>
              <v-text-field label="Expiration Date" class="insurance__input flex-grow-0" placeholder=" " v-model="insurance.expirationDateVal" type="date"></v-text-field>
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
      insurance: {
        type: Object,
        required: true
      },
      backgroundColor: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        selectedFile: null,
        file: null,
        url: null,
      }
    },
    methods: {
      readFile(e) {
        this.selectedFile = e.target.files[0];

        this.url = URL.createObjectURL(this.selectedFile);
        console.log(this.url);

        this.$emit('selectFile', this.selectedFile, this.index);

      },
    }
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

  .insurance-upload--selected >>> .v-input__control:before {
    content: '';
  }

  .insurance-upload--selected >>> .v-input__icon.v-input__icon--clear {
    z-index: 10;
    background-color: white;
    border-radius: 0!important;
  }

  .insurance-upload >>> .v-input__append-inner {
    margin-top: 0!important;
  }

  .insurance-upload >>> .v-input__icon.v-input__icon--clear > button {
    color: #333;

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

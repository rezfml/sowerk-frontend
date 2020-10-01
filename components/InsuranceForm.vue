<template>
  <v-row class="mb-12">
    <v-card-title>Company Insurance</v-card-title>
    <v-row class="d-flex align-center">
      <v-col cols="12" md="6">
        <p>-Proof of Policy</p>
        <p>-Certificate of Coverage</p>
        <client-only >
          <v-image-input
            v-model="insurance.imageUrl"
            image-quality="0.85"
            clearable
            fullWidth
            image-format="png"
            uploadIcon="person"
            overlayPadding="10px"
            scalingSliderColor="red"
            :readonly="false"
            style=""
          />
        </client-only>
        <v-checkbox v-model="insurance.documentVisible"
                    :label="`Allow Uploaded Document to be Visible to Others`"></v-checkbox>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          placeholder="Insurance Company*"
          id="insurance_company"
          type="text"
          v-model="insurance.name"></v-text-field>
        <v-text-field
          placeholder="Policy Number"
          id="insurance_policy"
          type="text"
          v-model="insurance.policyNumber"></v-text-field>
        <v-text-field
          placeholder="Expiration Date*"
          id="insurance_expiration"
          type="date"
          v-model="insurance.expirationDate"></v-text-field>
      </v-col>
    </v-row>
    <v-card-title>Company Liscenses</v-card-title>
  </v-row>
</template>

<script>
  import VImageInput from 'vuetify-image-input'
  export default {
    name: 'InsuranceForm',
    props: {
      index: {
        type: Number,
        required: true
      },
      insurance: {
        type: Object,
        required: true
      }
    },
    components: {
      VImageInput
    }
  }
</script>

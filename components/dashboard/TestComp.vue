<!-- Vue Component -->

<template>
  <v-card>
    <v-card-title>
      <span v-text="title"></span>

      <v-spacer></v-spacer>

      <v-btn @click="$emit('action-btn:clicked')" class="emitButton">
        Action
      </v-btn>


      <v-btn @click="testButton" class="testButton">
        Test
      </v-btn>
    </v-card-title>

    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    data () {
        return {
            marvelMovies: [
                'Iron Man',
                'Avengers',
                'Infinity Wars'
            ],
            buttonTest: false
        }
    },
    methods: {
        testButton() {
            this.buttonTest = true
        }
    }
  }
</script>
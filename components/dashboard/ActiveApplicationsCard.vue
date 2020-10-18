<template>
  <p>Hi</p>
</template>

<script>
  export default {
    name:'activeapplicationscard',
    props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'company'],
    data() {
      return {

      }
    },
    async mounted() {
      console.log(this.items, 'yayyy');
    },
    methods: {

    }
  }
</script>

<style>

</style>

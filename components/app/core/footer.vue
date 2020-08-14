<template>
  <v-footer :fixed="fixed" app>
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
  export default {
    name: 'rightNavigation'
  }
</script>

<style scoped>

</style>

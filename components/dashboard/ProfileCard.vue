<template>
  <v-card class="mt-3" style="position: relative;" light>
    <v-img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" max-height="150px"></v-img>
    <div style="width: 100%; position: absolute; z-index: 3; top: 75px;" class="d-flex justify-center">
      <v-avatar style=" border: 3px solid #212121;" size="150" rounded class="text-center mx-auto elevation-10">
        <v-img src="https://prociseoutdoors.com/wp-content/uploads/2018/10/bass-pro-shops-logo-png-transparent-2.png" ></v-img>
      </v-avatar>
    </div>

    <v-card-title class="text-center mt-12 pt-12"><p class="mx-auto text-center">Bass Pro Shops</p></v-card-title>

    <v-card-text class="">
      <p class="body-2 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis ea nesciunt sint veritatis. Aliquid amet animi consequuntur, cumque eum, ipsum iusto laboriosam laudantium molestias pariatur quisquam quod sed, tempora?</p>
    </v-card-text>

  </v-card>
</template>

<script>
  export default {
    name: "ProfileCard"
  };
</script>

<style scoped>

</style>

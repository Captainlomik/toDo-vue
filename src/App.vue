<template>
  <v-app id='app'>
    <my-navbar></my-navbar>
    <div class="body">
      <router-view />
    </div>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
}
</script>

<style>
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

.body {
  margin: 0 250px;
}
</style>
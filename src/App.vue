<template>
    <my-navbar></my-navbar>
    <div class="body">
      <router-view />
    </div>
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
  margin: auto 250px 0 250px;
  height: calc(100vh - 65px);
}
</style>
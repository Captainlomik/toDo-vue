<template>
  <div class="all">
    <my-navbar></my-navbar>
    <div class="body">
      <router-view />
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


ul,
li {
  list-style: none;
}

h1,
h2,
h3,
p,
a,
small {
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}

h1 {
  font-weight: 800;
  font-size: 50px;
  line-height: 68px;
}

.all {
  margin: 0 150px;
  height: 100vh;
}

.body {
  height: calc(100vh - 101px);
}
</style>
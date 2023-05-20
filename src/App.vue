<template>
  <my-navbar></my-navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul, li{
  text-transform: none;
  text-decoration: none;
  list-style: none;
}

.app{
  margin: 0 200px;
}

</style>

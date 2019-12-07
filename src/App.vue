<template>
  <div id="content">
    <b-navbar id="myNavbar" toggleable="lg" variant="info">
      <b-navbar-brand>JedlikComplexStarter</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="shadow-sm m-1 rounded" to="/">Home</b-nav-item>
          <b-nav-item class="shadow-sm m-1 rounded" to="/home2">Home2</b-nav-item>
          <b-nav-item class="shadow-sm m-1 rounded" to="/store">Vuex store</b-nav-item>
          <b-nav-item class="shadow-sm m-1 rounded" to="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style>
#content {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#myNavbar {
  font-weight: bold;
}

#myNavbar a.router-link-exact-active {
  background-color: #42b983;
}
</style>

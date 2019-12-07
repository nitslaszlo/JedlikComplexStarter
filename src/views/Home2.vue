<template>
  <div id="home2">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorldExt msg="Hello World!" />
    <HelloWorldPlus />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorldExt from "@/components/HelloWorldExt.vue";
import HelloWorldPlus from "@/components/HelloWorldPlus.vue";

@Component({
  components: {
    HelloWorldExt,
    HelloWorldPlus
  }
})
export default class Home2 extends Vue {}
</script>

<style>
#home2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>

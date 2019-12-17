<template>
  <div class="home">
    <VuexDemoComp />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VuexDemoComp from "@/components/VuexDemoComp.vue"; // @ is an alias to /src

@Component({
  components: {
    VuexDemoComp
  }
})
export default class VuexDemo extends Vue {}
</script>

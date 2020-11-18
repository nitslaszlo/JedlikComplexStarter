<template>
  <div class="hello mx-auto">
    <!-- v-bind:title röviden :title -->
    <!-- v-on:click röviden @click -->
    <h1 :title="message" @click="showHide()">{{ msg }} {{ currentDateTime }}</h1>
    <h1 v-once :title="message" @click="showHide()">{{ msg }} {{ currentDateTime }}</h1>
    <h2 v-if="show">Mutat/Rejt (v-if)</h2>
    <h2 v-show="show">Mutat/Rejt (v-show)</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorldExt extends Vue {
  // TypeScript 2.7 includes a strict class checking where all the properties should be initialized in the constructor.
  // A workaround is to add the ! as a postfix to the variable name:
  @Prop() private msg!: string;
  private message: string = "Ez a title attributum";
  private show: boolean = true;
  private currentDateTime: string = new Date().toLocaleTimeString();

  created() {
    setInterval(() => (this.currentDateTime = new Date().toLocaleTimeString()), 1000);
  }

  private showHide(): void {
    this.show = !this.show;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: lemonchiffon;
  width: 40vw;
}
h1 {
  color: red;
}
</style>

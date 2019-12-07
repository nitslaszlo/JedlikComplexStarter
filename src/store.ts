// import MyModule from "@/store/MyModule";
import VuexDemoModule from "@/store/VuexDemoStore";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vuexDemoModule: VuexDemoModule
  }
});

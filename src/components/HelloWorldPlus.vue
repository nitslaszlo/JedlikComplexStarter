<template>
  <div class="plus mx-auto">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Kérem a neved</span>
      </div>
      <input v-model="nev" type="text" class="form-control" />
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">10 darab X:</span>
      </div>
      <input v-model="xek" type="text" class="form-control" />
    </div>
    <h1>Hello {{ nev }} {{ xek }} {{ felkialtojelek }}</h1>
    <p>Felkiáltójelek darabszáma: {{ felkialtojelDarab }}</p>
    <button type="button" class="btn m-2 btn-success" :disabled="felkialtojelDarab == 10" @click="onClick('+')">Plus</button>
    <button type="button" class="btn btn-danger" :disabled="felkialtojelDarab == 1" @click="onClick('-')">Minus</button>
    <ol>
      <li v-for="nap in napok" :key="nap">{{ nap }}</li>
    </ol>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Kérem a nap nevét</span>
      </div>
      <input v-model="inputNap" type="text" class="form-control" />
    </div>

    <button type="button" class="btn mr-2 btn-success" :disabled="!joNapHozzadni(iNap)" @click="hozzadNap()">Nap hozzáadása</button>
    <button type="button" class="btn btn-danger" :disabled="!joNapTorolni(iNap)" @click="torolNap()">Nap törlése</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class HelloWorldPlus extends Vue {
  private felkialtojelDarab: number;
  private nev: string;
  private xek: string;
  private felkialtojelek: string;
  private napok = ["hétfő", "kedd", "szerda"];
  private inputNap: string;

  public constructor() {
    super();
    this.felkialtojelDarab = 3;
    this.nev = "Jedlik Ányos";
    this.felkialtojelek = "!!!";
    this.xek = "";
    this.inputNap = "";
  }

  created() {
    setInterval(() => {
      let wrongCharPos: number = -1;
      for (let i = 0; i < this.xek.length; i++) {
        if (this.xek[i].toLowerCase() != "x") {
          wrongCharPos = i;
          break;
        }
      }
      if (wrongCharPos != -1) {
        if (this.xek.length <= 10) {
          this.xek = this.xek.replace(this.xek[wrongCharPos], "X");
        } else {
          this.xek = this.xek.replace(this.xek[wrongCharPos], "");
        }
      } else {
        if (this.xek.length < 10) {
          this.xek += "X";
        } else if (this.xek.length > 10) {
          this.xek = this.xek.slice(0, -1);
        }
      }
    }, 3000);
  }

  private onClick(művelet: string): void {
    if (művelet === "+") {
      this.felkialtojelDarab++;
    } else if (művelet === "-") {
      this.felkialtojelDarab--;
    }
  }

  private joNapHozzadni(nap: string): boolean {
    const joNapok = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
    return joNapok.includes(nap) && !this.napok.includes(nap);
  }

  private hozzadNap(): void {
    this.napok.push(this.iNap);
    this.inputNap = "";
  }

  private joNapTorolni(nap: string): boolean {
    return this.napok.includes(nap);
  }

  private torolNap(): void {
    this.napok = this.napok.filter(i => i !== this.iNap);
    this.inputNap = "";
  }

  // computed
  private get iNap(): string {
    return this.inputNap.toLowerCase();
  }

  @Watch("felkialtojelDarab")
  private onNumChanged() {
    this.felkialtojelek = "!".repeat(this.felkialtojelDarab);
  }
}
</script>

<style scoped>
.plus {
  background-color: azure;
  width: 40vw;
}

ol {
  list-style-position: inside;
}

h1 {
  color: blue;
}
</style>

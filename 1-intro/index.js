import * as Vue from 'vue';
import Nums from './nums.js';
import Inp from './inp.js';

const app = Vue.createApp({
  components: { Nums, Inp, },
  template: `
    <inp/>
    <hr/>
    <nums/>
  `,
});

app.mount("#app");

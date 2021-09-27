export default {
  template: `
    <input v-model="value"/>
    <br/>
    <div class="red"> {{ error }} </div>
  `,
  data() {
    return {
      value: "",
    };
  },
  computed: {
    error() {
      if (this.value.length < 5)
        return "Please enter a longer string";
    },
  },
};
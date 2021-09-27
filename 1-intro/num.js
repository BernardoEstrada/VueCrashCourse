export default {
  props: ["number"],
  template: `
    <button
      v-bind:class="getClass(number)"
      v-on:click="click"
    >
      <div>
        {{ number }} - 
        <span v-if="isEven(number)">
          Even
        </span>
        <span v-else>
          Odd
        </span>
      </div>
    </button>
    <br/>
  `,
  methods: {
    isEven(num) {
      return num % 2 === 0;
    },
    getClass(num) {
      return this.isEven(num) ? "blue" : "red";
    },
    click() {
      this.$emit("chosen", this.number);
    },
  },
};

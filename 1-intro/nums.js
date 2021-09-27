import Num from './num.js'

export default {
  components: { Num },
  template: `
    <button v-on:click="increment">Increment</button>
    <div>{{ count }}</div>
    <num
      v-for="number in numbers"
      v-bind:number="number"
      v-on:chosen="addNumber"
    />
    <br />
    <span v-for="number in numberHistory">
      {{ number }} <br />
    </span>
  `,
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      numberHistory: [],
    };
  },
  computed: {
    count() {
      return this.numbers.length;
    },
  },
  methods: {
    increment() {
      this.numbers.push(this.numbers.slice(-1).pop() + 1);
    },
    addNumber(number) {
      this.numberHistory.push(number);
    },
  },
};

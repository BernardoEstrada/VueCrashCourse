<template>
  <div class="label">
    <label :for="name">{{ displayName }}</label>
    <div class="error">{{ error }}</div>
  </div>
  <input
    :id="name"
    :value="value"
    :type="type"
    @input="input"
  />

</template>

<script>
export default {
  emits: ['update'],
  props: {
    name: { type: String, required: true },
    value: { type: String, required: true },
    rules: { type: Object, default: {} },
    type: { type: String, default: 'text' },
    error: { type: String },
  },
  created() {
    this.$emit('update', {
      name: this.name.toLowerCase(),
      value: this.value,
      error: this.validate(this.value),
    })
  },
  methods: {
    input($event) {
      this.$emit('update', {
        name: this.name.toLowerCase(),
        value: $event.target.value,
        error: this.validate($event.target.value),
      })
    },
    validate(value) {
      if (this.rules.required && !value){
        return 'Required'
      }
      if (this.rules.min && value.length < this.rules.min){
        return `The minimum length is ${this.rules.min}`
      }
    },
  },
  computed: {
    displayName () {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1)
    },
  },
}
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  justify-content: space-between;
}
.error {
  color: red;
}
.input {
  width: 100%;
}
input {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid silver;
  margin: 2px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
}
</style>
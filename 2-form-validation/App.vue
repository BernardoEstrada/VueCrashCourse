<template>
  <br />
  <form @submit.prevent="submit">
    <my-input
      name="username"
      :rules="{ required: true, min: 5 }"
      :value="username.value"
      :error="username.error"
      @update="update"
    />
    <my-input
      name="password"
      :rules="{ required: true, min: 8 }"
      :value="password.value"
      :error="password.error"
      type="password"
      @update="update"
    />
    <my-button
      background="darkslateblue"
      color="white"
      :disabled="!valid"
      :value="username.value"
    />
  </form>
</template>

<script>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

export default {
  components: {
    MyButton,
    MyInput
  },
  data () {
    return {
      username: {
        value: 'ber0210',
        error: '',
      },
      password: {
        value: 'password',
        error: '',
      },
    }
  },
  computed: {
    valid () {
      return(
        !this.username.error &&
        !this.password.error
      )
    }
  },
  methods: {
    submit ($event) {
      console.log($event)
    },
    update ({ name, value, error }) {
      this[name].value = value
      this[name].error = error
    },
  },
}
</script>

<style scoped>
</style>
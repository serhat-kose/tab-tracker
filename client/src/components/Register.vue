<template>
<div>
    <h1>Register</h1>
    <input type="email"
     name="email"
     v-model="email"
      placeholder="please enter your email adress">
    <br>
    <br>
      <input type="password"
      name="password"
      v-model="password"
      placeholder="please enter your password">
    <br>
    <div class="error" v-html="error"/>
    <br>
      <button @click="register">Register</button>

    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: 'adasd',
      password: '123213',
      error: null
    }
  },
  methods: {
   async register () {
     try {
           const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })

     } catch (error) {

        this.error =error.response.data.error

     }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.error{
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

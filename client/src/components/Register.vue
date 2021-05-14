<template>
<b-card class="card" bg-variant="white" text-variant="dark" title="Sign Up" >
<b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
      class="form-group"
        id="input-group-1"
        label-for="input-1"
        label="Your Email:"
       
      >
        <b-form-input 
          class="input"
          id="input-1"
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input 

          class="input"
          id="input-2"
          v-model="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>
           <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
</b-form>
</b-card>


</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null,
      succes:null,
      show: true
    }
    
  },
  methods: {
   async onSubmit (event) {
     try {
           const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,

      })
              event.preventDefault()
        alert(JSON.stringify(response.data))

     } catch (error) {

        this.error =error.response.data.error

     }
    },
          onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.email = ''
        this.password = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }


  }
}
</script>
<style scoped>

.card{
  width: 50%;
  margin-left: 26%;
  position: relative;
  justify-content: center;
 
}

</style>
<template>

    <b-container class="b-container" fluid>
    <b-card class="card"  header="SIGN UP"
                        header-text-variant="white"
                        header-tag="header"
                        header-bg-variant="info"
                         style="max-width: 35rem "
                         >
        
<b-form @submit="onSubmit" @reset="onReset" v-if="show">
      

         <b-input-group size="lg">
      <b-input-group-prepend is-text>
        <b-icon icon="tag-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text"  v-model="name"  required placeholder="User Name"></b-form-input>
    </b-input-group>

    <br>

          <b-input-group size="lg">
      <b-input-group-prepend is-text>
        <b-icon icon="envelope"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="email"  v-model="email"  required placeholder="Email"></b-form-input>
    </b-input-group>

    <br>
        <b-input-group size="lg">
      <b-input-group-prepend is-text>
        <b-icon icon="person-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="password" v-model="password"  required placeholder=" Password"></b-form-input>
    </b-input-group>

    <br>
      
           <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>

      
</b-form>
</b-card>
        <b-form-text >
          {{this.error}}
        </b-form-text>
</b-container>



</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      name:'',
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
        name:this.name

      })
              
        alert(JSON.stringify(response.data))

     } catch (error) {

        this.error =error.response.data.error

     }
    },
          onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.email = ''
        this.name=''
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
  width: 30%;
  margin-left: 30%;
  position: relative;
  justify-content: center;
  background-color:white;
 
}
.b-container{
   margin-top: 50px;
}

</style>
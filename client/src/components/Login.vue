<template>

    <b-container class="b-container" fluid>
    <b-card class="card"  header="LOGIN"
                        header-text-variant="white"
                        header-tag="header"
                        header-bg-variant="info"
                         style="max-width: 35rem "
                         >
        
<b-form @submit="login" @reset="onReset" v-if="show">
      

         <b-input-group size="lg">
      <b-input-group-prepend is-text>
        <b-icon icon="tag-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text"  v-model="email"  required placeholder="user name / email"></b-form-input>
    </b-input-group>


    <br>
        <b-input-group size="lg">
      <b-input-group-prepend is-text>
        <b-icon icon="person-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="password" v-model="password"  required placeholder=" Password"></b-form-input>
    </b-input-group>

    <br>
      
           <b-button  type="submit" variant="primary">Submit</b-button>
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Login',
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
    ...mapActions(["login"]),
   async login (event) {
     try {
           const response = await AuthenticationService.login({
         email:this.email,
        password: this.password
       

      })

           
        alert(JSON.stringify(response.data))

     } catch (error) {

  

     }
    },
          onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.email=''
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
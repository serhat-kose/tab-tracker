<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">
      <span class="home" @click="navigateTo({name:'root'})">  
      TabTracker
      </span >
      </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

               <b-nav-item >
                     
                    <b-button variant="secondary" @click="navigateTo({name:'root'})"> HOME</b-button>
            
			
        </b-nav-item>


        <b-nav-item right>
                     
                    <b-button variant="secondary" @click="navigateTo({name:'login'})">
                      
                       LOGIN</b-button>
            
			
        </b-nav-item>

        <b-nav-item right>
          
                    <b-button variant="secondary" @click="navigateTo({name:'register'})" > 
                      SIGN UP</b-button>
            
           
           
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>

export default {
name: 'Header',
methods: {
  navigateTo(route){
    this.$router.push(route)
  }
}
}
</script>
<style scoped>

.home{
  cursor: pointer;
}

.home:hover{
  color: rgb(238, 223, 238);
}


</style>
<template>
  <!--  -->
  <div class="">
    <SideBar  v-if="user"  class="w-full">
          <NuxtPage />
    </SideBar>
  
    <div class="bg-foreground" v-else>
       <Login />
      <!-- <Error />  -->
    </div> 
    <!-- <Login /> -->
    
  </div>
</template>
<script setup>
import Login from './components/login.vue';

const user = useSupabaseUser()

</script>


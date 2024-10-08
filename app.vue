<template>
  <div class="">
    <SideBar v-if="user" class="w-full">
          <NuxtPage />
    </SideBar>
    <div class="bg-foreground" v-else>
      <!-- <Login /> -->
      <Error />
    </div>
    <!-- <Login /> -->
    
  </div>
</template>
<script setup>
import Error from './components/error.vue';
import Login from './components/login.vue';

const user = useSupabaseUser()

// const links = [{
//   id: 'home',
//   label: 'Home',
//   icon: 'i-heroicons-home',
//   to: '/',
//   tooltip: {
//     text: 'Home',
//     shortcuts: ['G', 'H']
//   }
// }, {
//   id: 'inbox',
//   label: 'Inbox',
//   icon: 'i-heroicons-inbox',
//   to: '/inbox',
//   badge: '4',
//   tooltip: {
//     text: 'Inbox',
//     shortcuts: ['G', 'I']
//   }
// }, {
//   id: 'users',
//   label: 'Users',
//   icon: 'i-heroicons-user-group',
//   to: '/users',
//   tooltip: {
//     text: 'Users',
//     shortcuts: ['G', 'U']
//   }
// }, {
//   id: 'settings',
//   label: 'Settings',
//   to: '/settings',
//   icon: 'i-heroicons-cog-8-tooth',
//   children: [{
//     label: 'General',
//     to: '/settings',
//     exact: true
//   }, {
//     label: 'Members',
//     to: '/settings/members'
//   }, {
//     label: 'Notifications',
//     to: '/settings/notifications'
//   }],
//   tooltip: {
//     text: 'Settings',
//     shortcuts: ['G', 'S']
//   }
// }]
</script>


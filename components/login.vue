<script setup>
import { ref } from 'vue';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Input from './ui/input/Input.vue';
import { Github } from 'lucide-vue-next';
const user = useSupabaseUser()
const client = useSupabaseClient()
const loginRedirectTo = `${useRuntimeConfig().public.baseUrl}/confirmLog`
const registerRedirectTo = `${useRuntimeConfig().public.baseUrl}/confirmSign`
watchEffect(() => {
  if (user.value) {
    navigateTo('/confirm')
  }
})
let log = ref(true)
const password = ref('');

const email = ref('')

async function signUpNewUser() {
  const { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      emailRedirectTo: 'https://example.com/welcome',
    },
  })
}

</script>

<template>
  
  
  <div class=" min-h-screen flex items-center justify-center bg-foreground">
    <!-- <p>
      {{ log ? `Logged in as ${loggedInUser.name}` : 'Not logged in' }}
    </p> -->
    <Card class="m-auto max-w-lg bg-muted" v-if="log">
      <CardHeader>
        <CardTitle class="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              v-model="email"
              required
            />
          </div> 
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a href="#" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" placeholder="Enter your password" v-model="password" required />
          </div> 
           <button type="submit" class="w-full p-2 rounded-lg text-white font-medium  bg-green-500" @click="signInWithOtp()">
            Login
          </button>

          <button type="submit"  class="w-full p-2 rounded-lg text-white font-medium  bg-[rgb(18,41,49)]" @click="client.auth.signInWithOAuth({ provider: 'github', options: { registerRedirectTo } })"  
          >
              Login  with github
          </Button>
          
        </div>
        
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <button @click="log = !log" class="underline">
            Sign up
          </button>
        </div>
      </CardContent>
    </Card>



    <Card class="m-auto max-w-lg bg-muted" v-if="!log">
      <CardHeader>
        <CardTitle class="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your email and password below to sign up to chefs-club
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              v-model="email"
              required
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a href="#" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" placeholder="Enter your password" v-model="password" required />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Confirm Password</Label>
              
            </div>
            <Input id="password" type="password" placeholder="Confirm password" v-model="password" required />
          </div>
          <button type="submit" class="w-full p-2 rounded-lg text-white font-medium  bg-green-500" @click="login">
            Create an account
          </button>
          <button type="" @click="client.auth.signInWithOAuth({ provider: 'github', options: { registerRedirectTo} })"  class="w-full p-2 rounded-lg text-white font-medium  bg-[rgb(18,41,49)]">
            
              sign up with github
          </button>
        </div>
        <div class="mt-4 text-center text-sm">
          already have an account?
          <button @click="log = !log" class="underline">
            Login
          </button>
        </div>
      </CardContent>
    </Card>



  </div>
</template>
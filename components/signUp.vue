<script setup>
import { ref } from 'vue';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Input from './ui/input/Input.vue';

let log = ref(true)
let sign = ref(false)
// const router = useRouter();
// const loggedInUser = ref(null);
// const email = ref('');
// const password = ref('');

// const router = useRouter();
// const email = ref('');
// const password = ref('');
// const confirmPassword = ref("");
// const firstname = ref('');
// const lastname = ref('');
// const address = ref('');
// const city = ref('');
// const state = ref('');
// const postalcode = ref('');
// const dateofbirth = ref('');
// const ssn = ref('');

// const register = async () => {
//   if (password.value.length >= 8) {
//     if (password.value === confirmPassword.value) {
//       try {
//         await account.create(
//           ID.unique(),
//           email.value,
//           password.value,
//           firstname.value,
//           lastname.value,
//           address.value,
//           city.value,
//           dateofbirth.value,
//           state.value,
//           postalcode.value,
//           ssn.value
//         );
//         const result = await account.get();
//         console.log(result);
//         router.push("/home");
//       } catch (e) {
//         console.log(e);
//         alert('Failed to create account. Please ensure all fields are valid and try again.');
//       }
//     } else {
//       alert("Passwords do not match");
//     }
//   } else {
//     alert("Password length should be at least 8 characters");
//   }
// };
</script>

<template>
  
  
  <div class=" min-h-screen flex items-center justify-center bg-foreground">
    <!-- <p>
      {{ log ? `Logged in as ${loggedInUser.name}` : 'Not logged in' }}
    </p> -->
    <Card class="m-auto max-w-lg bg-muted">
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
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Confirm Password</Label>
              
            </div>
            <Input id="password" type="password" placeholder="Confirm your password" v-model="password" required />
          </div>
          <Button type="submit" class="w-full bg-green-500" @click="login">
            Create an account
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          already have an account?
          <NuxtLink to="/signup" class="underline">
            Login
          </NuxtLink>
        </div>
      </CardContent>
    </Card>



  </div>
</template>
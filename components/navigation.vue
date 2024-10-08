<!-- <script setup>
import { ref, onMounted, computed } from 'vue';
// import {Home, Menu, Search, Star,  DollarSign, HistoryIcon, PanelsTopLeft, User, SmilePlus, Heart, LogOut, Settings, BadgeHelp, Bell, ChefHat, CookingPot } from 'lucide-vue-next';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import createProfile from './User/createProfile/createProfile.vue';
// import Dialog from './ui/dialog/Dialog.vue';
// import DialogTrigger from './ui/dialog/DialogTrigger.vue';

// const client = useSupabaseClient()
// const user = useSupabaseUser()
// const logout = async () => {
//   await client.auth.signOut()
//   navigateTo('/')
// }

// const userName = user.value.user_metadata.user_name
// const userAvatar = user.value.user_metadata.avatar_url
// const name = user.value.user_metadata.name
// const user = useSupabaseUser()
// console.log( user.value)
// console.log(user.value.user_metadata.name)
// avatar-URL, user_name
// const user = useSupabaseUser()
// console.log(user.value)

</script> -->

<!-- <template>
  <div class="grid min-h-screen w-full ">

    <div class="flex flex-col text-black">
      <header class="flex flex-col justify-between h-[12%]  gap-1 border-b bg-muted/40 px-4  lg:px-4">
        <section class="flex justify-between pt-2 gap-4 ">
          <div class="flex items-center gap-3">
            <Sheet>

              <SheetTrigger as-child>
                <Button
                  variant="outline"
                  size="icon"
                  class="shrink-0"
                >
                  <Menu class="h-5 w-5" />
                  <span class="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left" class="flex flex-col px-[6%]">

                <nav class="grid gap-2 text-lg font-medium text-black">
                  <NuxtLink
                  to="/history"
                  class="flex items-center gap-3 rounded-lg  px-3 py-3 text-muted-foreground transition-all hover:text-primary"
                >
                  <Home class="h-5 w-5" />
                  My Events
                </NuxtLink>
                <a
                  href="#"
                  class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
                >
                <svg class="h-4 w-4"  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0697 1.76746C12.4807 1.21947 11.4605 0.454311 11.0495 1.0023C10.6385 1.55028 11.6588 2.31544 12.0697 1.76746ZM8.39263 1.07811C7.15585 0.950602 5.7823 1.16348 4.58433 1.70937C3.38552 2.25563 2.32735 3.15309 1.78844 4.41832C1.37574 5.38724 1.01715 6.28113 1.00088 7.44354C0.984724 8.59844 1.30522 9.96898 2.13174 11.928C2.61142 13.0649 4.03963 13.5446 5.13895 13.8079C6.40836 14.1119 7.80857 14.1914 8.6644 14.0742C9.36515 13.9782 10.1448 13.8284 10.7987 13.297C11.8977 12.4039 12.9009 11.3955 13.4994 10.3393C14.104 9.27221 14.3256 8.09207 13.7216 6.95324C13.5628 6.65373 13.316 6.57734 13.0412 6.4923C12.9374 6.46016 12.8295 6.42678 12.7209 6.37966C11.6211 5.90234 10.9646 5.34963 10.9135 5.02876C10.8656 4.72808 10.9221 4.51463 10.9811 4.29181C11.0129 4.17199 11.0453 4.04947 11.0626 3.90922C11.0838 3.73737 11.0814 3.33319 10.6996 3.12761C10.4048 2.96888 10.2164 2.65843 10.0407 2.36904C9.99742 2.29775 9.95492 2.22773 9.9118 2.16158C9.62634 1.72367 9.20769 1.16213 8.39263 1.07811ZM4.99899 2.61935C3.96483 3.09058 3.12554 3.83097 2.70846 4.81018C2.29808 5.77368 2.01406 6.50873 2.00079 7.45753C1.98741 8.41385 2.25043 9.6368 3.0531 11.5393C3.39181 12.3421 4.62167 12.6557 5.37186 12.8354C6.5493 13.1174 7.822 13.1802 8.52868 13.0834C9.21271 12.9897 9.74568 12.8642 10.1681 12.5209C11.229 11.6587 12.121 10.7435 12.6293 9.84635C12.9349 9.30709 13.5141 7.7028 12.6292 7.3873C10.7539 6.71875 10.262 6.06669 9.99011 5.41268C9.80915 4.97744 9.82868 4.52282 9.95741 4.07885L9.95741 4.07884C9.97662 4.0126 9.99538 3.94791 10.0334 3.88882C9.81857 3.73676 9.6515 3.55195 9.51464 3.3715C9.42876 3.25828 9.3469 3.12099 9.26197 2.97856C9.01866 2.57052 8.75018 2.12027 8.29008 2.07283C7.22889 1.96343 6.03398 2.14772 4.99899 2.61935ZM13.2081 3.77471C13.441 3.22671 12.4547 2.63606 12.0822 3.10163C11.5817 3.72732 12.9029 4.49281 13.2081 3.77471ZM14.3672 2.26031C14.9668 2.27493 15.1551 1.11603 14.5718 0.949371C13.8076 0.731026 13.5918 2.24139 14.3672 2.26031ZM14.2857 5.09098C14.8644 5.10004 15.0462 4.38222 14.4832 4.27899C13.7455 4.14375 13.5373 5.07927 14.2857 5.09098ZM6.9075 4.28672C6.46898 4.66754 6.0522 4.15185 5.97983 3.7365C5.86848 3.09744 6.33696 2.56856 6.94823 2.91156C7.43344 3.18382 7.26678 3.97471 6.9075 4.28672ZM4.94455 5.88184C5.40885 5.41754 4.59567 4.57013 4.11425 5.05154C3.83338 5.33242 4.00936 5.65376 4.23744 5.88184C4.43271 6.0771 4.74929 6.0771 4.94455 5.88184ZM6.97716 6.71984C7.31181 7.38914 8.48804 6.79159 7.99413 6.14788C7.86519 5.97983 7.68657 5.9494 7.62145 5.94207C7.21217 5.89601 6.76349 6.2925 6.97716 6.71984ZM6.98798 8.72461C7.14066 9.1188 7.51122 9.3187 7.91915 9.1633C8.27434 9.02799 8.33186 8.39689 8.17175 8.07427C8.02331 7.77514 7.63956 7.67793 7.33747 7.79417C6.98512 7.92976 6.85672 8.38708 6.98576 8.71889L6.98798 8.72461ZM10.3885 8.84081C10.7575 8.6566 11.4617 8.82771 11.4617 9.31199C11.4617 9.71286 10.9587 10.2165 10.5634 10.2826C10.1813 10.3465 9.70515 9.97581 9.76648 9.57718C9.81445 9.26539 10.1217 8.97401 10.3885 8.84081ZM7.56704 10.8432C7.33461 10.7502 7.14353 10.8601 7.11437 10.8769L7.11279 10.8778C6.90782 10.9949 6.71383 11.2439 6.6747 11.4842C6.59018 12.0034 7.13199 12.1239 7.52661 12.0987C8.2074 12.0553 8.06547 11.0426 7.56704 10.8432ZM4.8805 10.8932C5.0674 10.7723 5.15658 10.5363 5.08293 10.3153C4.93046 9.79687 4.3246 9.71252 3.96561 10.1297C3.79336 10.3299 3.80749 10.6274 3.99214 10.8105L3.99495 10.814L3.9979 10.8176C4.22025 11.0942 4.63624 11.1857 4.8805 10.8932ZM3.04695 7.81318C3.33147 8.0977 3.60077 8.15067 3.98443 8.05859C4.60826 7.90887 4.13814 6.24299 3.047 6.87296C2.70939 7.06788 2.86716 7.63339 3.04695 7.81318Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  
                Recipes
                </a>
                  <a
                    href="#"
                    class="flex items-center gap-3 rounded-lg  px-3 py-3 text-muted-foreground transition-all hover:text-primary"
                  >
                  <DollarSign class="h-5 w-5" />
                    Messages
                  </a>
                  <a
                  href="#"
                  class="flex items-center gap-3 rounded-lg  px-3 py-3 text-muted-foreground transition-all hover:text-primary"
                  >
                    <HistoryIcon class="h-4 w-4" />
                    Favorites
                  </a>
                  <FindLocalChef />
                  <PresetShare />

                </nav>

                <div class="mt-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>GAMBLING PROBLEM?</CardTitle>
                      <CardDescription>
                        Call or text: 1-800-GAMBLER
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="sm" class="w-full">
                        Upgrade
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </SheetContent>
            </Sheet>
            <NuxtLink to="/home" class="flex items-center gap-1">
              <ChefHat class="h-8 w-8 xl:h-10 xl:w-10  bg-black p-1 rounded-full text-white" />
              <div class="text-gray-800 font-bold text-sm">{{ userName }}</div>
            </NuxtLink>
          </div>
            
            <div class="flex items-center gap-3">
              <Dialog>
                <DialogTrigger as-child>
                  <button variant="outline" class="bg-white p-2 border rounded-md">
                    <Search class="text-muted-foreground text-sm w-4 h-4" />
                  </button>
                 
                </DialogTrigger>
                <DialogContent class=" max-w-[90%] md:max-w-[60%]">
                  <DialogHeader>
                    <DialogTitle>Search</DialogTitle>
                    <DialogDescription>
                      search here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div class=" w-full  ">
                    <form class="w-full">
                      <div class="relative">
                        <Search class="absolute left-2.5 top-3 h-4 w-5  text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search products..."
                          class="appearance-none bg-background  pl-8 shadow-none w-full"
                        />
                      </div>
                    </form>
                  </div>
                  <DialogFooter>
                    <Button type="submit">
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger as-child>
                  <button variant="outline" class="bg-white p-2 border rounded-md">
                    <Bell class="text-muted-foreground text-sm w-4 h-4" />
                  </button>
                </DialogTrigger>
              </Dialog>

              

            <Sheet>
              <SheetTrigger as-child>
                <Button variant="none"  class="bg-clear hover:bg-clear flex gap-1 p-0">
                  <img :src="userAvatar" alt="" srcset="" class="h-8 w-8 md:h-10 md:w-10 rounded-full border border-green-200">
                </Button>
              </SheetTrigger>
              <SheetContent class="w-[320px] md:w-[38%] flex flex-col gap-4">
                <SheetHeader>
                  <SheetTitle class="flex gap-1 items-center">
                    
                    <img :src="userAvatar" alt="" srcset="" class="h-8 w-8 md:h-10 md:w-10 rounded-full border border-green-200">
                    <div class="flex flex-col text-gray-600 text-left">
                      <div class="text-gray-800 text-sm">{{ userName }}</div>
                      <div class="text-sm text-gray-500">{{ name }}</div>
                    </div>
                    
                  </SheetTitle>
                  <SheetDescription class="flex flex-col gap-2 pt-2">
                    <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg text-gray-700">
                      <SmilePlus class="w-4 h-4" />
                      Set status</button>
                    <div class="border"></div>
                  </SheetDescription>
                </SheetHeader>
                <div class="text-gray-700 text-[14px] flex flex-col gap-2">

                  <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg">
                    <User class="w-4 h-4" />
                    Your profile
                  </button>

                  <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg">
                    <CookingPot class="h-4 w-4 "  />
                    Your recipes
                  </button>

                  <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg">
                    <Star class="w-4 h-4" />
                    Your stars
                  </button>

                  <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg">
                    <Heart class="w-4 h-4" />
                    Your sponsors
                  </button>

                  <div class="border">

                  </div>
                  <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg">
                    <BadgeHelp class="w-4 h-4" />
                    Help
                  </button>
                  <button class="flex gap-2 items-center w-full bg-transparent text-left duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg">
                    <Settings class="w-4 h-4" />
                    Settings
                  </button>

                </div>
                <SheetFooter class="">
                  <div class="flex flex-col gap-2 pt-2 w-full text-right">
                    <div class="border"></div>
                    <Button class="flex gap-2 items-center w-full bg-transparent duration-150 hover:bg-gray-100 py-2 px-1 rounded-lg text-gray-700 text-[14px]" @click="logout">
                      <LogOut class="w-4 h-4" />
                      SignOut
                    </Button>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            </div>
        </section>
        


       
        <div default-value="overview" class="w-full flex items-end" orientation="vertical">
          
          <div class="w-full flex h-[70%] gap-2">

            <section value="overview" class="bg-transparent border-b flex items-center gap-1 p-3  text-primary">
               
                <div class="duration-150 hover:bg-gray-200 py-1 px-3 flex items-center gap-1 rounded-xl  transition-all text-primary">
                  <PanelsTopLeft class="h-5 w-5 text-gray-700"  />
                  Overview
                </div>
                  
                
            </section>
            

            <section value="recipes" class="bg-transparent border-b flex items-center gap-1 p-3  text-primary">
              <div class="duration-150 hover:bg-gray-200 py-1 px-3 flex items-center gap-1 rounded-xl  transition-all text-primary">
                
                <CookingPot class="h-5 w-5 text-gray-700"  />
                
                Recipes
              </div>
                
              
            </section>

            <section value="stars" class="bg-transparent border-b flex items-center gap-1 p-3   text-primary">
              <div class="duration-150 hover:bg-gray-200 py-1 px-3 flex items-center gap-1 rounded-xl  transition-all text-primary">
                
                <Star class="w-4 h-4 text-gray-700" />
                  
                  Stars
              </div>
                
              
            </section>

          </div>
        
        </div>
      </header>
      <div class="w-full">
        <slot />
      </div>
      
    </div>
  </div>

</template> -->

<template>
  <div>
    hey
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
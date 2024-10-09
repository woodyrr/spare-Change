<script setup lang="ts">
  import { BadgeHelp, Bell, CirclePlus, CircleUser, Coins, CookingPot, CreditCard, DollarSign, Heart, HistoryIcon, Home, LineChart, LogOut, Menu, Package, Package2, PersonStanding,  Settings,  ShoppingCart, SmilePlus, Star, User, Users } from 'lucide-vue-next'

  import { Badge } from '@/components/ui/badge'
  import { Button } from './ui/button'
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
  import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
//   import PresetShare from '@/components/PresetShare.vue'
  import { Input } from '@/components/ui/input'
  import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const client = useSupabaseClient()
const user = useSupabaseUser()

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/')
    // console.log("logout")
}

  // import History from '~/pages/history.vue'
const userName = user.value?.user_metadata.user_name
const userAvatar = user.value?.user_metadata.avatar_url
const name = user.value?.user_metadata.name

</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] no-scrollbar max-xl:max-h-screen max-xl:overflow-y-scroll">

    <div class="hidden border-r bg-muted/40 md:block">

      <div class="flex h-full max-h-screen flex-col gap-2">

        <div class="flex h-14 items-center border-b  px-4 lg:h-[60px] lg:px-6">
          <a href="/" class="flex items-center gap-2 font-semibold text-black">
            <Coins class="h-6 w-6" />
            <span class="">SpareChange</span>
          </a>
          <Button variant="outline" size="icon" class="ml-auto h-8 w-8 text-black">
            <Bell class="h-4 w-4" />
            <span class="sr-only">Toggle notifications</span>
          </Button>
        </div>

        <div class="flex-1">

          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">

            <a
                href="#"
              class="flex items-center gap-3 bg-muted rounded-lg px-3 py-3 text-primary  transition-all hover:text-primary"
            >
              <Home class="h-4 w-4" />
              Home
            </a>
            <a
              href="#"
              class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
            >
              <DollarSign class="h-4 w-4" />
              My Bank
              
            </a>
            <a
              href="#"
              class="flex items-center gap-3 rounded-lg  px-3 py-3 text-muted-foreground transition-all hover:text-primary"
            >
              <HistoryIcon class="h-4 w-4" />
              Transaction History
            </a>
            <a
              href="#"
              class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
            >
              <CreditCard class="h-4 w-4" />
             Connect Bank
            </a>
            <a
              href="#"
              class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart class="h-4 w-4" />
              Gamble
            </a>
          </nav>
        </div>

        <div class="mt-auto p-4">
      
          <Card class="border-black">
            <CardHeader>
              <CardTitle class="text-base lg:text-lg">GAMBLING PROBLEM?</CardTitle>
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
      </div>
    </div>
    <div class="flex flex-col text-black">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-14">
        <Sheet>

          <SheetTrigger as-child>
            <Button
              variant="outline"
              size="icon"
              class="shrink-0 md:hidden"
            >
              <Menu class="h-5 w-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" class="flex flex-col px-[6%]">

            <nav class="grid gap-2 text-lg font-medium text-black">
              <a
                href="#"
              class="flex items-center gap-3 rounded-lg  px-3 py-3 text-muted-foreground transition-all hover:text-primary"
            >
              <Home class="h-5 w-5" />
              Home
            </a>
              <a
                href="#"
                class="flex items-center gap-3 rounded-lg  px-3 py-3 text-muted-foreground transition-all hover:text-primary"
              >
              <DollarSign class="h-5 w-5" />
                My Bank
              </a>
              <a
              href="#"
              class="flex items-center gap-3 rounded-lg  px-3 py-3 text-muted-foreground transition-all hover:text-primary"
              >
                <HistoryIcon class="h-4 w-4" />
                Transaction History
              </a>
              <a
                href="#"
                class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
              >
                <CreditCard class="h-4 w-4" />
              Connect Bank
              </a>
              <a
                href="#"
                class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart class="h-4 w-4" />
                Gamble
              </a>
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

        <div class="w-full flex-1">
            <div class="relative">
              <div class="flex gap-1 items-center">
                <!-- <PresetShare /> -->
              </div>
            </div>
        </div>

        <Sheet class="">
            <SheetTrigger as-child>
                <Button variant="default"  class="bg-clear hover:bg-clear flex gap-1 p-0">
                <img v-if="userAvatar" :src="userAvatar" alt="" srcset="" class="h-10 w-10 md:h-10 md:w-10 rounded-full border border-green-200 ">
                <CircleUser v-else class="h-10 w-10 md:h-10 md:w-10 rounded-full border border-green-200 " />
                </Button>
            </SheetTrigger>
            <SheetContent class="w-[320px] md:w-[38%] flex flex-col gap-4 rounded-l-xl">
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

                
                
                <div class="border"></div>
                
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
      </header>

      <span>
        <slot />
      </span>
      
    </div>
  </div>

</template>
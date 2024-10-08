<script setup lang="ts">
const user = useSupabaseUser()
// const supabase = useSupabaseUser
// supabase.auth.getUser()
import { Skeleton } from '@/components/ui/skeleton'
watch(user, () => {
  if (user.value) {
    return navigateTo('/')
  }
}, { immediate: true })
</script>

<template>
    <div class="w-full flex flex-col gap-8">
        <Skeleton class="h-10 w-[90%]" />
        <div class="flex justify-around">
            <Skeleton class="h-[90%] w-[25%]" />
            <div class="flex flex-col gap-5">
                <div class="flex items-center space-x-4">
                    <Skeleton class="h-12 w-12 rounded-full" />
                    <div class="space-y-2">
                    <Skeleton class="h-4 w-[250px]" />
                    <Skeleton class="h-4 w-[200px]" />
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <Skeleton class="h-12 w-12 rounded-full" />
                    <div class="space-y-2">
                    <Skeleton class="h-4 w-[250px]" />
                    <Skeleton class="h-4 w-[200px]" />
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <Skeleton class="h-12 w-12 rounded-full" />
                    <div class="space-y-2">
                    <Skeleton class="h-4 w-[250px]" />
                    <Skeleton class="h-4 w-[200px]" />
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  <div class="flex items-center space-x-4">
    <Skeleton class="h-12 w-12 rounded-full" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-[250px]" />
      <Skeleton class="h-4 w-[200px]" />
    </div>
  </div>
</template>
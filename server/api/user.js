
import { createError } from 'h3'

import { serverSupabaseUser, serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  
  const user = await serverSupabaseUser(event)
  const client = await serverSupabaseClient(event)
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'User not authenticated',
    })
  }
    return user
})
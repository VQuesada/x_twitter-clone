'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies, headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { TABLES_NAMES } from '@/consts/ddbb/tablesNames'

export const addPost = async (formData: FormData) => {
  const content = formData.get('content')

  if (content == null || content === '') return

  const supabase = createServerActionClient({ cookies })

  // * Verify the user is logged in
  const { data: { user } } = await supabase.auth.getUser()
  if (user == null) return

  await supabase.from(TABLES_NAMES.POSTS).insert({ content, user_id: user.id })

  const fullUrl = headers().get('referer') ?? '/'
  revalidatePath(fullUrl)
}

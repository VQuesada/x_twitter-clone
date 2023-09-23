import { type FC } from 'react'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies, headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { Avatar } from '@nextui-org/react'
import { TABLES_NAMES } from '@/consts/ddbb/tablesNames'

interface ComposePostProps {
  userAvatarUrl: string
}

export const ComposePost: FC<ComposePostProps> = ({ userAvatarUrl }) => {
  const addPost = async (formData: FormData) => {
    'use server'

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

  return (
    <form action={addPost} className='flex flex-1 flex-row gap-x-4 p-3 border-b border-white/20'>
      <img className='rounded-full w-10 h-10 object-contain' src={userAvatarUrl} />
      <div className='flex flex-1 flex-col gap-y-4'>
        <textarea
          name='content'
          rows={4}
          className='w-full text-2xl bg-black placeholder-gray-500 focus:outline-none p-1'
          placeholder="What's happening?!"
        />
        <button type='submit' className='bg-sky-500 font-bold rounded-full px-5 py-2 self-end'>
          Post
        </button>
      </div>
    </form>
  )
}

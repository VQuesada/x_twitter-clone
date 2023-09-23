import { AuthButtonServer } from '@/components/buttons/auth-button-server'
import { TABLES_NAMES } from '@/consts/ddbb/tablesNames'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { PostsList } from './components/posts-list'
import { type Database } from '@/types/datasbase'

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  const { data: posts } = await supabase
    .from(TABLES_NAMES.POSTS)
    .select('*, user:users(name, user_name, avatar_url)')

  if (session == null) {
    redirect('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='w-[600px] mx-auto border-r border-l border-white/20 min-h-screen'>
        <AuthButtonServer />
        <PostsList posts={posts} />
      </section>
    </main>
  )
}

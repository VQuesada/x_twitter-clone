import { AuthButtonServer } from '@/components/buttons/auth-button-server'
import { TABLES_NAMES } from '@/consts/ddbb/tablesNames'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  const { data: posts } = await supabase
    .from(TABLES_NAMES.POSTS)
    .select('*')

  if (session == null) {
    redirect('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
      <h1>X</h1>
      <pre>
        {JSON.stringify(posts, null, 2)}
      </pre>
    </main>
  )
}

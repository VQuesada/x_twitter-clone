'use client'

import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { GithubButton } from '@/components/buttons/github-button'
import { DefaultButton } from '@/components/buttons/default-button'
import { type FC } from 'react'
import { useRouter } from 'next/navigation'

interface AuthButtonProps {
  session: Session | null
}

export const AuthButton: FC<AuthButtonProps> = ({ session }) => {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: 'fit-content' }}>
      {
        session == null
          ? (
          <GithubButton onClick={handleSignIn}>
            Sign in with Github
          </GithubButton>
            )
          : (
          <DefaultButton onClick={handleSignOut}>
            Sign out
          </DefaultButton>
            )
      }
    </header>
  )
}

'use client'

import { useRef, type FC } from 'react'
import { ComposePostButton } from './compose-post-button'
import { addPost } from '@/actions/add-post-action'

interface ComposePostProps {
  userAvatarUrl: string
}

export const ComposePost: FC<ComposePostProps> = ({ userAvatarUrl }) => {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form
      action={async (formData) => {
        await addPost(formData)
        formRef.current?.reset()
      }}
      ref={formRef}
      className='flex flex-1 flex-row gap-x-4 p-3 border-b border-white/20'
    >
      <img className='rounded-full w-10 h-10 object-contain' src={userAvatarUrl} />
      <div className='flex flex-1 flex-col gap-y-4'>
        <textarea
          name='content'
          rows={4}
          className='w-full text-2xl bg-black placeholder-gray-500 focus:outline-none p-1'
          placeholder="What's happening?!"
        />
        <ComposePostButton />
      </div>
    </form>
  )
}

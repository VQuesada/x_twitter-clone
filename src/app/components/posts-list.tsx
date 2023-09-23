import { PostCard } from '@/components/cards/post-card'
import { type Post } from '@/types/types'
import { type FC } from 'react'

interface PostsListProps {
  posts: Post[] | null
}

export const PostsList: FC<PostsListProps> = ({ posts }) => {
  return (
    <>
      {
        posts?.map(post => {
          const { id, content } = post
          const { name, user_name: userName, avatar_url: avatarUrl } = post.user

          return (
            <PostCard key={id} name={name} userName={userName} avatarUrl={avatarUrl} content={content} />
          )
        })
      }
    </>
  )
}

'use client'

import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@nextui-org/react'
import Link from 'next/link'
import { type FC } from 'react'
import { IconMessageCircle, IconHeart, IconRepeat } from '@tabler/icons-react'

interface PostCardProps {
  name: string
  userName: string
  content: string
  avatarUrl: string
}

export const PostCard: FC<PostCardProps> = ({ name, userName, content, avatarUrl }) => {
  return (
    <Card className="bg-transparent border-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-x-3 items-center justify-center">
          <Link href={`/${userName}`}>
            <Avatar isBordered radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-row gap-2 items-start justify-center items-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='w-4 h-4' />
        </button>
        <button>
          <IconHeart className='w-4 h-4' />
        </button>
        <button>
          <IconRepeat className='w-4 h-4' />
        </button>
      </CardFooter>
    </Card>
  )
}

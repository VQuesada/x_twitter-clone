import { type Database } from '@/types/datasbase'

type User = Database.public.Tables.users.Row

type Post = Database.public.Tables.posts.Row & { user: User }

import { type Database } from '@/types/datasbase'

type Post = Database.public.Tables.posts.Row & { user: Database.public.Tables.users.Row }

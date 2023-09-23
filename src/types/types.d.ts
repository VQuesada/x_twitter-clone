export interface User {
  id: string
  name: string
  user_name: string
  avatar_url: string
}

export interface Post {
  id: string
  created_at: string
  content: string
  user: User
}

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

### Generate supabase types:
1- Log in to supabase
```bash
npx supabase login
```

Go to the url prompted in the terminal and create a new token. This token grants access to ALL your databases, so be careful with it.

Paste the token in the terminal


2- Generate the types
```bash
npx supabase gen types typescript --project-id <project-id>
```

To get the project id:
Access your supabase project, go to Project Settings (bottom icon in the left menu), and copy the Referenc ID

The types will be written on the terminal. Copy and paste them on a file of your choice
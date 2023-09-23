import { AuthButtonServer } from '@/app/components/buttons/auth-button-server'

export default function Login() {
  return (
    <section className='grid place-content-center min-h-screen'>
      <h2 className='text-xl font-bold mb-4'>Log in to X</h2>
      <AuthButtonServer />
    </section>
  )
}

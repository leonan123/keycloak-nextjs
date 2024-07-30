import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { ButtonLogin } from '@/components/button-login'
import { getServerSession } from 'next-auth'
import { getProviders } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default async function SignIn() {
  const providers = await getProviders()
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  return (
    <div>
      <h1>Hello World</h1>

      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <ButtonLogin providerId={provider.id} />
          </div>
        ))}
    </div>
  )
}

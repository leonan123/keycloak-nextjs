import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { ButtonLogout } from '@/components/button-logout'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <>
      <h1 className="text-xl font-bold">HOME</h1>

      {session ? (
        <div>
          <div>Hello, {session.user?.name}</div>
          <ButtonLogout />
        </div>
      ) : (
        <div>
          <Link href={'/auth/sign-in'}>Go to sign-in</Link>
        </div>
      )}
    </>
  )
}

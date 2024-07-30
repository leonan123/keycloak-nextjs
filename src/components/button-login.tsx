'use client'

import type { Provider } from 'next-auth/providers/index'
import { signIn } from 'next-auth/react'
import type { ComponentProps } from 'react'

interface ButtonLoginProps extends ComponentProps<'button'> {
  providerId: Provider['id']
}

export function ButtonLogin({ providerId }: ButtonLoginProps) {
  return (
    <button
      className="bg-slate-500 hover:bg-slate-400 py-2 px-4 rounded inline-flex items-center"
      onClick={() => signIn(providerId)}
    >
      Sign-in with keycloak
    </button>
  )
}

'use client'
import { signOut } from 'next-auth/react'

export function ButtonLogout() {
  return (
    <button
      className="bg-slate-500 hover:bg-slate-400 py-2 px-4 rounded inline-flex items-center"
      onClick={() => signOut()}
    >
      Sign-out
    </button>
  )
}

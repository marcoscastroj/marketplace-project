'use client'

import { auth } from '@/api/authenticate'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function NavigationHome() {
  const router = useRouter()

  return (
    <div className="flex items-center space-x-8 text-center">
      <Link href={'/promotion'}>Register promotion</Link>
      <Link href={'/product'}>Register product</Link>
      <button onClick={() => auth.logOut(router)}>
        <LogOut />
      </button>
    </div>
  )
} 

'use client'

import { auth } from '@/api/authenticate'
import Button from '@/components/Button/main'
import Input from '@/components/Input/main'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function FormSignIn() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()

    const response = await auth.login({ email, password })

    if (response?.status === 200) {
      router.push('/home')
    }
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <form onSubmit={handleForm} className="flex w-[90%] flex-col space-y-3">
        <Input
          after={false}
          type="txt"
          required
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        >
          E-mail
        </Input>
        <Input
          after={false}
          type="password"
          required
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
        >
          Password
        </Input>
        <Button type="submit">Login</Button>
      </form>
      <div>
        <Link href={'/register'} className="text-gray-400 hover:text-gray-700">
          Register
        </Link>
      </div>
    </div>
  )
}

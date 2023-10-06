'use client'

import { auth } from '@/api/authenticate'
import Button from '@/components/Button/main'
import Input from '@/components/Input/main'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

import { toast } from 'react-toastify'

export function FormSignUp() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      return toast.error('As senhas não estão iguais!')
    }

    const response = await auth.register({
      name,
      cpf,
      password,
      age,
      email,
    })

    if (response?.status === 201) {
      router.push('/')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <form onSubmit={handleForm} className="flex w-[90%] flex-col space-y-3">
        <div className="flex flex-col space-y-2">
          <Input
            after={true}
            type="text"
            required
            placeholder="Type your name"
            onChange={(e) => setName(e.target.value)}
          >
            Name
          </Input>

          <Input
            after={true}
            type="email"
            required
            placeholder="Type your email"
            onChange={(e) => setEmail(e.target.value)}
          >
            E-mail
          </Input>

          <Input
            after={true}
            type="text"
            required
            placeholder="Type your CPF"
            minLength={11}
            maxLength={11}
            onChange={(e) => setCpf(e.target.value)}
          >
            CPF
          </Input>
          <Input
            after={true}
            type="text"
            required
            placeholder="Type your age"
            onChange={(e) => setAge(e.target.value)}
          >
            Age
          </Input>

          <Input
            after={true}
            type="password"
            required
            placeholder="Type your password"
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          >
            Password
          </Input>
          <Input
            after={true}
            type="password"
            required
            placeholder="Confirm your password"
            minLength={8}
            onChange={(e) => setConfirmPassword(e.target.value)}
          >
            Confirm your password
          </Input>
        </div>
        <Button type="submit">Register</Button>
      </form>
      <div>
        <Link
          href={'/'}
          className="text-gray-400 hover:text-gray-700 max-sm:text-sm"
        >
          Already have an account? Access
        </Link>
      </div>
    </div>
  )
}

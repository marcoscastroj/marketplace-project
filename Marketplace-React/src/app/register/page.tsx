import { FormSignUp } from '@/components/FormSignUp/main'
import HeaderAuth from '@/components/HeaderAuth/main'
import { Unlock } from 'lucide-react'

export default function Registrar() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex flex-col justify-center space-y-3 bg-white">
        <HeaderAuth>
          <Unlock />
        </HeaderAuth>
        <FormSignUp />
      </div>
      <div className="bg-market bg-cover bg-center"></div>
    </div>
  )
}

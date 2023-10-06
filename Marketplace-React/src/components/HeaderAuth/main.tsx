import { ReactNode } from 'react'

interface HeaderLogoProps {
  children: ReactNode
}

export default function HeaderAuth({ children }: HeaderLogoProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="rounded-full bg-gray-600 p-4 text-white">{children}</div>
    </div>
  )
}

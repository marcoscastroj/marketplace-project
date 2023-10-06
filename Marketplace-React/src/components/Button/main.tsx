import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <div className="w-full">
      <button className="flex w-full items-center justify-center rounded-md bg-gray-600 px-4 py-2 font-normal text-white">
        {children}
      </button>
    </div>
  )
}

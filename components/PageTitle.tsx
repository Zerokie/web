import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">{children}</h1>
  )
}

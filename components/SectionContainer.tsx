import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <div className="mx-auto mb-auto w-screen grow px-4 sm:px-6 xl:px-0">{children}</div>
}

'use client'

import { usePathname } from 'next/navigation'
import SiteHeader from '@/components/SiteHeader'

const HIDE_HEADER_ROUTES = ['/consulta-gratuita']

export default function ConditionalHeader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hide = HIDE_HEADER_ROUTES.some(route => pathname === route || pathname.startsWith(`${route}/`))

  if (hide) return <>{children}</>

  return (
    <>
      <SiteHeader />
      <div className="pt-16">{children}</div>
    </>
  )
}

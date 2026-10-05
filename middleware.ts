import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/** Host de producción en *.vercel.app que no debe indexarse en paralelo a deudaoff.com */
const VERCEL_PROD_HOST = 'deuda-off-landing.vercel.app'
const CANONICAL_ORIGIN = 'https://deudaoff.com'

export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') || '').split(':')[0].toLowerCase()

  if (host === VERCEL_PROD_HOST) {
    const dest = new URL(request.nextUrl.pathname + request.nextUrl.search, CANONICAL_ORIGIN)
    return NextResponse.redirect(dest, 308)
  }

  return NextResponse.next()
}

export const config = {
  // Excluir assets estáticos y API; redirigir páginas HTML
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|woff2?)$).*)',
  ],
}

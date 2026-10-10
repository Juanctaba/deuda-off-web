/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  async redirects() {
    return [
      // Consolidación de contenido: se descartaron las páginas pilar duplicadas
      // en favor de los artículos de blog ya indexados, que fueron ampliados.
      {
        source: '/ley-2445-de-2025',
        destination: '/blog/ley-2445-de-2025-insolvencia-colombia',
        permanent: true,
      },
      {
        source: '/insolvencia-persona-natural',
        destination: '/blog/proceso-insolvencia-persona-natural-paso-a-paso',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        // Alias duplicado del mismo proyecto Vercel; canonical = deudaoff.com
        source: '/:path*',
        has: [{ type: 'host', value: 'insolvencia.nucleojuridico.com.co' }],
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }],
      },
    ]
  },
}
export default nextConfig

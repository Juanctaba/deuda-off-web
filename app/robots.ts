import type { MetadataRoute } from 'next'

// Bots permitidos de forma explícita (GEO/AEO, aprobado por Jefe el 10 oct 2026).
const ALLOWED_BOTS = [
  'Googlebot',       // Google Search, AI Overviews y AI Mode
  'Bingbot',         // Bing y Copilot
  'GPTBot',          // OpenAI (entrenamiento)
  'OAI-SearchBot',   // búsqueda de ChatGPT
  'ChatGPT-User',    // ChatGPT abriendo una página a pedido del usuario
  'PerplexityBot',   // índice de Perplexity
  'Google-Extended', // Gemini (no afecta AI Overviews)
  'ClaudeBot',       // Anthropic
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...ALLOWED_BOTS.map((userAgent) => ({ userAgent, allow: '/' })),
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://deudaoff.com/sitemap.xml',
  }
}

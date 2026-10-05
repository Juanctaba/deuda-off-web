'use client'

/**
 * Carga Material Symbols Outlined sin bloquear el render (media=print → all on load).
 * Fallback <noscript> para crawlers / JS off.
 */
export default function MaterialSymbols() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
        media="print"
        onLoad={(e) => {
          ;(e.currentTarget as HTMLLinkElement).media = 'all'
        }}
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
        />
      </noscript>
    </>
  )
}

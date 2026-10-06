/**
 * Inyecta Material Symbols Outlined de forma no bloqueante (media=print → all).
 * Server Component: script inline en <head> + noscript fallback.
 */
export default function MaterialSymbols() {
  const href =
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap'

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href=${JSON.stringify(href)};l.media='print';l.onload=function(){this.media='all'};document.head.appendChild(l);})();`,
        }}
      />
      <noscript>
        <link rel="stylesheet" href={href} />
      </noscript>
    </>
  )
}

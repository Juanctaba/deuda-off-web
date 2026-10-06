/**
 * Inyecta Material Symbols Outlined de forma no bloqueante (media=print → all).
 * Server Component: script inline en <head> + noscript fallback.
 *
 * Mientras la fuente no está lista, globals.css oculta los iconos con
 * `html:not(.ms-ready) .material-symbols-outlined { visibility: hidden }`
 * (la caja sigue ocupando su espacio → sin CLS). Este script añade `ms-ready`
 * a <html> cuando la fuente cargó, si falla, si no hay document.fonts o, como
 * red de seguridad, a los 6000 ms (mejor un hueco en blanco algo más largo
 * que letras sueltas de la ligadura; los iconos son decorativos). El probe se
 * lanza en el onload del link, después de pasar a media=all, para que el
 * @font-face ya esté aplicado; si
 * fonts.load resuelve con [] (hoja aún no aplicada), reintenta cada 100 ms.
 */
export default function MaterialSymbols() {
  const href =
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=block'

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var d=document,h=d.documentElement,F=d.fonts,k=0;function r(){if(!k){k=1;h.classList.add('ms-ready')}}setTimeout(r,6000);if(!F||!F.load)r();function p(n){F.load('24px "Material Symbols Outlined"','home').then(function(a){if(a&&a.length)r();else if(n>0)setTimeout(function(){p(n-1)},100)},r)}var l=d.createElement('link');l.rel='stylesheet';l.href=${JSON.stringify(href)};l.media='print';l.onload=function(){this.media='all';if(F&&F.load)p(30)};l.onerror=r;d.head.appendChild(l);})();`,
        }}
      />
      <noscript>
        <link rel="stylesheet" href={href} />
        <style
          dangerouslySetInnerHTML={{ __html: '.material-symbols-outlined{visibility:visible!important}' }}
        />
      </noscript>
    </>
  )
}

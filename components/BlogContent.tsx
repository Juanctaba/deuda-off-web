export function BlogContent({ html }: { html: string }) {
  return (
    <div
      className="
        [&_h2]:font-manrope [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mt-10 [&_h2]:mb-4
        [&_h3]:font-manrope [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mt-7 [&_h3]:mb-3
        [&_p]:text-on-surface [&_p]:leading-relaxed [&_p]:mb-4
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
        [&_li]:mb-2 [&_li]:text-on-surface-variant
        [&_strong]:text-on-surface [&_strong]:font-semibold
        [&_a]:text-primary [&_a]:underline
        [&_blockquote]:border-l-4 [&_blockquote]:border-secondary [&_blockquote]:pl-5 [&_blockquote]:py-1 [&_blockquote]:italic [&_blockquote]:text-on-surface-variant [&_blockquote]:my-6
        [&_.definicion]:bg-secondary-container [&_.definicion]:border-l-4 [&_.definicion]:border-secondary [&_.definicion]:px-5 [&_.definicion]:py-4 [&_.definicion]:rounded-r-xl [&_.definicion]:mb-6 [&_.definicion]:text-on-surface [&_.definicion]:not-italic
        [&_.definicion_strong]:text-secondary [&_.definicion_strong]:font-bold
        [&_.pilar-link]:bg-surface-container [&_.pilar-link]:border [&_.pilar-link]:border-outline-variant/50 [&_.pilar-link]:px-5 [&_.pilar-link]:py-4 [&_.pilar-link]:rounded-xl [&_.pilar-link]:mb-6 [&_.pilar-link]:text-sm [&_.pilar-link]:text-on-surface-variant
        [&_.pilar-link_strong]:text-primary [&_.pilar-link_strong]:font-bold
        [&_.pilar-link_a]:text-secondary [&_.pilar-link_a]:font-semibold
        [&_.tabla-wrap]:overflow-x-auto [&_.tabla-wrap]:my-6 [&_.tabla-wrap]:rounded-xl [&_.tabla-wrap]:border [&_.tabla-wrap]:border-outline-variant/50
        [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse [&_table]:min-w-[520px]
        [&_thead]:bg-primary
        [&_th]:text-white [&_th]:font-manrope [&_th]:font-bold [&_th]:text-left [&_th]:px-4 [&_th]:py-3 [&_th]:text-xs [&_th]:uppercase [&_th]:tracking-wider
        [&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_td]:text-on-surface-variant [&_td]:border-t [&_td]:border-outline-variant/40 [&_td]:leading-relaxed
        [&_tbody_tr:nth-child(even)]:bg-surface-container/60
        [&_td_strong]:text-primary
        [&_.cita-norma]:bg-surface-container [&_.cita-norma]:border-l-4 [&_.cita-norma]:border-primary [&_.cita-norma]:px-5 [&_.cita-norma]:py-4 [&_.cita-norma]:rounded-r-xl [&_.cita-norma]:my-6 [&_.cita-norma]:text-sm [&_.cita-norma]:text-on-surface-variant [&_.cita-norma]:italic
        [&_.cita-norma_strong]:text-primary [&_.cita-norma_strong]:not-italic
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

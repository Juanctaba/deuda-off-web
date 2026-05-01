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
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

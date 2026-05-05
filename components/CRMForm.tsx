'use client'
import Script from 'next/script'

export default function CRMForm() {
  return (
    <div className="w-full">
      <iframe
        src="https://api.deudaoff.com/widget/form/9xUbgy9qQgjLrHgBnVy9"
        className="w-full h-[700px] sm:h-[650px] block rounded-2xl border-0"
        loading="lazy"
        id="inline-9xUbgy9qQgjLrHgBnVy9"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form Web"
        data-height="650"
        data-layout-iframe-id="inline-9xUbgy9qQgjLrHgBnVy9"
        data-form-id="9xUbgy9qQgjLrHgBnVy9"
        title="Form Web"
      />
      <Script src="https://api.deudaoff.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  )
}

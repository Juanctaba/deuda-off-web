'use client'
import Script from 'next/script'

export default function CRMForm() {
  return (
    <div style={{ width: '100%', minHeight: '600px' }}>
      <iframe
        src="https://api.deudaoff.com/widget/form/9xUbgy9qQgjLrHgBnVy9"
        style={{ width: '100%', height: '650px', border: 'none', borderRadius: '15px' }}
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

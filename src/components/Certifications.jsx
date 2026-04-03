import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '48px 0' }}>
      <h2 style={{
        fontSize: '22px',
        fontWeight: 500,
        marginBottom: '4px',
      }}>
        Certifications
      </h2>
      <div style={{
        height: '1px',
        background: 'var(--border)',
        marginBottom: '24px',
      }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
      }}>
        {certifications.map(cert => (
          <div
            key={cert.name}
            onClick={() => cert.link && window.open(cert.link, '_blank')}
            style={{
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              cursor: cert.link ? 'pointer' : 'default',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => {
              if (cert.link) e.currentTarget.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
          >
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-md)',
              background: '#0ea5e910',
              border: '1px solid #0ea5e930',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--accent)" strokeWidth="1.4">
                <circle cx="8" cy="6" r="3.5"/>
                <path d="M3 14s0-3 5-3 5 3 5 3"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '13px', fontWeight: 500 }}>
                {cert.name}
              </p>
              <p style={{ fontSize: '11px', color: 'var(--accent)', marginTop: '2px' }}>
                {cert.issuer}
              </p>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                {cert.desc}
              </p>
            </div>
            {cert.link && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="var(--text-muted)" strokeWidth="1.4">
                <path d="M2 10L10 2M10 2H5M10 2v5"/>
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
import { contact } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '48px 0 80px' }}>
      <p style={{
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: '16px',
      }}>
        Contact
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
      }}>
        <div style={{
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-md)',
            background: '#0ea5e910',
            border: '1px solid #0ea5e930',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="var(--accent)" strokeWidth="1.4">
              <rect x="1" y="3" width="14" height="10" rx="1.5"/>
              <path d="M1 5l7 5 7-5"/>
            </svg>
          </div>
          <div>
            <p style={{ fontSize: '13px' }}>{contact.email}</p>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Email</p>
          </div>
        </div>

        <button
          onClick={() => window.open(contact.linkedin, '_blank')}
          style={{
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-md)',
            background: '#0ea5e910',
            border: '1px solid #0ea5e930',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="var(--accent)" strokeWidth="1.4">
              <rect x="1" y="1" width="14" height="14" rx="2"/>
              <path d="M5 7v5M5 4.5v.5M8 12V7m0 0V5.5a1.5 1.5 0 013 0V7m0 5V7"/>
            </svg>
          </div>
          <div>
            <p style={{ fontSize: '13px', color: 'var(--text)' }}>LinkedIn</p>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>szu-man-ho</p>
          </div>
        </button>

        <button
          onClick={() => window.open(contact.github, '_blank')}
          style={{
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-md)',
            background: '#0ea5e910',
            border: '1px solid #0ea5e930',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="var(--accent)" strokeWidth="1.4">
              <circle cx="8" cy="8" r="6"/>
              <path d="M8 2a4 4 0 000 12M8 2a4 4 0 010 12M2 8h12"/>
            </svg>
          </div>
          <div>
            <p style={{ fontSize: '13px', color: 'var(--text)' }}>GitHub</p>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Queenieeeeeeee</p>
          </div>
        </button>
      </div>
    </section>
  )
}
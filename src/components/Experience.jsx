import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '48px 0' }}>
      <h2 style={{
        fontSize: '22px',
        fontWeight: 500,
        marginBottom: '4px',
      }}>
        Experience
      </h2>
      <div style={{
        height: '1px',
        background: 'var(--border)',
        marginBottom: '24px',
      }} />

      <div style={{
        background: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        overflow: 'hidden',
      }}>
        {experience.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: '16px',
              padding: '20px 24px',
              borderBottom: index < experience.length - 1 ? '1px solid var(--border)' : 'none',
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '4px',
              width: '16px',
              flexShrink: 0,
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--accent)',
                flexShrink: 0,
              }} />
              {index < experience.length - 1 && (
                <div style={{
                  width: '1px',
                  flex: 1,
                  background: 'var(--border)',
                  marginTop: '4px',
                }} />
              )}
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 500 }}>
                {item.role}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                {item.company}
              </p>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px' }}>
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
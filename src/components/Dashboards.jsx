import { dashboards } from '../data/content'

export default function Dashboards() {
  return (
    <section id="dashboards" style={{ padding: '48px 0' }}>
      <h2 style={{
        fontSize: '22px',
        fontWeight: 500,
        marginBottom: '4px',
      }}>
        Dashboards
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
        {dashboards.map(d => (
          <div
            key={d.id}
            style={{
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px 24px',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            <div>
              <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>
                {d.name}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {d.sub}
              </p>
            </div>
            {d.link && (
              <button
                onClick={() => window.open(d.link, '_blank')}
                style={{
                  fontSize: '12px',
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'transparent',
                  color: 'var(--accent)',
                  border: '1px solid var(--accent)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                View →
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '48px 0' }}>
      <h2 style={{
        fontSize: '22px',
        fontWeight: 500,
        marginBottom: '4px',
      }}>
        Projects
      </h2>
      <div style={{
        height: '1px',
        background: 'var(--border)',
        marginBottom: '24px',
      }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
      }}>
        {projects.map(p => (
          <div
            key={p.id}
            style={{
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              border: p.inProgress ? '1px dashed var(--border)' : '1px solid var(--border)',
              opacity: p.inProgress ? 0.7 : 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <p style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 500 }}>
              {p.metric}
            </p>
            <p style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1.3 }}>
              {p.name}
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 }}>
              {p.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
              {p.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    fontSize: '10px',
                    padding: '2px 8px',
                    borderRadius: '99px',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            {p.link && (
              <button
                onClick={() => window.open(p.link, '_blank')}
                style={{
                  fontSize: '11px',
                  color: 'var(--accent)',
                  marginTop: '4px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  textAlign: 'left',
                }}
              >
                View project →
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
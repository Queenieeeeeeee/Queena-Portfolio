import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '48px 0' }}>
      <p style={{
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: '16px',
      }}>
        Technical skills
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
      }}>
        {skills.map(group => (
          <div
            key={group.group}
            style={{
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              border: '1px solid var(--border)',
            }}
          >
            <p style={{ fontSize: '13px', fontWeight: 500, marginBottom: '8px' }}>
              {group.group}
            </p>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--accent)',
                marginRight: '5px',
              }} />
              Hands-on &nbsp;·&nbsp;
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--border)',
                marginRight: '5px',
              }} />
              Familiar
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {group.items.map(item => (
                <span
                  key={item.name}
                  style={{
                    fontSize: '11px',
                    padding: '3px 10px',
                    borderRadius: '99px',
                    border: item.handson ? '1px solid #0ea5e930' : '1px solid var(--border)',
                    color: item.handson ? 'var(--accent)' : 'var(--text-muted)',
                    background: item.handson ? '#0ea5e910' : 'transparent',
                  }}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
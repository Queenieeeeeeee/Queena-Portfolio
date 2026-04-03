const flow = [
  {
    label: 'Data Sources',
    items: ['Flat files', '20M+ rows', 'MySQL database'],
    color: false,
  },
  {
    label: 'Data Warehouse',
    items: ['Star schema', 'Null removal', 'Deduplication', 'Schema recreation'],
    color: false,
  },
  {
    label: 'Tableau Dashboard',
    items: ['Total orders', 'Order value', 'Customer base', 'Search trends', 'User segments'],
    color: true,
  },
  {
    label: 'Insights',
    items: ['UI improvement suggestions', 'Search behavior analysis', 'Conversion rate by segment'],
    color: false,
  },
]

const Arrow = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    color: 'var(--text-muted)',
    fontSize: '18px',
    padding: '0 4px',
    flexShrink: 0,
  }}>
    →
  </div>
)

export default function FarnellDiagram() {
  return (
    <div style={{ padding: '16px 0' }}>
      <p style={{
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: '4px',
      }}>
        Dashboard architecture
      </p>
      <p style={{
        fontSize: '11px',
        color: 'var(--text-muted)',
        marginBottom: '16px',
      }}>
        Highlighted section reflects my contribution
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '4px',
        overflowX: 'auto',
        paddingBottom: '4px',
      }}>
        {flow.map((stage, i) => (
          <div key={stage.label} style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{
              minWidth: '140px',
              borderRadius: 'var(--radius-md)',
              border: stage.color ? '1px solid var(--accent)' : '1px solid var(--border)',
              background: stage.color ? '#0ea5e910' : 'var(--bg)',
              padding: '10px 12px',
            }}>
              <p style={{
                fontSize: '11px',
                fontWeight: 500,
                color: stage.color ? 'var(--accent)' : 'var(--text)',
                marginBottom: '8px',
              }}>
                {stage.label}
              </p>
              {stage.items.map(item => (
                <p key={item} style={{
                  fontSize: '10px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                }}>
                  · {item}
                </p>
              ))}
            </div>
            {i < flow.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
    </div>
  )
}
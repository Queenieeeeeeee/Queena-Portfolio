const stages = [
  {
    label: 'Source Data',
    items: ['Excel product files', '60K+ records, 400+ columns'],
  },
  {
    label: 'Data Cleaning',
    items: ['Python & Excel', 'Unit formatting', 'Spelling validation', 'Cross-field checks'],
  },
  {
    label: 'SSIS Pipeline',
    items: ['Staging tables', 'Lookup transforms', 'C# script components', 'Category hierarchy'],
  },
  {
    label: 'Automation',
    items: ['Python web scraping', 'PowerShell image download', 'Batch resize & rename'],
  },
  {
    label: 'NopCommerce',
    items: ['Products & specs', 'Categories & brands', 'Images mapped', 'URL records'],
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

export default function SSISDiagram() {
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
        ETL pipeline architecture
      </p>
      <p style={{
        fontSize: '11px',
        color: 'var(--text-muted)',
        marginBottom: '16px',
      }}>
        Sole contributor — end-to-end
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '4px',
        overflowX: 'auto',
        paddingBottom: '4px',
      }}>
        {stages.map((stage, i) => (
          <div key={stage.label} style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{
              minWidth: '130px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              padding: '10px 12px',
            }}>
              <p style={{
                fontSize: '11px',
                fontWeight: 500,
                color: 'var(--text)',
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
            {i < stages.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
    </div>
  )
}
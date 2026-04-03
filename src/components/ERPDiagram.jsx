const steps = [
  { id: 'A', label: 'Compare Data' },
  { id: 'B', label: 'Validate Records' },
  { id: 'C', label: 'Meet Standards?', decision: true },
  { id: 'D', label: 'Update Systems', branch: 'Yes' },
  { id: 'E', label: 'Review & Fix', branch: 'No' },
  { id: 'F', label: 'Update Customers / Vendors' },
  { id: 'G', label: 'Rebuild Price Library' },
  { id: 'H', label: 'Clean Addresses' },
]

const Arrow = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '24px',
    color: 'var(--text-muted)',
    fontSize: '16px',
  }}>
    ↓
  </div>
)

const Box = ({ label, decision, branch }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
    {branch && (
      <span style={{ fontSize: '11px', color: 'var(--accent)', minWidth: '24px', textAlign: 'right' }}>
        {branch}
      </span>
    )}
    <div style={{
      padding: '8px 16px',
      borderRadius: decision ? '99px' : 'var(--radius-md)',
      border: decision ? '1px solid var(--accent)' : '1px solid var(--border)',
      background: decision ? '#0ea5e910' : 'var(--bg)',
      fontSize: '12px',
      color: decision ? 'var(--accent)' : 'var(--text)',
      fontWeight: decision ? 500 : 400,
      textAlign: 'center',
      minWidth: '160px',
    }}>
      {label}
    </div>
  </div>
)

export default function ERPDiagram() {
  return (
    <div style={{ padding: '16px 0' }}>
      <p style={{
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: '16px',
      }}>
        Migration flow
      </p>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>

        {/* Main flow */}
        <div style={{ flex: 1 }}>
          <Box label="Compare Data" />
          <Arrow />
          <Box label="Validate Records" />
          <Arrow />
          <Box label="Meet standards?" decision />

          {/* Branch row */}
          <div style={{ display: 'flex', gap: '12px', margin: '0', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <Arrow />
              <Box label="Update Systems" branch="Yes" />
              <Arrow />
              <Box label="Update Customers / Vendors" />
              <Arrow />
              <Box label="Rebuild Price Library" />
              <Arrow />
              <Box label="Clean Addresses" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <Arrow />
              <Box label="Review & Fix" branch="No" />
              <div style={{
                marginTop: '8px',
                fontSize: '11px',
                color: 'var(--text-muted)',
                textAlign: 'center',
              }}>
                ↩ back to validate
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
import { motion } from 'framer-motion'

const stats = [
  { label: 'Products migrated', value: '60K+', unit: 'records' },
  { label: 'ML model accuracy', value: '96%', unit: 'team project' },
  { label: 'Data accuracy lift', value: '+20%', unit: 'via validation' },
]

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        padding: '80px 0 64px',
        display: 'flex',
        alignItems: 'center',
        gap: '48px',
      }}
    >
      <motion.div
        style={{ flex: 1 }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '12px',
        }}>
          Data & Systems Analyst — Chandler, AZ
        </p>

        <h1 style={{
          fontSize: '40px',
          fontWeight: 600,
          lineHeight: 1.15,
          marginBottom: '4px',
        }}>
          Queena Ho
        </h1>

        <p style={{
          fontSize: '14px',
          color: 'var(--text-muted)',
          marginBottom: '16px',
        }}>
          Szu Man Ho
        </p>

        <p style={{
          fontSize: '16px',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          marginBottom: '28px',
          maxWidth: '420px',
        }}>
          ERP systems, ETL pipelines, and data analytics.
          <br />
          MS Business Analytics · Tableau Certified · ASU 4.0 GPA
        </p>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontSize: '13px',
              padding: '9px 20px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--accent)',
              color: '#fff',
              fontWeight: 500,
              cursor: 'pointer',
              border: 'none',
            }}
          >
            View projects
          </button>
          <button
            onClick={() => window.open('/resume.pdf', '_blank')}
            style={{
              fontSize: '13px',
              padding: '9px 20px',
              borderRadius: 'var(--radius-md)',
              background: 'transparent',
              color: 'var(--text)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
            }}
          >
            Download resume
          </button>
        </div>
      </motion.div>

      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          minWidth: '190px',
        }}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {stats.map(s => (
          <div
            key={s.label}
            style={{
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              padding: '14px 18px',
            }}
          >
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
              {s.label}
            </p>
            <p style={{ fontSize: '22px', fontWeight: 500 }}>
              {s.value}{' '}
              <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 400 }}>
                {s.unit}
              </span>
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
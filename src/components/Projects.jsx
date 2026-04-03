import { useState } from 'react'
import { projects } from '../data/content'
import ERPDiagram from './ERPDiagram'
import SSISDiagram from './SSISDiagram'
import FarnellDiagram from './FarnellDiagram'

function Modal({ onClose, children }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
          padding: '28px',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            lineHeight: 1,
          }}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeDiagram, setActiveDiagram] = useState(null)

  return (
    <>
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
                border: p.inProgress ? '1px dashed var(--border)' : '1px solid var(--border)',
                opacity: p.inProgress ? 0.7 : 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                padding: '20px',
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

              <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                {p.hasDiagram && (
                  <button
                    onClick={() => setActiveDiagram(p.id)}
                    style={{
                      fontSize: '11px',
                      color: 'var(--accent)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left',
                    }}
                  >
                    View architecture →
                  </button>
                )}
                {p.link && (
                  <button
                    onClick={() => window.open(p.link, '_blank')}
                    style={{
                      fontSize: '11px',
                      color: 'var(--accent)',
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
            </div>
          ))}
        </div>
      </section>

      {activeDiagram && (
        <Modal onClose={() => setActiveDiagram(null)}>
          {activeDiagram === 1 && <ERPDiagram />}
          {activeDiagram === 2 && <SSISDiagram />}
          {activeDiagram === 4 && <FarnellDiagram />}
        </Modal>
      )}
    </>
  )
}
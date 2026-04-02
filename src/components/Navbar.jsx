import { useState, useEffect } from 'react'

const links = ['About', 'Projects', 'Dashboards', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'var(--bg)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '0 24px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontWeight: 500, fontSize: '15px' }}>
          Queena <span style={{ color: 'var(--accent)' }}>Ho</span>
        </span>
        <div style={{ display: 'flex', gap: '24px' }}>
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '13px',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '4px 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
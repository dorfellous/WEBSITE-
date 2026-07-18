import { NavLink, Outlet, Link } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { to: '/accessories', label: 'ACCESSORIES' },
  { to: '/jewelry', label: 'JEWELRY' },
  { to: '/bags', label: 'BAGS' },
  { to: '/soon', label: 'SOON' },
]

function Navigation({ onNavigate }) {
  return (
    <nav className="site-nav" aria-label="Primary">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onNavigate}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="mobile-header">
        <Link to="/" className="mobile-wordmark" onClick={() => setMenuOpen(false)}>
          Dé-Féll
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          MENU
        </button>
      </header>

      <aside className="sidebar" aria-label="Site">
        <Link to="/" className="wordmark">
          Dé-Féll
        </Link>
        <Navigation />
      </aside>

      <div id="mobile-menu" className={menuOpen ? 'mobile-menu open' : 'mobile-menu'}>
        <Navigation onNavigate={() => setMenuOpen(false)} />
      </div>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

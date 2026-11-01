import { useState } from 'react'
import { LINK_FORM, NAV_LINKS } from '../config/constants'
import { Link } from 'react-router-dom'
import TopBar from './TopBar'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      const hashId = href.replace('/#', '')
      const element = document.getElementById(hashId)
      if (window.location.pathname === '/' && element) {
        e.preventDefault()
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', href)
        setMobileMenuOpen(false)
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all border-b border-white/10">
      <TopBar />
      <div className="min-h-[85px] bg-black/90 backdrop-blur-md flex items-center">
        <nav className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between py-2">
        {/* Logo Marca */}
        <Link to="/" className="flex items-center">
          <img src="/imagenes/logo2.png" alt="Logo CONIMAPE" className="h-16 sm:h-18 md:h-20 w-auto max-w-[200px] md:max-w-[240px] object-contain py-1" />
        </Link>

        {/* Links Desktop */}
        <ul className="hidden lg:flex items-center gap-6 list-none">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              {link.href.startsWith('/#') || link.href === '#' ? (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/90 hover:text-gold-500 font-medium text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="text-white/90 hover:text-gold-500 font-medium text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Botón CTA Desktop */}
        <div className="hidden lg:block">
          <Link
            to="/inscripcion"
            className="inline-block bg-gold-500 hover:bg-gold-400 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            Inscríbete
          </Link>
        </div>

        {/* Hamburguesa Móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white text-2xl focus:outline-none p-2"
          aria-label="Abrir menú"
        >
          <i className={mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>
      </nav>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-gold-500/30 px-6 py-6 space-y-4 shadow-2xl">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                {link.href.startsWith('/#') || link.href === '#' ? (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white hover:text-gold-500 text-base block font-medium"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-gold-500 text-base block font-medium"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Link
              to="/inscripcion"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-gold-500 hover:bg-gold-400 text-white font-semibold py-3 rounded-full transition-all"
            >
              Inscríbete ahora
            </Link>
          </div>
        </div>
      )}
      </div>
    </header>
  )
}

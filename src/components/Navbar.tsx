import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const { t } = useLanguage()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Marcos Lezcano
                </Link>
                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
                    <Link to="/projects" onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

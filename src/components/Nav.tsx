import { useState, useEffect } from 'react'
import '../styles/Nav.css'

const Nav = () => {
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'projects', 'contact']
            const scrollPosition = window.scrollY + window.innerHeight / 2

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const offsetTop = element.offsetTop
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
    }

    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <a href="#home" onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('home')
                    }}>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="42" height="42" rx="5" fill="currentColor" />
                            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="var(--navy)" fontSize="24">
                                M
                            </text>
                        </svg>
                    </a>
                </div>

                <div className="nav-links">
                    <ol>
                        <li>
                            <a
                                href="#about"
                                className={activeSection === 'about' ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('about')
                                }}
                            >
                                <span>01.</span> Sobre mí
                            </a>
                        </li>
                        <li>
                            <a
                                href="#experience"
                                className={activeSection === 'experience' ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('experience')
                                }}
                            >
                                <span>02.</span> Experiencia
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className={activeSection === 'projects' ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('projects')
                                }}
                            >
                                <span>03.</span> Proyectos
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={activeSection === 'contact' ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('contact')
                                }}
                            >
                                <span>04.</span> Contacto
                            </a>
                        </li>
                    </ol>
                    <a href="/resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">
                        Curriculum
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Nav

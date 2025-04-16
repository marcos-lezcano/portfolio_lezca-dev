import { useEffect, useState } from 'react'
import '../styles/Hero.css'

const Hero = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 1000)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <section id="hero">
            <div className={`hero-content ${isMounted ? 'mounted' : ''}`}>
                <h1>Hola, mi nombre es</h1>
                <h2 className="big-heading">Marcos Lezcano.</h2>
                <h3 className="big-heading">Construyo cosas para la web.</h3>
                <p>
                    Soy un desarrollador de software especializado en crear experiencias digitales excepcionales.
                    Actualmente, estoy enfocado en construir productos accesibles y centrados en el usuario.
                </p>
            </div>
        </section>
    )
}

export default Hero

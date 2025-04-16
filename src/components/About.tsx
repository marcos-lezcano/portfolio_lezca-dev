import '../styles/About.css'

const About = () => {
    const skills = [
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'PostgreSQL'
    ]

    return (
        <section id="about">
            <h2 className="numbered-heading">Sobre mí</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        ¡Hola! Mi nombre es Marcos y disfruto creando cosas que viven en internet. Mi interés en el desarrollo web comenzó en 2018 cuando decidí explorar cómo funcionaban las páginas web - ¡y aquí estamos!
                    </p>
                    <p>
                        Hoy, tengo el privilegio de trabajar en proyectos diversos que me permiten combinar mi pasión por la tecnología con soluciones creativas. Mi enfoque principal es construir productos digitales accesibles e inclusivos.
                    </p>
                    <p>
                        Aquí hay algunas tecnologías con las que he estado trabajando recientemente:
                    </p>
                    <ul className="skills-list">
                        {skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="about-pic">
                    <div className="wrapper">
                        <img src="/me.jpg" alt="Marcos Lezcano" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

import { FaCode, FaDatabase, FaTools, FaServer } from 'react-icons/fa'

interface Skill {
    category: string
    icon: JSX.Element
    items: string[]
}

const About = () => {
    const skills: Skill[] = [
        {
            category: 'Frontend',
            icon: <FaCode />,
            items: ['React', 'TypeScript', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS']
        },
        {
            category: 'Backend',
            icon: <FaServer />,
            items: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL']
        },
        {
            category: 'Base de Datos',
            icon: <FaDatabase />,
            items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
        },
        {
            category: 'Herramientas',
            icon: <FaTools />,
            items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack']
        }
    ]

    return (
        <div className="about-page">
            <section className="about-hero">
                <h1>Sobre Mí</h1>
                <p className="about-intro">
                    Soy un desarrollador web apasionado por crear soluciones digitales innovadoras
                    y experiencias de usuario excepcionales. Con experiencia en desarrollo full stack,
                    me especializo en construir aplicaciones web modernas y escalables.
                </p>
            </section>

            <section className="skills-section">
                <h2>Mis Habilidades</h2>
                <div className="skills-grid">
                    {skills.map(skill => (
                        <div key={skill.category} className="skill-category">
                            <div className="skill-header">
                                {skill.icon}
                                <h3>{skill.category}</h3>
                            </div>
                            <ul className="skill-list">
                                {skill.items.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="experience-section">
                <h2>Experiencia</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>Desarrollador Full Stack Senior</h3>
                            <p className="company">Empresa Actual</p>
                            <p className="period">2022 - Presente</p>
                            <p className="description">
                                Liderando el desarrollo de aplicaciones web empresariales,
                                implementando arquitecturas modernas y mejorando la experiencia del usuario.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <h3>Desarrollador Frontend</h3>
                            <p className="company">Empresa Anterior</p>
                            <p className="period">2020 - 2022</p>
                            <p className="description">
                                Desarrollo de interfaces de usuario modernas y responsivas,
                                trabajando con React y TypeScript.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About

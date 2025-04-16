import '../styles/Projects.css'

const Projects = () => {
    const featuredProjects = [
        {
            title: 'Proyecto Destacado 1',
            description: 'Una aplicación web completa que permite a los usuarios gestionar sus tareas diarias, establecer recordatorios y organizar proyectos. Incluye autenticación de usuarios, almacenamiento en la nube y sincronización en tiempo real.',
            tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
            links: {
                github: 'https://github.com/username/project1',
                external: 'https://project1.com'
            },
            image: '/project1.jpg'
        },
        {
            title: 'Proyecto Destacado 2',
            description: 'Plataforma de comercio electrónico con sistema de pagos integrado, gestión de inventario y panel de administración. Implementa las mejores prácticas de SEO y rendimiento.',
            tech: ['React', 'Next.js', 'Stripe', 'PostgreSQL'],
            links: {
                github: 'https://github.com/username/project2',
                external: 'https://project2.com'
            },
            image: '/project2.jpg'
        }
    ]

    return (
        <section id="projects">
            <h2 className="numbered-heading">Algunos Proyectos</h2>

            <div className="projects-grid">
                {featuredProjects.map((project, i) => {
                    const { title, description, tech, links, image } = project

                    return (
                        <div className="project" key={i}>
                            <div className="project-content">
                                <div>
                                    <p className="project-overline">Proyecto Destacado</p>
                                    <h3 className="project-title">{title}</h3>
                                    <div className="project-description">
                                        <p>{description}</p>
                                    </div>
                                    <ul className="project-tech-list">
                                        {tech.map((tech, i) => (
                                            <li key={i}>{tech}</li>
                                        ))}
                                    </ul>
                                    <div className="project-links">
                                        <a href={links.github} aria-label="GitHub Link">
                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                        <a href={links.external} aria-label="External Link">
                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-image">
                                <a href={links.external}>
                                    <img src={image} alt={title} />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects

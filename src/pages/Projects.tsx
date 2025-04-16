import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
    image: string
    githubUrl: string
    liveUrl: string
}

const Projects = () => {
    const [projects] = useState<Project[]>([
        {
            id: 1,
            title: 'Portfolio Personal',
            description: 'Mi portfolio personal construido con React y TypeScript.',
            technologies: ['React', 'TypeScript', 'Vite'],
            image: '/projects/portfolio.jpg',
            githubUrl: 'https://github.com/tu-usuario/portfolio',
            liveUrl: 'https://tu-portfolio.com'
        },
        {
            id: 2,
            title: 'E-commerce Platform',
            description: 'Plataforma de comercio electrónico con carrito de compras y pagos.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: '/projects/ecommerce.jpg',
            githubUrl: 'https://github.com/tu-usuario/ecommerce',
            liveUrl: 'https://tu-ecommerce.com'
        },
        // Agrega más proyectos aquí
    ])

    return (
        <div className="projects-page">
            <h1>Mis Proyectos</h1>
            <p className="projects-intro">
                Aquí puedes encontrar una selección de mis proyectos más destacados.
                Cada proyecto representa un desafío único y una oportunidad de aprendizaje.
            </p>
            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects

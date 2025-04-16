import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
    image: string
    githubUrl: string
    liveUrl: string
}

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                    {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Código
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Demo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

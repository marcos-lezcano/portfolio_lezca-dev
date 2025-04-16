import { useState } from 'react'
import '../styles/Experience.css'

const Experience = () => {
    const [activeTabId, setActiveTabId] = useState(0)

    const jobs = [
        {
            company: 'Empresa Actual',
            title: 'Desarrollador Full Stack',
            url: '#',
            range: 'Enero 2023 - Presente',
            duties: [
                'Desarrollo de aplicaciones web utilizando React, Node.js y TypeScript',
                'Implementación de arquitecturas escalables y mantenibles',
                'Colaboración en equipo utilizando metodologías ágiles',
                'Optimización de rendimiento y experiencia de usuario'
            ]
        },
        {
            company: 'Empresa Anterior',
            title: 'Desarrollador Frontend',
            url: '#',
            range: 'Junio 2021 - Diciembre 2022',
            duties: [
                'Desarrollo de interfaces de usuario responsivas',
                'Integración con APIs RESTful',
                'Implementación de pruebas unitarias y de integración',
                'Mentorías a desarrolladores junior'
            ]
        },
        {
            company: 'Primera Empresa',
            title: 'Desarrollador Junior',
            url: '#',
            range: 'Enero 2020 - Mayo 2021',
            duties: [
                'Mantenimiento y mejora de aplicaciones web existentes',
                'Colaboración en el desarrollo de nuevas características',
                'Corrección de bugs y optimización de código',
                'Participación en code reviews'
            ]
        }
    ]

    return (
        <section id="experience">
            <h2 className="numbered-heading">Dónde he trabajado</h2>
            <div className="inner">
                <div role="tablist" aria-label="Job tabs" className="tab-list">
                    {jobs.map((job, i) => (
                        <button
                            key={i}
                            role="tab"
                            aria-selected={activeTabId === i}
                            aria-controls={`panel-${i}`}
                            id={`tab-${i}`}
                            className={`tab-button ${activeTabId === i ? 'active' : ''}`}
                            onClick={() => setActiveTabId(i)}
                        >
                            <span>{job.company}</span>
                        </button>
                    ))}
                </div>

                <div className="tab-panels">
                    {jobs.map((job, i) => (
                        <div
                            key={i}
                            role="tabpanel"
                            id={`panel-${i}`}
                            aria-labelledby={`tab-${i}`}
                            className={`tab-panel ${activeTabId === i ? 'active' : ''}`}
                            hidden={activeTabId !== i}
                        >
                            <h3>
                                <span>{job.title}</span>
                                <span className="company">
                                    &nbsp;@&nbsp;
                                    <a href={job.url} className="inline-link">
                                        {job.company}
                                    </a>
                                </span>
                            </h3>
                            <p className="range">{job.range}</p>
                            <ul className="duties-list">
                                {job.duties.map((duty, index) => (
                                    <li key={index}>{duty}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience

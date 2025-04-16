export type Language = 'es' | 'en'

export interface Translations {
    nav: {
        home: string
        projects: string
        about: string
        contact: string
    }
    home: {
        title: string
        subtitle: string
        description: string
        viewProjects: string
        contactMe: string
        skillsTitle: string
        skills: Array<{
            title: string
            description: string
        }>
    }
    projects: {
        title: string
        intro: string
    }
    about: {
        title: string
        intro: string
        skills: {
            title: string
            frontend: string
            backend: string
            database: string
            tools: string
        }
        experience: {
            title: string
            current: {
                role: string
                company: string
                period: string
                description: string
            }
            previous: {
                role: string
                company: string
                period: string
                description: string
            }
        }
    }
    contact: {
        title: string
        intro: string
        info: {
            title: string
            email: string
            phone: string
            location: string
        }
        form: {
            title: string
            name: string
            email: string
            subject: string
            message: string
            submit: string
        }
    }
    footer: {
        copyright: string
    }
}

export const translations: Record<Language, Translations> = {
    es: {
        nav: {
            home: 'Inicio',
            projects: 'Proyectos',
            about: 'Sobre mí',
            contact: 'Contacto'
        },
        home: {
            title: '¡Hola! Soy Marcos Lezcano',
            subtitle: 'Desarrollador Web Full Stack',
            description: 'Creo experiencias web modernas y funcionales utilizando las últimas tecnologías. Me especializo en React, TypeScript y desarrollo de aplicaciones web escalables.',
            viewProjects: 'Ver Proyectos',
            contactMe: 'Contactarme',
            skillsTitle: 'Mis Habilidades',
            skills: [
                {
                    title: 'Frontend',
                    description: 'React, TypeScript, HTML5, CSS3, Tailwind CSS'
                },
                {
                    title: 'Backend',
                    description: 'Node.js, Express, Python, Django, REST APIs'
                },
                {
                    title: 'Base de Datos',
                    description: 'MongoDB, PostgreSQL, MySQL, Redis, Firebase'
                },
                {
                    title: 'Herramientas',
                    description: 'Git, Docker, AWS, CI/CD, Jest, Webpack'
                }
            ]
        },
        projects: {
            title: 'Mis Proyectos',
            intro: 'Aquí puedes encontrar una selección de mis proyectos más destacados. Cada proyecto representa un desafío único y una oportunidad de aprendizaje.'
        },
        about: {
            title: 'Sobre Mí',
            intro: 'Soy un desarrollador web apasionado por crear soluciones digitales innovadoras y experiencias de usuario excepcionales. Con experiencia en desarrollo full stack, me especializo en construir aplicaciones web modernas y escalables.',
            skills: {
                title: 'Mis Habilidades',
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Base de Datos',
                tools: 'Herramientas'
            },
            experience: {
                title: 'Experiencia',
                current: {
                    role: 'Desarrollador Full Stack Senior',
                    company: 'Empresa Actual',
                    period: '2022 - Presente',
                    description: 'Liderando el desarrollo de aplicaciones web empresariales, implementando arquitecturas modernas y mejorando la experiencia del usuario.'
                },
                previous: {
                    role: 'Desarrollador Frontend',
                    company: 'Empresa Anterior',
                    period: '2020 - 2022',
                    description: 'Desarrollo de interfaces de usuario modernas y responsivas, trabajando con React y TypeScript.'
                }
            }
        },
        contact: {
            title: 'Contacto',
            intro: '¿Tienes un proyecto en mente? ¿Quieres colaborar o simplemente charlar? No dudes en contactarme. Estoy aquí para ayudarte.',
            info: {
                title: 'Información de Contacto',
                email: 'Email',
                phone: 'Teléfono',
                location: 'Ubicación'
            },
            form: {
                title: 'Envíame un Mensaje',
                name: 'Nombre',
                email: 'Email',
                subject: 'Asunto',
                message: 'Mensaje',
                submit: 'Enviar Mensaje'
            }
        },
        footer: {
            copyright: '© {year} Marcos Lezcano. Todos los derechos reservados.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            projects: 'Projects',
            about: 'About',
            contact: 'Contact'
        },
        home: {
            title: 'Hi! I\'m Marcos Lezcano',
            subtitle: 'Full Stack Web Developer',
            description: 'I create modern and functional web experiences using the latest technologies. I specialize in React, TypeScript, and scalable web application development.',
            viewProjects: 'View Projects',
            contactMe: 'Contact Me',
            skillsTitle: 'My Skills',
            skills: [
                {
                    title: 'Frontend',
                    description: 'React, TypeScript, HTML5, CSS3, Tailwind CSS'
                },
                {
                    title: 'Backend',
                    description: 'Node.js, Express, Python, Django, REST APIs'
                },
                {
                    title: 'Database',
                    description: 'MongoDB, PostgreSQL, MySQL, Redis, Firebase'
                },
                {
                    title: 'Tools',
                    description: 'Git, Docker, AWS, CI/CD, Jest, Webpack'
                }
            ]
        },
        projects: {
            title: 'My Projects',
            intro: 'Here you can find a selection of my most outstanding projects. Each project represents a unique challenge and a learning opportunity.'
        },
        about: {
            title: 'About Me',
            intro: 'I am a web developer passionate about creating innovative digital solutions and exceptional user experiences. With experience in full stack development, I specialize in building modern and scalable web applications.',
            skills: {
                title: 'My Skills',
                frontend: 'Frontend',
                backend: 'Backend',
                database: 'Database',
                tools: 'Tools'
            },
            experience: {
                title: 'Experience',
                current: {
                    role: 'Senior Full Stack Developer',
                    company: 'Current Company',
                    period: '2022 - Present',
                    description: 'Leading the development of enterprise web applications, implementing modern architectures and improving user experience.'
                },
                previous: {
                    role: 'Frontend Developer',
                    company: 'Previous Company',
                    period: '2020 - 2022',
                    description: 'Development of modern and responsive user interfaces, working with React and TypeScript.'
                }
            }
        },
        contact: {
            title: 'Contact',
            intro: 'Have a project in mind? Want to collaborate or just chat? Don\'t hesitate to contact me. I\'m here to help.',
            info: {
                title: 'Contact Information',
                email: 'Email',
                phone: 'Phone',
                location: 'Location'
            },
            form: {
                title: 'Send me a Message',
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                submit: 'Send Message'
            }
        },
        footer: {
            copyright: '© {year} Marcos Lezcano. All rights reserved.'
        }
    }
}

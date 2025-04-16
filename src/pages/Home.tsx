import { useLanguage } from '../hooks/useLanguage'

interface Skill {
  title: string;
  description: string;
}

const Home = () => {
    const { t } = useLanguage()

    return (
        <div className="home">
            <section className="hero">
                <div className="container">
                    <h1>{t('home.title')}</h1>
                    <p className="subtitle">{t('home.subtitle')}</p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn btn-primary">{t('home.viewProjects')}</a>
                        <a href="#contact" className="btn btn-secondary">{t('home.contactMe')}</a>
                    </div>
                </div>
            </section>

            <section className="skills">
                <div className="container">
                    <h2>{t('home.skillsTitle')}</h2>
                    <div className="skills-grid">
                        {t('home.skills').map((skill: Skill, index: number) => (
                            <div key={index} className="skill-card">
                                <h3>{skill.title}</h3>
                                <p>{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

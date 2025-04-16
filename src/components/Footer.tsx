import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useLanguage } from '../hooks/useLanguage'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const { t } = useLanguage()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="social-links">
                        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    </div>
                    <p className="copyright">
                        {t('footer.copyright').replace('{year}', currentYear.toString())}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

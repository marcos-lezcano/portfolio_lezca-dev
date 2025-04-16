import { FaGlobe } from 'react-icons/fa'
import { useLanguage } from '../hooks/useLanguage'

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage()

    return (
        <button className="language-toggle" onClick={toggleLanguage} aria-label="Toggle language">
            <FaGlobe />
            <span>{language.toUpperCase()}</span>
        </button>
    )
}

export default LanguageToggle

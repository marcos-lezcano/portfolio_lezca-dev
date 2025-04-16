import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../hooks/useTheme'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    )
}

export default ThemeToggle

import { useState, useEffect } from 'react'
import { Language, translations, Translations } from '../i18n/translations'

export const useLanguage = () => {
    const [language, setLanguage] = useState<Language>(() => {
        const savedLanguage = localStorage.getItem('language')
        return (savedLanguage as Language) || 'es'
    })

    useEffect(() => {
        localStorage.setItem('language', language)
        document.documentElement.setAttribute('lang', language)
    }, [language])

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'es' ? 'en' : 'es'))
    }

    const t = (key: string): any => {
        const keys = key.split('.')
        let value: any = translations[language]

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k]
            } else {
                console.warn(`Translation key not found: ${key}`)
                return key
            }
        }

        return value
    }

    return { language, toggleLanguage, t }
}

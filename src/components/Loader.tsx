import '../styles/Loader.css'

const Loader = () => {
    return (
        <div className="loader">
            <div className="logo-wrapper">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" rx="10" fill="currentColor" />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="var(--navy)" fontSize="50">
                        M
                    </text>
                </svg>
            </div>
        </div>
    )
}

export default Loader

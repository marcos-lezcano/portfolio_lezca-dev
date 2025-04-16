import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThemeToggle from '../components/ThemeToggle'

const MainLayout = () => {
    return (
        <div className="app">
            <Navbar />
            <main className="container main-content">
                <Outlet />
            </main>
            <Footer />
            <ThemeToggle />
        </div>
    )
}

export default MainLayout

import { useState, FormEvent } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

interface FormData {
    name: string
    email: string
    subject: string
    message: string
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // Aquí iría la lógica para enviar el formulario
        console.log('Form data:', formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <h1>Contacto</h1>
                <p className="contact-intro">
                    ¿Tienes un proyecto en mente? ¿Quieres colaborar o simplemente charlar?
                    No dudes en contactarme. Estoy aquí para ayudarte.
                </p>
            </section>

            <div className="contact-container">
                <section className="contact-info">
                    <h2>Información de Contacto</h2>
                    <div className="info-items">
                        <div className="info-item">
                            <FaEnvelope />
                            <div>
                                <h3>Email</h3>
                                <p>tu.email@ejemplo.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaPhone />
                            <div>
                                <h3>Teléfono</h3>
                                <p>+1234567890</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaMapMarkerAlt />
                            <div>
                                <h3>Ubicación</h3>
                                <p>Ciudad, País</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-form">
                    <h2>Envíame un Mensaje</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Asunto</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                            />
                        </div>
                        <button type="submit" className="submit-button">
                            Enviar Mensaje
                        </button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Contact

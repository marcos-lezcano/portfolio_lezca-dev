import '../styles/Contact.css'

const Contact = () => {
    return (
        <section id="contact">
            <h2 className="numbered-heading">¿Qué sigue?</h2>

            <div className="contact-content">
                <h2 className="title">Ponte en Contacto</h2>
                <p>
                    Actualmente estoy buscando nuevas oportunidades, y mi bandeja de entrada está
                    siempre abierta. Si tienes alguna pregunta o simplemente quieres saludar, ¡haré
                    todo lo posible por responderte!
                </p>
                <a className="email-link" href="mailto:tu@email.com">
                    Envíame un mensaje
                </a>
            </div>
        </section>
    )
}

export default Contact

import './App.css'

const whatsappUrl =
  'https://wa.me/5492262598259?text=Hola%20Julieta%2C%20quiero%20consultar%20por%20un%20turno%20en%20Beauty%20Studio.'

const services = [
  { icon: 'scissors', title: 'Peluquería y cortes', text: 'Cortes femeninos, brushing y peinados para el día a día o eventos.' },
  { icon: 'palette', title: 'Color y rubios personalizados', text: 'Coloración, mechas y balayage con diagnóstico previo para cuidar la fibra capilar.' },
  { icon: 'droplet', title: 'Tratamientos y alisados', text: 'Opciones para nutrición, brillo y control del frizz según tu tipo de cabello.' },
  { icon: 'sparkles', title: 'Depilación definitiva', text: 'Servicio de estética para complementar tu rutina de cuidado personal.' },
  { icon: 'handSparkles', title: 'Manos y pies', text: 'Beauty integral para resolver tu look completo en una sola visita.' },
  { icon: 'eye', title: 'Pestañas y mirada', text: 'Servicios para realzar la mirada con acabado prolijo y natural.' },
]

const portfolioImages = [1, 2, 3, 4, 5, 6]

const faqs = [
  ['¿Cómo reservo un turno?', 'Podés escribir por WhatsApp o por mensaje directo en Instagram para coordinar día y horario.'],
  ['¿Atienden sin cita previa?', 'La atención es con cita previa para respetar tiempos y dar una experiencia personalizada.'],
  ['¿Puedo consultar antes de hacer color o balayage?', 'Sí. Se evalúa tu base, historial y objetivo para recomendar una propuesta segura para tu cabello.'],
  ['¿También trabajan alisados y tratamientos?', 'Sí, podés consultar por opciones de alisados y tratamientos capilares según tu mantenimiento.'],
  ['¿Dónde están ubicadas?', 'En Calle 57 3137 local 1, Necochea, Buenos Aires.'],
]

function ServiceIcon({ name }) {
  const icons = {
    scissors: <path d="M40.6 73.4c-6.9 0-12.6-5.7-12.6-12.6S33.7 48.2 40.6 48.2s12.6 5.7 12.6 12.6-5.7 12.6-12.6 12.6zm0-17.2a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm46.8 17.2c-6.9 0-12.6-5.7-12.6-12.6S80.5 48.2 87.4 48.2s12.6 5.7 12.6 12.6-5.7 12.6-12.6 12.6zm0-17.2a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zM36.2 52.5 30 46.3 63.5 34l6 6L36.2 52.5zm46.3 0L49.2 40l6-6 33.5 12.3-6.2 6.2z" />,
    palette: <path d="M64 24c-22.1 0-40 15.7-40 35.1 0 10.8 8.5 19.5 19.1 19.5h7.4c3 0 5.4 2.5 5.4 5.6v2.2c0 9.3 7.4 16.8 16.4 16.8 17.3 0 31.7-14.3 31.7-33.3C104 44 86.1 24 64 24zm-18 27.7a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm15-9.3a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm16.2 9.3a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm10.6 16.1a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />,
    sparkles: <path d="m58.8 26 6.4 15.5L80.8 48l-15.6 6.5L58.8 70l-6.4-15.5L36.8 48l15.6-6.5L58.8 26zm29.5 21.2 3.3 8.1 8.1 3.3-8.1 3.3-3.3 8.1-3.3-8.1-8.1-3.3 8.1-3.3 3.3-8.1zM34 58.8l4.6 11.2L49.8 74l-11.2 4.6L34 89.8l-4.6-11.2L18.2 74l11.2-4.6L34 58.8z" />,
    droplet: <path d="M64 24c9.2 12.3 24 27.5 24 41.2 0 13.2-10.7 23.8-24 23.8s-24-10.7-24-23.8C40 51.5 54.8 36.3 64 24zm0 54.5c7.4 0 13.3-5.9 13.3-13.3 0-2.2 1.8-4 4-4s4 1.8 4 4c0 11.8-9.6 21.3-21.3 21.3-2.2 0-4-1.8-4-4s1.8-4 4-4z" />,
    handSparkles: <path d="M30 56.5c0-2.8 2.2-5 5-5s5 2.2 5 5v11h2V44.8c0-2.8 2.2-5 5-5s5 2.2 5 5v16h2v-14c0-2.8 2.2-5 5-5s5 2.2 5 5v14h2v-10c0-2.8 2.2-5 5-5s5 2.2 5 5V72c0 14.4-11.6 26-26 26-10.6 0-20.1-6.5-24-16.5L30 68.6V56.5zm54.2-26.3 2.6 6.4 6.4 2.6-6.4 2.6-2.6 6.4-2.6-6.4-6.4-2.6 6.4-2.6 2.6-6.4z" />,
    eye: <path d="M64 35c22.7 0 35.8 19 39.3 24.8.9 1.5.9 3.4 0 4.9C99.8 70.5 86.7 89.5 64 89.5S28.2 70.5 24.7 64.7a4.6 4.6 0 0 1 0-4.9C28.2 54 41.3 35 64 35zm0 42.5c11.3 0 20.5-9.2 20.5-20.5S75.3 36.5 64 36.5 43.5 45.7 43.5 57 52.7 77.5 64 77.5zm0-32.5A12 12 0 1 1 64 69a12 12 0 0 1 0-24z" />,
  }

  return <svg className="service-icon" viewBox="0 0 128 128" aria-hidden="true" focusable="false">{icons[name]}</svg>
}

function App() {
  return (
    <>
      <header className="topbar">
        <a href="#inicio" className="brand">
          <span>Julieta Vega Estilista</span>
        </a>
        <nav>
          <a href="#servicios">Servicios</a>
          <a href="#color">Color</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="btn btn-small" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar turno</a>
      </header>

      <main id="inicio">
        <section className="hero">
          <div>
            <p className="eyebrow">Beauty Studio en Necochea</p>
            <h1>Julieta Vega Estilista &amp; Beauty Studio</h1>
            <p className="lead">Peluquería, color y centro de estética con foco en rubios personalizados, balayage y cuidado capilar para clientas de Necochea y Quequén.</p>
            <div className="actions">
              <a className="btn" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
              <a className="btn btn-ghost" href="https://www.instagram.com/julietavegaestilista/" target="_blank" rel="noreferrer">Ver Instagram</a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Información destacada">
            <img src="/walterdif20.github.io/beautystudio/logo-julieta-vega.png" alt="Logo Julieta Vega Estilista" className="img-logo" />
            <p><strong>Cita previa</strong><span>Atención por WhatsApp o MD.</span></p>
            <p><strong>Ubicación</strong><span>Calle 57 3137 local 1, Necochea.</span></p>
          </aside>
        </section>

        <section className="trust">
          <p>Colorista en Necochea</p><p>Balayage y mechas personalizadas</p><p>Peluquería + estética integral</p><p>Redes con trabajos reales</p>
        </section>

        <section id="servicios" className="section">
          <h2>Servicios principales</h2>
          <div className="cards">{services.map((s) => <article key={s.title}><ServiceIcon name={s.icon} /><h3>{s.title}</h3><p>{s.text}</p></article>)}</div>
        </section>

        <section id="color" className="editorial section">
          <div>
            <p className="eyebrow">Especialidad en transformaciones</p>
            <h2>Rubios personalizados, mechas y balayage en Necochea</h2>
            <p>Si buscás un cambio de look o mantener tu color, podés coordinar una consulta previa para definir técnica, tiempos y cuidados en casa.</p>
          </div>
          <div className="visual" aria-hidden="true"><span /><span /><span /></div>
        </section>

        <section className="section process">
          <h2>Cómo reservar tu turno</h2>
          <ol>
            <li><strong>1.</strong> Elegí el servicio que querés realizar.</li>
            <li><strong>2.</strong> Escribí por WhatsApp y contá qué necesitás.</li>
            <li><strong>3.</strong> Coordiná día, horario y preparación previa.</li>
            <li><strong>4.</strong> Visitá el salón en Calle 57, Necochea.</li>
          </ol>
        </section>

        <section className="section gallery">
          <h2>Portfolio de trabajos</h2>
          <p>Sumá tus fotos reales de coloración, peinados, pestañas, manos y pies en esta galería.</p>
          <div className="placeholders">{portfolioImages.map((n) => <img key={n} src={`/portfolio/imagen${n}.jpg`} alt={`Trabajo de belleza ${n} de Julieta Vega Estilista`} loading="lazy" />)}</div>
        </section>

        <section className="section faq">
          <h2>Preguntas frecuentes</h2>
          {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </section>
      </main>

      <footer id="contacto" className="footer">
        <div className="footer-top">
          <p className="footer-kicker">Beauty Studio · Necochea</p>
          <h2>Reservá tu turno en Julieta Vega Beauty Studio</h2>
          <p className="footer-lead">Atención personalizada en peluquería, color y estética integral para realzar tu estilo con resultados naturales.</p>
        </div>

        <div className="footer-grid">
          <div>
            <h3>Contacto</h3>
            <p>WhatsApp: <a href={whatsappUrl} target="_blank" rel="noreferrer">+54 2262 59-8259</a></p>
            <p>Teléfono: 2262598259</p>
          </div>
          <div>
            <h3>Dirección</h3>
            <p>Calle 57 3137 local 1</p>
            <p>Necochea, Buenos Aires</p>
          </div>
          <div>
            <h3>Redes</h3>
            <p><a href="https://www.instagram.com/julietavegaestilista/" target="_blank" rel="noreferrer">Instagram</a></p>
            <p><a href="https://www.facebook.com/julietavegaestilista/" target="_blank" rel="noreferrer">Facebook</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Horarios y disponibilidad: a confirmar por WhatsApp.</p>
          <a className="btn" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar ahora</a>
        </div>
      </footer>

      <a className="sticky-wa" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar por WhatsApp</a>
    </>
  )
}

export default App

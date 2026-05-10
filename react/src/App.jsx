import './App.css'

const whatsappUrl =
  'https://wa.me/5492262598259?text=Hola%20Julieta%2C%20quiero%20consultar%20por%20un%20turno%20en%20Beauty%20Studio.'

const services = [
  { title: 'Peluquería y cortes', text: 'Cortes femeninos, brushing y peinados para todos los días o eventos.' },
  { title: 'Color y rubios personalizados', text: 'Coloración, mechas y balayage con diagnóstico previo para cuidar tu cabello.' },
  { title: 'Tratamientos y alisados', text: 'Opciones para nutrición capilar, brillo y control del frizz según tu tipo de pelo.' },
  { title: 'Depilación definitiva', text: 'Servicio de estética para complementar tu rutina de cuidado personal.' },
  { title: 'Manos y pies', text: 'Beauty integral para resolver tu look completo en una sola visita.' },
  { title: 'Pestañas y mirada', text: 'Servicios para realzar la mirada con acabado prolijo y natural.' },
]

const faqs = [
  ['¿Cómo reservo un turno?', 'Podés escribir por WhatsApp o por mensaje directo en Instagram para coordinar día y horario.'],
  ['¿Atienden sin cita previa?', 'La atención es con cita previa para respetar tiempos de cada servicio y darte una experiencia personalizada.'],
  ['¿Puedo consultar antes de hacer color o balayage?', 'Sí. Se evalúa tu base, historial y objetivo para recomendar una propuesta de color segura para tu cabello.'],
  ['¿También trabajan alisados y tratamientos?', 'Sí, podés consultar por opciones de alisados y tratamientos capilares según lo que necesitás mantener.'],
  ['¿Dónde están ubicadas?', 'En Calle 57 3137 local 1, Necochea, Buenos Aires.'],
]

function App() {
  return (
    <>
      <header className="topbar">
        <a href="#inicio" className="brand">Julieta Vega Estilista</a>
        <nav>
          <a href="#servicios">Servicios</a>
          <a href="#color">Color</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="btn btn-small" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar turno</a>
      </header>

      <main id="inicio">
        <section className="hero">
          <p className="eyebrow">Beauty Studio en Necochea</p>
          <h1>Julieta Vega Estilista &amp; Beauty Studio</h1>
          <p className="lead">Peluquería, color y centro de estética en Necochea con foco en rubios personalizados, balayage, cuidado capilar y servicios integrales de belleza.</p>
          <div className="actions">
            <a className="btn" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
            <a className="btn btn-ghost" href="https://www.instagram.com/julietavegaestilista/" target="_blank" rel="noreferrer">Ver Instagram</a>
          </div>
        </section>

        <section className="trust">
          <p>Cita previa por WhatsApp o MD</p><p>Calle 57 3137 local 1, Necochea</p><p>Beauty studio integral</p><p>Ágora: 4.9 (57 reseñas)</p>
        </section>

        <section id="servicios" className="section">
          <h2>Servicios principales</h2>
          <div className="cards">{services.map((s) => <article key={s.title}><h3>{s.title}</h3><p>{s.text}</p></article>)}</div>
        </section>

        <section id="color" className="editorial section">
          <div>
            <p className="eyebrow">Especialidad en transformaciones</p>
            <h2>Color, mechas y rubios personalizados en Necochea</h2>
            <p>Si buscás un cambio de look, una corrección de color o mantener tu rubio, podés coordinar una consulta previa para definir técnica, mantenimiento y cuidado del cabello.</p>
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
          <h2>Portfolio en construcción visual</h2>
          <p>Este espacio está preparado para sumar fotos reales de trabajos de color, balayage, peinados y estética.</p>
          <div className="placeholders"><div /><div /><div /></div>
        </section>

        <section className="section faq">
          <h2>Preguntas frecuentes</h2>
          {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </section>
      </main>

      <footer id="contacto" className="footer">
        <h2>Reservá tu turno en Julieta Vega Beauty Studio</h2>
        <p>WhatsApp: <a href={whatsappUrl} target="_blank" rel="noreferrer">+54 2262 59-8259</a> · Tel: 2262598259</p>
        <p>Calle 57 3137 local 1, Necochea, Buenos Aires · Horarios: a confirmar por WhatsApp</p>
        <p><a href="https://www.instagram.com/julietavegaestilista/" target="_blank" rel="noreferrer">Instagram</a> · <a href="https://www.facebook.com/julietavegaestilista/" target="_blank" rel="noreferrer">Facebook</a></p>
        <a className="btn" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar ahora</a>
      </footer>

      <a className="sticky-wa" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar por WhatsApp</a>
    </>
  )
}

export default App

import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Linko 4</span>
          </div>
          <nav className="nav">
            <a href="#soluciones">Soluciones</a>
            <a href="#casos">Casos de éxito</a>
            <a href="#industrias">Industrias</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <button className="cta-button">Contáctanos</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transformando negocios con tecnología inteligente</h1>
          <p>Soluciones innovadoras que aceleran tu transformación digital y generan valor real en tu organización</p>
          <button className="hero-button">Comenzar ahora</button>
        </div>
        <div className="hero-visual">
          <div className="gradient-blob blob-1"></div>
          <div className="gradient-blob blob-2"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Proyectos exitosos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Profesionales certificados</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Clientes activos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Años de experiencia</div>
          </div>
        </div>
      </section>

      {/* Soluciones */}
      <section id="soluciones" className="soluciones">
        <h2>Nuestras Soluciones</h2>
        <p className="section-subtitle">Ofrecemos el camino a mejores experiencias digitales</p>
        <div className="soluciones-grid">
          <div className="solucion-card">
            <div className="solucion-icon">🔒</div>
            <h3>Ciberseguridad</h3>
            <p>Protege tus activos digitales con soluciones de seguridad de clase mundial</p>
          </div>
          <div className="solucion-card">
            <div className="solucion-icon">🔗</div>
            <h3>Integración</h3>
            <p>Conecta tus sistemas y procesos con integraciones robustas y escalables</p>
          </div>
          <div className="solucion-card">
            <div className="solucion-icon">☁️</div>
            <h3>Data & Cloud</h3>
            <p>Aprovecha la nube y los datos para tomar decisiones más inteligentes</p>
          </div>
          <div className="solucion-card">
            <div className="solucion-icon">⚡</div>
            <h3>Transformación Digital</h3>
            <p>Moderniza tu negocio con tecnologías disruptivas y procesos innovadores</p>
          </div>
          <div className="solucion-card">
            <div className="solucion-icon">🤖</div>
            <h3>Inteligencia Artificial</h3>
            <p>Automiza procesos y genera insights con IA y machine learning avanzado</p>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section id="casos" className="casos">
        <h2>Casos de Éxito</h2>
        <p className="section-subtitle">Transformaciones reales que generan impacto</p>
        <div className="casos-grid">
          <div className="caso-card">
            <div className="caso-badge">RPA</div>
            <h3>Auditoría - Automatización</h3>
            <ul>
              <li>✓ 40% reducción de trabajo manual</li>
              <li>✓ 35% aumento en productividad</li>
              <li>✓ 3X más rápido procesamiento</li>
            </ul>
            <a href="#" className="caso-link">Ver caso de estudio →</a>
          </div>
          <div className="caso-card">
            <div className="caso-badge">Seguridad</div>
            <h3>Grupo Empresarial - Ciberseguridad</h3>
            <ul>
              <li>✓ 6 semanas despliegue exitoso</li>
              <li>✓ 2 sistemas heredados migrados</li>
              <li>✓ 10% ahorro en costos operativos</li>
            </ul>
            <a href="#" className="caso-link">Ver caso de estudio →</a>
          </div>
          <div className="caso-card">
            <div className="caso-badge">Cloud</div>
            <h3>Banco - Datos & Nube</h3>
            <ul>
              <li>✓ 6 meses creación de data lake</li>
              <li>✓ 2X más rápido nuevas ofertas</li>
              <li>✓ +25% aumento en préstamos</li>
            </ul>
            <a href="#" className="caso-link">Ver caso de estudio →</a>
          </div>
        </div>
      </section>

      {/* Industrias */}
      <section id="industrias" className="industrias">
        <h2>Transformando Industrias</h2>
        <p className="section-subtitle">Soluciones especializadas para cada sector</p>
        <div className="industrias-grid">
          <div className="industria-card">
            <div className="industria-icon">🏢</div>
            <h3>Seguros</h3>
            <p>Automatiza procesos para que tu equipo dedique más tiempo a la atención del cliente</p>
          </div>
          <div className="industria-card">
            <div className="industria-icon">🛒</div>
            <h3>Retail</h3>
            <p>Libera tiempo para la innovación con implementaciones más rápidas y efectivas</p>
          </div>
          <div className="industria-card">
            <div className="industria-icon">🚚</div>
            <h3>Logística y Transporte</h3>
            <p>Optimiza recursos, procesos y rutas para mejor experiencia del cliente</p>
          </div>
          <div className="industria-card">
            <div className="industria-icon">💰</div>
            <h3>Servicios Financieros</h3>
            <p>Entrega ofertas personalizadas basadas en inteligencia de datos e IA</p>
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="tecnologias">
        <h2>Socios Tecnológicos Estratégicos</h2>
        <p className="section-subtitle">Trabajamos con las mejores plataformas del mercado</p>
        <div className="tech-grid">
          <div className="tech-item">
            <span>☁️ Google Cloud</span>
          </div>
          <div className="tech-item">
            <span>📊 Salesforce</span>
          </div>
          <div className="tech-item">
            <span>🔄 MuleSoft</span>
          </div>
          <div className="tech-item">
            <span>⚙️ UiPath</span>
          </div>
          <div className="tech-item">
            <span>📈 Tableau</span>
          </div>
          <div className="tech-item">
            <span>🛡️ Thales</span>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="cta-final">
        <h2>¿Listo para transformar tu negocio?</h2>
        <p>Nuestro equipo de expertos está listo para ayudarte a acelerar tu transformación digital</p>
        <button className="cta-button large">Solicitar Consultoría</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Innovatech</h4>
            <p>Soluciones tecnológicas simplificadas para empresas en transformación</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#soluciones">Soluciones</a></li>
              <li><a href="#casos">Casos de éxito</a></li>
              <li><a href="#industrias">Industrias</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Síguenos</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Innovatech. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

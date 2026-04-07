import "./App.css";

export default function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      <div className="background-shape shape-one"></div>
      <div className="background-shape shape-two"></div>
      <div className="background-shape shape-three"></div>

      <div className="container">
        <section className="hero">
          <div className="hero-text fade-up">
            <span className="tag">Portfólio • Frontend Developer</span>
            <h1>
              Hanielly <span>Marques</span>
            </h1>
            <p>
              Desenvolvedora Frontend focada em criar interfaces bonitas,
              funcionais e soluções reais com React e Node.js.
            </p>

            <div className="hero-buttons">
              <button onClick={() => scrollToSection("projects")}>
                Ver projetos
              </button>

              <button onClick={() => scrollToSection("contact")}>
                Entrar em contato
              </button>

              <a
                href="mailto:haniellymarques66@gmail.com"
                className="secondary-btn"
              >
                Enviar e-mail
              </a>
            </div>
          </div>

          <div className="hero-card fade-up delay-1">
            <div className="mini-card">
              <p className="mini-title">Projeto em destaque</p>
              <h3>IndexIA</h3>
              <p>
                Chatbot para biblioteca acadêmica com frontend, backend, banco
                de dados e integração com IA.
              </p>
            </div>
          </div>
        </section>

        <section className="about fade-up delay-2">
          <h2>Sobre mim</h2>
          <p>
            Sou desenvolvedora focada em frontend, com experiência na construção
            de sistemas completos. Atualmente desenvolvo soluções reais, como o
            chatbot IndexIA para bibliotecas acadêmicas, buscando unir design,
            organização e boa experiência do usuário.
          </p>
        </section>

        <section className="projects fade-up delay-3" id="projects">
          <h2>Projetos</h2>

          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-badge">Destaque</div>
              <h3>IndexIA – Chatbot para Biblioteca</h3>
              <p>
                Sistema de atendimento automatizado para biblioteca
                universitária, com integração entre frontend, backend, banco de
                dados e IA.
              </p>
              <span>React • Node • PostgreSQL • IA</span>
            </div>

            <div className="project-card">
              <h3>Sorteador Aleatório</h3>
              <p>
                Aplicação simples para sorteio de nomes com interface intuitiva,
                foco em organização visual e boa usabilidade.
              </p>
              <span>React • JavaScript • CSS</span>
            </div>

            <div className="project-card">
              <h3>Controle de Uso de Computadores</h3>
              <p>
                Sistema para monitorar uso de computadores com registro de
                alunos e visualização de dados em tempo real.
              </p>
              <span>React • Node • Dashboard</span>
            </div>
          </div>
        </section>

        <section className="skills fade-up delay-4">
          <h2>Tecnologias</h2>
          <div className="skills-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>PostgreSQL</span>
            <span>Git</span>
          </div>
        </section>

        <section className="contact fade-up delay-5" id="contact">
          <h2>Contato</h2>
          <div className="contact-box">
            <p>
              <strong>Email:</strong> haniellymarques66@gmail.com
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/hanielly-marques-dev"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/hanielly-marques-dev
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
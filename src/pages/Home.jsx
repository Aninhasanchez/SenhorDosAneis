export default function Home() {
    return (
      <div className="content">
        <h1>O Senhor dos Anéis: A Sociedade do Anel</h1>
        <p>
          A Sociedade do Anel é o primeiro volume da épica trilogia de J.R.R. Tolkien.
          Acompanhe Frodo Bolseiro em sua jornada para destruir o Um Anel e salvar a Terra Média.
        </p>
        <div className="propaganda">
          <strong>Uma aventura inesquecível começa aqui.</strong>
          <br />
          <a
            href="public/livro.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-link" 
          >
            📖 Clique aqui para ler o livro em PDF
          </a>
        </div>
      </div>
    );
  }
  
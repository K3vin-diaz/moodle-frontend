import '../styles/HomePage.css';


const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="menu">Menu</div>
        <h1 className="title">INSTITUTO TECNOLOGICO DE SONORA</h1>
        <div className="profile">
          <img src="profile-pic-url" alt="profile" className="profile-pic" />
          <button className="logout">Log out</button>
        </div>
      </header>
      <aside className="sidebar">
        <nav className="top-nav">
          <ul>
            <li>Inicio</li>
            <li>Calendario</li>
            <li>Cursos</li>
            <li>Revisar</li>
            <li>Crear Recurso</li>
          </ul>
        </nav>
        <nav className="bottom-nav">
          <ul>
            <li>Cursos Archivados</li>
            <li>Ajustes</li>
          </ul>
        </nav>
      </aside>
      <main className="main">
        <div className="courses">
          <div className="course">CURSOS</div>
          <div className="course">CURSOS</div>
          <div className="course">CURSOS</div>
          <div className="course">CURSOS</div>
          <div className="course">CURSOS</div>
          <div className="course">CURSOS</div>
        </div>
      </main>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
}

export default App;

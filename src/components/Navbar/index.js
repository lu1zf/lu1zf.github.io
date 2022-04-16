import './styles.css';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="logo">
        <a href="#">
          <span class="tag">
            &lt;
          </span>
          <div id="name">
            Luiz Silva
          </div>
          <span class="tag">
            / &gt;
          </span>
        </a>
      </div>
      <ul>
        <li><a href="#welcome-section">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
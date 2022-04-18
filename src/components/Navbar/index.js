import './styles.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (event) => {
    setIsMenuOpen(!isMenuOpen);
    toggleViewLinks();
  };

  const toggleViewLinks = () => {
    const links = document.getElementById('links');

    if (isMenuOpen) {
      links.style.top = '-100vh';
    } else {
      links.style.top = '0';
    }
  }

  const US = getUnicodeFlagIcon('US');

  return (
    <nav id="navbar">
      <div id="logo">
        <a href="#">
          <span className="tag">
            &lt;
          </span>
          <div id="name">
            Luiz Silva
          </div>
          <span className="tag">
            / &gt;
          </span>
        </a>
      </div>
      <ul id="links">
        <li><a href="#welcome-section" onClick={toggleMenu}>Sobre</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projetos</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
        <li><a href="#">English version {US}</a></li>
      </ul>
      <div id="hamburguer-menu" onClick={toggleMenu}>
        {isMenuOpen && <CloseIcon sx={{ fontSize: 32 }} />}
        {!isMenuOpen && <MenuIcon sx={{ fontSize: 32 }} />}
      </div>
    </nav>
  );
}

export default Navbar;
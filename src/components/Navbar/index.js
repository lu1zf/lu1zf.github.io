import './styles.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { HashLink } from 'react-router-hash-link';


const Navbar = ({ data, lang }) => {
  const { about, contact, projects } = data;
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
  const BR = getUnicodeFlagIcon('BR');

  return (
    <nav id="navbar">
      <div id="logo">
        <HashLink to={lang == 'pt-br' ? '#welcome-section' : '/en/#welcome-section'}>
          <span className="tag">
            &lt;
          </span>
          <div id="name">
            Luiz Silva
          </div>
          <span className="tag">
            / &gt;
          </span>
        </HashLink>
      </div>
      <ul id="links">
        {(lang === 'pt-br') && (
          <>
            <li><HashLink to='#welcome-section' onClick={toggleMenu}>{about}</HashLink></li>
            <li><HashLink to='#projects' onClick={toggleMenu}>{projects}</HashLink></li>
            <li><HashLink to="#contact" onClick={toggleMenu}>{contact}</HashLink></li>
            <li><HashLink to="/en" onClick={toggleMenu}>English version {US}</HashLink></li>
          </>
        )}
        {(lang === 'en-us') && (
          <>
            <li><HashLink to='/en/#welcome-section' onClick={toggleMenu}>{about}</HashLink></li>
            <li><HashLink to='/en/#projects' onClick={toggleMenu}>{projects}</HashLink></li>
            <li><HashLink to="/en/#contact" onClick={toggleMenu}>{contact}</HashLink></li>
            <li><HashLink to="/" onClick={toggleMenu}>Versão em português {BR}</HashLink></li>
          </>
        )}


      </ul>
      <div id="hamburguer-menu" onClick={toggleMenu}>
        {isMenuOpen && <CloseIcon sx={{ fontSize: 32 }} />}
        {!isMenuOpen && <MenuIcon sx={{ fontSize: 32 }} />}
      </div>
    </nav>
  );
}

export default Navbar;
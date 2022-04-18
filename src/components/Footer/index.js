import './styles.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      © <span id="currentYear">{currentYear}</span> - <a className="footer-link" href="#welcome-section">Luiz Silva</a>
    </footer>
  );
}

export default Footer;
import './styles.css';
import githubImg from '../../assets/github.svg';
import linkedinImg from '../../assets/linkedin.svg';
import telegramImg from '../../assets/telegram.svg';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <h2>Contato</h2>
        <p>Me acompanhe nas redes sociais ou envie uma mensagem.</p>
        <div className="links-container">
          <a id="profile-link" href="https://www.linkedin.com/in/lu1zf/" target="_blank">
            <img src={linkedinImg} alt="linkedin" />
          </a>
          <a id="profile-link" href="https://www.github.com/lu1zf" target="_blank">
            <img src={githubImg} alt="github" />
          </a>
          <a id="profile-link" href="https://t.me/lu1zs" target="_blank">
            <img src={telegramImg} alt="telegram" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
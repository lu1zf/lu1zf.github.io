import './styles.css';
import welcomeImg from '../../assets/developer.svg';

const Welcome = () => {
  return (
    <section id="welcome-section">
      <div className="section-container">
        <div className="left">
          <h1>Olá, sou Luiz Silva</h1>
          <div className="subtext">Desenvolvedor Fullstack</div>
          <p>
            Potiguar, trabalho como desenvolvedor desde 2020. Atualmente
            atuo como dev fullstack na <a href="http://negocioonlinedozero.com" target="_blank">NODZ</a>.
          </p>
        </div>
        <div className="right">
          <img src={welcomeImg} alt="Desenvolvedor" />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
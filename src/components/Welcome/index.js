import './styles.css';
import welcomeImg from '../../assets/developer.svg';

const Welcome = ({ data }) => {
  const { h1, subtext, description } = data;

  return (
    <section id="welcome-section">
      <div className="section-container">
        <div className="left">
          <h1>{h1}</h1>
          <div className="subtext">{subtext}</div>
          <p>
            {description} <a href="http://negocioonlinedozero.com" target="_blank">NODZ</a>.
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
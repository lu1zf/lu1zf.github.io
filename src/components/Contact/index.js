import './styles.css';
import githubImg from '../../assets/github.svg';
import linkedinImg from '../../assets/linkedin.svg';
import telegramImg from '../../assets/telegram.svg';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Contact = ({ data }) => {
  const { h2, description } = data;
  return (
    <section id="contact">
      <div className="section-container">
        <h2><AssignmentIndIcon /> {h2}</h2>
        <p>{description}</p>
        <div className="links-container">
          <a id="profile-link" href="https://www.linkedin.com/in/lu1zf/" target="_blank" rel="noreferrer" >
            <img src={linkedinImg} alt="linkedin" />
          </a>
          <a id="profile-link" href="https://www.github.com/lu1zf" target="_blank" rel="noreferrer">
            <img src={githubImg} alt="github" />
          </a>
          <a id="profile-link" href="https://t.me/lu1zs" target="_blank" rel="noreferrer">
            <img src={telegramImg} alt="telegram" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
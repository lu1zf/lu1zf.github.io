import './styles.css';
import tubetoolsImg from '../../assets/tubetools.png';
import mutuoImg from '../../assets/mutuo_associados.png';
import pipehubyImg from '../../assets/pipehuby.png';
import proffyImg from '../../assets/proffy.png';
import gitfinderImg from '../../assets/gitfinder.png';
import currencyConvertImg from '../../assets/currency-convert.png';

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <h2>Projetos</h2>
        <h3>Profissionais</h3>
        <p>Desenvolvidos para empresas</p>
        <div className="projects-container">
          <div className="project-tile" id="super-thumbnails">
            <div className="project-data">
              <div className="project-title">
                Super Thumbnails
              </div>
              <p className="project-description">
                Ferramenta de construção de thumbnails para vídeos do youtube. Através dela, usuários podem criar
                thumbnails para seus vídeos e fazer upload diretamente para o seu canal do youtube.
              </p>
              <div className="project-techs">
                Tecnologias e ferramentas: Codeigniter 4, MySQL, Fabric.js, Youtube API, Javascript, AJAX, git.
              </div>
              <div className="project-source">
                <a className="project-link" href="https://app.tubetools.com" target="_blank">Link para a plataforma</a>
              </div>
            </div>
            <div className="project-image">
              <img src={tubetoolsImg} alt="super thumbnails" id="image-super-thumbnails" />
            </div>
          </div>
          <div className="project-tile" id="grupo-mutuo">
            <div className="project-image">
              <img src={mutuoImg} alt="Mutuo associados" id="image-grupo-mutuo" />
            </div>
            <div className="project-data">
              <div className="project-title">
                Grupo mútuo
              </div>
              <div className="project-description">
                Site institucional da associação de proteção veicular Grupo Mútuo, de Natal/RN. Desenvolvido durante o meu
                período de estágio na Hubytech Soluções em Tecnologia LTDA.
              </div>
              <div className="project-techs">
                Tecnologias e ferramentas: Figma, HTML5, CSS3, javascript, git.
              </div>
              <a className="project-link" href="https://grupomutuo.com.br/" target="_blank">Link para o site</a>
            </div>
          </div>
          <div className="project-tile" id="third">
            <div className="project-data">
              <div className="project-title">
                Pipehuby
              </div>
              <div className="project-description">
                Sistema de gerenciamento de relacionamento com o cliente,
                que possibilitava gerir leads e clientes durante todo o processo de venda do produto da empresa.
              </div>
              <div className="project-techs">
                Tecnologias e ferramentas: Figma, HTML5, CSS3, javascript, AJAX, PHP, MySQL, git.
              </div>
              <a className="project-link" href="https://app.pipehuby.com/" target="_blank">Link para a plataforma</a>
            </div>
            <div className="project-image">
              <img src={pipehubyImg} alt="super thumbnails" id="image-third" />
            </div>
          </div>
        </div>
        <h3>Pessoais</h3>
        <p>Desenvolvidos para estudos</p>
        <div className="projects-container">
          <div className="project-tile" id="gitfinder">
            <div className="project-data">
              <div className="project-title">
                gitFinder
              </div>
              <div className="project-description">
                Um buscador que recebe o nome de usuário do git e retorna todos os
                repositórios públicos daquele usuário.
              </div>
              <div className="project-techs">
                Tecnologias e ferramentas: HTML5, CSS3, javascript, axios, git.
              </div>
              <a className="project-link" href="https://www.github.com/lu1zf/gitfinder" target="_blank">Link</a>
            </div>
            <div className="project-image">
              <img src={gitfinderImg} alt="gitfinder" id="image-gitfinder" />
            </div>
          </div>
          <div className="project-tile" id="currency-convert">
            <div className="project-image">
              <img src={currencyConvertImg} alt="Currency Convert" id="image-currency-convert" />
            </div>
            <div className="project-data">
              <div className="project-title">
                Currency Convert
              </div>
              <div className="project-description">
                Converte valores monetários de dólar para real.
              </div>
              <div className="project-techs">
                Tecnologias e ferramentas: HTML5, CSS3, javascript, Node.js, EJS, git.
              </div>
              <a className="project-link" href="https://www.github.com/lu1zf/currencyconvert" target="_blank">Link do
                projeto</a>
            </div>
          </div>
          <div className="project-tile" id="proffy">
            <div className="project-data">
              <div className="project-title">
                Proffy
              </div>
              <div className="project-description">
                Desenvolvido durante o evento Next Level Week, da RocketSeat. O sistema conecta professores e alunos que
                se interessam em dar ou receber aulas particulares.
              </div>
              <div className="project-techs">
                Tecnologias e ferramentas: HTML5, CSS3, javascript, Node.js, SQLite, git.
              </div>
              <a className="project-link" href="https://www.github.com/lu1zf/proffy" target="_blank">Link do projeto</a>
            </div>
            <div className="project-image">
              <img src={proffyImg} alt="super thumbnails" id="image-proffy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
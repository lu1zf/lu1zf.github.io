import './styles.css';

const Projects = ({ data }) => {
  const { h2, professionals, personals } = data;

  return (
    <section id="projects">
      <div className="section-container">
        <h2>{h2}</h2>
        <h3>{professionals.title}</h3>
        <p>{professionals.description}</p>
        <div className="projects-container">
          {professionals.data.map(project =>
          (<div className="project-tile" key={project.id}>
            <div className="project-data">
              <div className="project-title">
                {project.title}
              </div>
              <p className="project-description">
                {project.description}
              </p>
              <div className="project-techs">
                {project.techs}
              </div>
              <div className="project-source">
                <a className="project-link" href={project.source.link} target="_blank">{project.source.text}</a>
              </div>
            </div>
            <div className="project-image">
              <img src={project.image} alt="super thumbnails" id="image-super-thumbnails" />
            </div>
          </div>)
          )}
        </div>
        <h3>{personals.title}</h3>
        <p>{personals.description}</p>
        <div className="projects-container">
          {personals.data.map(project => (<div className="project-tile" key={project.id}>
            <div className="project-data">
              <div className="project-title">
                {project.title}
              </div>
              <p className="project-description">
                {project.description}
              </p>
              <div className="project-techs">
                {project.techs}
              </div>
              <div className="project-source">
                <a className="project-link" href={project.source.link} target="_blank">{project.source.text}</a>
              </div>
            </div>
            <div className="project-image">
              <img src={project.image} alt="super thumbnails" id="image-super-thumbnails" />
            </div>
          </div>))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
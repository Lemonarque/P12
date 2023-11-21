import { NavLink } from 'react-router-dom'
import Projects from '../../data/projects.json'
import '../../sass/components/_projectgrid.scss'

const ProjectsGrid = () => {
  return (
    <div className="project">
      {Projects &&
        Projects.map((project) => (
          <NavLink key={project.id} to={`/project/${project.id}`}>
            <figure className="project__card" key={project.id}>
              <div className="project__card-inner">
                <div className="project__card-front">
                  <img
                    className="project__card-front-img"
                    src={project.cover}
                    alt={project.alt}
                  />
                  <h3 className="project__card-front-title">{project.title}</h3>
                </div>
                <figcaption className="project__card-back">
                  <h3 className="project__card-back-title">{project.title}</h3>
                  <p className="project__card-back-desc">
                    {project.briefDescription}
                  </p>
                  <p className="project__card-back-info">En savoir plus...</p>
                </figcaption>
              </div>
            </figure>
          </NavLink>
        ))}
    </div>
  )
}

export default ProjectsGrid

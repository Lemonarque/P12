import { Link } from 'react-router-dom'
import Projects from '../../data/projects.json'
import '../../sass/components/_projectgrid.scss'

const ProjectsGrid = () => {
  // Gère le problème de la position en milieu de page de la page Home vers la page du projet
  const handleClick = () => {
    // Remonter vers le haut avant la navigation
    window.scrollTo(0, 0)
  }
  return (
    <div className="grid__project">
      {Projects &&
        Projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            onClick={handleClick}
          >
            <figure className="grid__project__card" key={project.id}>
              <div className="grid__project__card-inner">
                <div className="grid__project__card-front">
                  <img
                    className="grid__project__card-front-img"
                    src={project.cover}
                    alt={project.alt}
                  />
                  <h3 className="grid__project__card-front-title">
                    {project.title}
                  </h3>
                </div>
                <figcaption className="grid__project__card-back">
                  <h3 className="grid__project__card-back-title">
                    {project.title}
                  </h3>
                  <p className="grid__project__card-back-desc">
                    {project.briefDescription}
                  </p>
                  <p className="grid__project__card-back-info">
                    En savoir plus...
                  </p>
                </figcaption>
              </div>
            </figure>
          </Link>
        ))}
    </div>
  )
}

export default ProjectsGrid

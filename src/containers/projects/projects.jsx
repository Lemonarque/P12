import ProjectsGrid from '../../components/project/projectgrid'
import '../../sass/containers/_projects.scss'

const Projects = () => {
  return (
    <section className="projects">
      <h2 id="projets" className="projects__title">
        Mes projets
      </h2>
      <ProjectsGrid />
    </section>
  )
}

export default Projects

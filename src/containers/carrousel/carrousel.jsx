import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Projects from '../../data/projects.json';

const Carrousel = () => {
    const { id } = useParams()
    const project = Projects.find((project) => project.id === id)

    return (
        <div>
            <Carousel
                key={project.id}
                ariaLabel="carrousel"
                autoPlay
                infiniteLoop
                interval={2000}
                showArrows={false}   
                showIndicators={false}           
                showStatus={false}
                thumbWidth={80}
            >
                {project.pictures.map((image, index) => (
                    <img key={index} src={image} alt="Vues du site internet du projet"/>
                ))}
            </Carousel>
        </div>
    )
}

export default Carrousel


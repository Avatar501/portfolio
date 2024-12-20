import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import Slider from "react-slick";

const ProjectCard = ({ project }) => (
    <div className="project-card">
        <Slider>
            {project.images.map((img, index) => (
                <img key={index} src={img} alt={`${project.name} screenshot ${index + 1}`} />
            ))}
        </Slider>
        <h3>{project.name}</h3>
        <p className="description">{project.description}</p>
        <div className="links">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
    </div>
);

ProjectCard.propTypes = {
    project: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of image URLs (strings)
        name: PropTypes.string.isRequired,
        liveLink: PropTypes.string.isRequired,
        repoLink: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

ProjectCard.defaultProps = {
    project: {
        images: [],
        name: 'Untitled Project',
        description: 'No description available.',
        liveLink: '#',
        repoLink: '#',
        tags: [],
    },
};

export default ProjectCard;

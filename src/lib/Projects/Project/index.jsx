import "./styles/Project.css"

const Project = ({projectConfig}) => {
    return (
        <div className="Project-container">
            <div className="Project">
                <h1 className="Project-title">{projectConfig.title}</h1>
                <p className="Description"><projectConfig.description/></p>
                <a className="Link" href={projectConfig.github}>GitHub</a>
                <br />
            </div>
            <div className="ImageContainer">
                <img className="Project-image" src={projectConfig.image} alt="project-image"/>
            </div>
        </div>
    )
};

export default Project;

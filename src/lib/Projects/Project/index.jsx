import "./styles/Project.css"

const Project = ({projectConfig}) => (
    <div className="Project">
        <h1>{projectConfig.title}</h1>
        <p className="Description">{projectConfig.description}</p>
        <a href={projectConfig.github}>{projectConfig.github}</a>
        <a href={projectConfig.devpost}>{projectConfig.devpost}</a>
    </div>
);

export default Project;

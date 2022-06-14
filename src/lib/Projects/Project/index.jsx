import "./styles/Project.css"

const Project = ({projectConfig}) => (
    <div className="Project">
        <h1>{projectConfig.title}</h1>
        <p className="Description">{projectConfig.description}</p>
        <a className="Link" href={projectConfig.github}>Github</a>
        <a className="Link" href={projectConfig.devpost}>Devpost</a>
    </div>
);

export default Project;

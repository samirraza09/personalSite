import Project from "./Project";
import "./styles/Projects.css"

const Projects = ({projectsConfig}) => (
    <div id="Projects" className="Projects-container">
        <h1 className="Projects-title">Projects</h1>
        <div className="Projects-flexbox">
        {
            projectsConfig.projects.map((projectConfig) => (
                <Project projectConfig={projectConfig}/>
            ))
        }
        </div>
    </div>
)

export default Projects;

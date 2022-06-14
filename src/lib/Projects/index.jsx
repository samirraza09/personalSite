import projectsConfig from "./config/projectsConfig";
import Project from "./Project";
import "./styles/Projects.css"

const Projects = () => (
    <div className="Projects-container">
        {
            projectsConfig.projects.map((projectConfig) => (
                <Project projectConfig={projectConfig}/>
            ))
        }
    </div>
)

export default Projects;

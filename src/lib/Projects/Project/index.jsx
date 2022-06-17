import "./styles/Project.css"
import YoutubeEmbed from "./YoutubeEmbed";

const Project = ({projectConfig}) => (
    <div className="Project-container">
        <div className="Project">
            <h1>{projectConfig.title}</h1>
            <p className="Description">{projectConfig.description}</p>
            <a className="Link" href={projectConfig.github}>Github</a>
        </div>
        <div className="YoutubeEmbed">
            <YoutubeEmbed embedId={projectConfig.youtubeEmbed}/>
        </div>
    </div>
);

export default Project;

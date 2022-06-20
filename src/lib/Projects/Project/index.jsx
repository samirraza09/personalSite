import "./styles/Project.css"
import YoutubeEmbed from "./YoutubeEmbed";

const Project = ({projectConfig}) => (
    <div className="Project-container">
        <div className="Project">
            <h1 className="Project-title">{projectConfig.title}</h1>
            <p className="Description">{projectConfig.description}</p>
            <a className="Link" href={projectConfig.github}>Github</a>
            <br />
            <a className="YoutubeLink" href={projectConfig.youtubeLink}>Video Demonstration</a>
        </div>
        <div className="YoutubeEmbed">
            <YoutubeEmbed embedId={projectConfig.youtubeEmbed}/>
        </div>
    </div>
);

export default Project;

import WorkExperience from "./WorkExperience";
import "./styles/WorkExperiences.css";

const WorkExperiences = ({ workExperiencesConfig}) => (
    <div className="WorkExperiences-container">
        <h1 className="WorkExperiences-title">Work Experience</h1>
        <div className="WorkExperiences-flexbox">
            {
                workExperiencesConfig.workExperiences.map((workExperience) => (
                    <WorkExperience workExperience={workExperience}/>
                ))
            }
        </div>
    </div>
);

export default WorkExperiences;

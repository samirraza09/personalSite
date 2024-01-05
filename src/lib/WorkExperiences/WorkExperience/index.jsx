import "./styles/WorkExperience.css"

const WorkExperience = ({workExperience}) => (
    <div className="WorkExperience-container">
        <h1 className="WorkExperience-company">
            <a className="WorkExperience-company-link" href={workExperience.companyUrl}>
                {workExperience.company}
            </a>
        </h1>
        <h2 className="WorkExperience-position">{workExperience.position}</h2>
        <h2 className="WorkExperience-year">{workExperience.year}</h2>
    </div>
)

export default WorkExperience;

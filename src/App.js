import './App.css';
import AboutMe from './lib/AboutMe';
import Projects from './lib/Projects';
import projectsConfig from './lib/Projects/config/projectsConfig'
import WorkExperiences from './lib/WorkExperiences';
import workExperienceConfig from './lib/WorkExperiences/config/workExperienceConfig';
import Header from './lib/Header';

const App = () => (
  <div className="App-container">
    <Header/>
    <div className="App">
      <AboutMe />
      <Projects projectsConfig={projectsConfig}/>
      <WorkExperiences workExperiencesConfig={workExperienceConfig} />
    </div>
  </div>
)

export default App;

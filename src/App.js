import './App.css';
import React, { useState } from 'react';
import AboutMe from './lib/AboutMe';
import Projects from './lib/Projects';
import projectsConfig from './lib/Projects/config/projectsConfig'
import WorkExperiences from './lib/WorkExperiences';
import workExperienceConfig from './lib/WorkExperiences/config/workExperienceConfig';
import Header from './lib/Header';
import Footer from './lib/Footer';

const App = () => {
  return (
    <div className="App-container">
    <Header/>
    <div className="App">
      <AboutMe />
      <Projects projectsConfig={projectsConfig}/>
      <WorkExperiences workExperiencesConfig={workExperienceConfig} />
    </div>
    <Footer/>
  </div>
  )
}

export default App;

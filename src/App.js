import './App.css';
import React, { useState } from 'react';
import AboutMe from './lib/AboutMe';
import Projects from './lib/Projects';
import projectsConfig from './lib/Projects/config/projectsConfig'
import WorkExperiences from './lib/WorkExperiences';
import workExperienceConfig from './lib/WorkExperiences/config/workExperienceConfig';
import Header from './lib/Header';
import Footer from './lib/Footer';
import ScrollButton from './lib/ScrollButton';

const App = () => {

  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
  
  return (
  <div className="App-container">
    <Header />
    <div className="App">
      <AboutMe />
      <Projects id="Projects" projectsConfig={projectsConfig}/>
      <WorkExperiences id="WorkExperiences" workExperiencesConfig={workExperienceConfig} />
      <ScrollButton />
    </div>
    <Footer/>
  </div>
  )
}

export default App;

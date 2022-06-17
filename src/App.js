import logo from './logo.svg';
import './App.css';
import AboutMe from './lib/AboutMe';
import Projects from './lib/Projects';

const App = () => (
  <div className="App-container">
    <div className="App">
    <AboutMe />
    <Projects/>
    <header className="App-header">
    </header>
  </div>
  </div>
)

export default App;

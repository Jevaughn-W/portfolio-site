import './App.css';
import About from './Components/About/about';
import Projects from './Components/Projects/projects';
import Landing from './Components/Landing-page/landing';
import NavBar from './Components/NavBar/NavBar';
import Skills from './Components/Skills/skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Landing/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;

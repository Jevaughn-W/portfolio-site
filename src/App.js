import './App.css';
import About from './Components/About/about';
import Projects from './Components/Projects/projects';
import Landing from './Components/Landing-page/landing';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Landing/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;

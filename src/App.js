import './App.css';
import About from './Components/About/about';
import Projects from './Components/Projects/projects';
import Landing from './Components/Landing-page/landing';

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;

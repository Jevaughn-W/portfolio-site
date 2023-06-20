import './App.css';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
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

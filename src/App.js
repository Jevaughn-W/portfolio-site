import './App.css';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Landing from './Components/Landing-page/landing';

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

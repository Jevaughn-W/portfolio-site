import './App.css';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;

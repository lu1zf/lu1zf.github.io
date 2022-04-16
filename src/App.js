import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

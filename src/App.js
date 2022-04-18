import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Welcome from './components/Welcome';


function App({ data, lang }) {
  const { navbar, welcome, projects, contact } = data;
  return (
    <div className="App">
      <Navbar data={navbar} lang={lang} />
      <Welcome data={welcome} />
      <Projects data={projects} />
      <Contact data={contact} />
      <Footer />
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/Banner';
import { Contact } from './components/Connact';
import { Footer } from './components/Footer';
import { NavBar } from "./components/Navbar";
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';


function App() {
  return (
    <div>
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;

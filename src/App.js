import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import { AddressMap } from './components/MapSection';
import AboutSection from './components/AboutSection';
import { homeObjFour } from './components/AboutSection/Data';

function App() {
  return (
    <Router>
      <Home />
      <AboutSection {...homeObjFour} />
      <AddressMap />
    </Router>
  );
}

export default App;

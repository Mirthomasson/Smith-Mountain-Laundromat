import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import { AddressMap } from './components/MapSection';
import { homeObjSix } from './components/AboutSection/data';
import PlaySound from './components/PlaySound';



function App() {
  return (
    <Router>
      <Home />
      <PlaySound />
      <AddressMap {...homeObjSix} />
    </Router>
  );
}

export default App;

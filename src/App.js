import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import { homeObjFive } from './components/AboutSection/data';
import Footer from './components/FooterSection';
import ReviewSection from './components/Reviews/ReviewSection ';
import { AddressMap } from './components/MapSection';

function App() {
  return (
    <Router>
      <Home />
      <AddressMap {...homeObjFive} />
      <ReviewSection />
      <Footer />
    </Router>
  );
}

export default App;

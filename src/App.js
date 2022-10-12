import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import { AddressMap } from './components/MapSection';
import { homeObjFive } from './components/AboutSection/data';
import ReviewSection from './components/Reviews/ReviewSection ';
import Footer from './components/FooterSection';



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

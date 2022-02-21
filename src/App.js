import { BrowserRouter as Router } from 'react-router-dom';
import ReactRoutes from './Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // useGoogleAnalytics()

  return (
    <>
      <Router>
        <Navbar />
        <ReactRoutes />
      </Router>
      <Footer />
    </>
  );
}

export default App;

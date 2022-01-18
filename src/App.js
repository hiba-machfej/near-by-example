import { BrowserRouter as Router } from 'react-router-dom';
import ReactRoutes from './Routes';
import Navbar from './components/Navbar';

function App() {
  // useGoogleAnalytics()

  return (
    <Router>
      <Navbar />
      <ReactRoutes />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Navbar from './components/Navbar';
import ExamplesList from './containers/ExamplesList';
import ExampleDetail from './components/ExampleDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/example-list/:name" element={<ExamplesList />} />
        <Route exact path="/example-detail/:id" element={<ExampleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Navbar from './components/Navbar';
import {useEffect} from 'react';
import ExamplesList from './containers/ExamplesList';
import ExampleDetail from './components/ExampleDetail';
import useContent  from '../src/composables/index'

function App() {
 const examples = [{
   "title":"hello world",
   "description":"hello world in assembly"
 }] 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/examplelist/:name" element={<ExamplesList examples={examples} />} />
        <Route exact path="/rust" element={<ExamplesList />} />
        <Route exact path="/exampledetail/:id" element={<ExampleDetail />} />

      </Routes>
    </Router>
  );
}

export default App;

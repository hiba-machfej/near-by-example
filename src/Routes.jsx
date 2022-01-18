import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';

import ExamplesList from './containers/ExamplesList';
import ExampleDetail from './components/ExampleDetail';
import Frontend from './containers/Frontend';
import Soon from './containers/Soon';
import useGoogleAnalytics from './composables/useGA';

function ReactRoutes() {
  useGoogleAnalytics();

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route path="/example-list/:name" element={<ExamplesList />} />
      <Route exact path="/example-list/:name/:id" element={<ExampleDetail />} />
      <Route exact path="/frontend" element={<Frontend />} />
      <Route exact path="/soon" element={<Soon />} />
    </Routes>
  );
}

export default ReactRoutes;

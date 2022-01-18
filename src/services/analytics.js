import ReactGA from 'react-ga4';

const TRACKING_ID = process.env.REACT_APP_GA;

function init() {
  // Enable debug mode on the local development environment
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  ReactGA.initialize(TRACKING_ID, { debug: isDev });
}

function sendEvent(payload) {
  ReactGA.event(payload);
}

function sendPageview(path) {
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
}

export default {
  init,
  sendEvent,
  sendPageview
};

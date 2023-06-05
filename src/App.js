// Import necessary dependencies and components
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HomePage from './pages/HomePage';
// import SettingsPage from './pages/SettingsPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AudioPlayer from './components/AudioPlayer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <AudioPlayer />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/settings" component={SettingsPage} /> */}
          
        </Switch>
      </div>
    </Router>
  );
};

export default App;

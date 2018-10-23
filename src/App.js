import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

const App = () => {
  return(
    <div className="ui container">
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      {/* Add more routes here */}
    </div>
  )
}

export default App;

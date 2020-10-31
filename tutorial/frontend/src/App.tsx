import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './App.css';
import Polls from './components/Polls';
import Auth from './auth/Auth';
import Login from './auth/Login';
import Logout from './auth/Logout';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />

          <Auth>
            <Switch>
              <Route exact path="/polls" component={Polls} />
              <Redirect from="/" to="/polls" />
            </Switch>
          </Auth>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

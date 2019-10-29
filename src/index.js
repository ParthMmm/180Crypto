import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './components/App';
import ChangePassword from './components/ChangePassword';
import signIn from './components/SignIn';
import signUp from './components/SignUp';

import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/changePassword" component={ChangePassword} />
      <Route path="/signIn" component={signIn} />
      <Route path="/signUp" component={signUp} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

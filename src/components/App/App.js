import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Home, Login, Register} from 'pages';

import {history} from 'helpers';
import {authenticationService} from 'services';
import {PrivateRoute} from 'components';


import './App.scss';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({currentUser: x}));
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    return (
      <div className="App">
        <Router>
          <PrivateRoute exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Redirect to="/"/>
        </Router>
      </div>
    );
  }
}

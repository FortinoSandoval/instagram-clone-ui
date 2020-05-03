import React from 'react';
import {LoginFooter, LoginForm} from 'components';

import './Login.scss';

export class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <LoginForm/>
        <LoginFooter/>
      </div>
    );
  }
}

import React from 'react';
import {authenticationService} from 'services';
import {Link} from 'react-router-dom';

import './LoginForm.scss';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', pwd: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (authenticationService.currentUserValue) {
      this.props.history.push('/');
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.pwd);
    authenticationService.login(this.state.username, this.state.pwd).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="login-form">
        <div className="login">
          <h3>Instagram</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" className="username" value={this.state.username}
                   onChange={this.handleInputChange} placeholder="Teléfono, usuario o correo electrónico."/>
            <input type="password" name="pwd" className="pwd" value={this.state.email}
                   onChange={this.handleInputChange} placeholder="Contraseña."/>

            <input type="submit" value="Submit" className="login-submit"
                   disabled={!this.state.username || !this.state.pwd}/>
          </form>
          <div className="main-divider">
            <div className="divider"></div>
            <div className="o">o</div>
            <div className="divider"></div>
          </div>
          <button className="fb-login">
            <span>

            </span>
            <span>
              Iniciar sesión con Facebook
            </span>
          </button>
        </div>
        <div className="register">
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </div>
        <div className="apps">
          Descargar app
        </div>
      </div>
    );
  }


}

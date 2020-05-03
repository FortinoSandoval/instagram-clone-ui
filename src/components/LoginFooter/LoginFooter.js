import React from 'react';

import './LoginFooter.scss';

export class LoginFooter extends React.Component {

  render() {
    return (
      <footer>
        <div className="footerDiv">
          <ul>
            <li><a href="https://about.instagram.com/about-us">INFORMACION</a></li>
            <li><a href="https://help.instagram.com/">AYUDA</a></li>
            <li><a href="https://instagram-press.com/">PRENSA</a></li>
            <li><a href="https://www.instagram.com/developer/">API</a></li>
            <li><a href="https://www.instagram.com/about/jobs/">EMPLEO</a></li>
            <li><a href="https://www.instagram.com/legal/privacy/">PRIVACIDAD</a></li>
            <li><a href="https://www.instagram.com/legal/terms/">CONDICIONES</a></li>
            <li><a href="https://www.instagram.com/explore/locations/">UBICACIONES</a></li>
            <li><a href="https://www.instagram.com/directory/profiles/">CUENTAS DESTACADAS</a></li>
            <li><a href="https://www.instagram.com/directory/hashtags/">HASHTAGS</a></li>
          </ul>
          <span>
        &copy; 2020 INSTAGRAM FROM FACEBOOK
      </span>
        </div>
      </footer>
    );
  }
}


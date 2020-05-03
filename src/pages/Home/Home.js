import React from 'react';

import {homeService, authenticationService} from 'services';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
      users: null
    };
  }

  componentDidMount() {
    homeService.getHome().then((res) => {
      console.log(res);
    })
  }

  render() {
    const {currentUser, users} = this.state;
    return (
      <div>
        <h1>Hi {currentUser.username}!</h1>
        <p>You're logged in with React & JWT!!</p>
        <h3>Users from secure api end point:</h3>
        {users &&
        <ul>
          {users.map(user =>
            <li key={user.id}>{user.firstName} {user.lastName}</li>
          )}
        </ul>
        }
      </div>
    );
  }
}

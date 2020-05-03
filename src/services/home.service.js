import {BehaviorSubject} from 'rxjs';

import {handleResponse} from 'helpers';
import {authHeader} from 'helpers';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const homeService = {
  getHome() {
    const requestOptions = {
      method: 'GET',
      headers: authHeader()
    };

    return fetch(`${'http://localhost:8080/api'}/home`, requestOptions)
      .then(handleResponse)
  }
};

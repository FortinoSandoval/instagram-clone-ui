import {authenticationService} from '../services/authentication.service';

function isParsable(text) {
  let parsable = true;
  try {
    JSON.parse(text);
  } catch (e) {
    parsable = false;
  }

  return parsable;
}

export function handleResponse(response) {

  return response.text().then(text => {
    let data;
    if (isParsable(text)) {
      data = text && JSON.parse(text);
    }
    if (!response.ok) {
      if ([401, 403].indexOf(response.status) !== -1) {
        authenticationService.logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

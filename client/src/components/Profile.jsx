import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from './Loading';

const Profile = () => {
  // user object is within useAuth0 hook
  // this component contains sensitive user info, thus should only be rendered once authenticated
  const { user } = useAuth0();
  const { name, email } = user;
  const userID = user.sub.substring(user.sub.indexOf('|') + 1);
  return (
    <div>
      <div className="col-mid text-center text-md-left">

        <h2>{name}</h2>
        <p className="lead text-muted">{email}</p>
      </div>
      <div className="row">
        <div>User ID: {userID}</div>
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  ); 
};

// wrap component to be protected in withAuthenticationRequired
// unauthenticated users who visit this component will be redirected to login page
// after login, will redirect to app, which takes them back to intended page
export default withAuthenticationRequired(Profile, {
  // onRedirecting: renders a component while app redirects to login
  // provides loading animation and avoids flashing of UI
  onRedirecting: () => <Loading />,
});
import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Loading from './Loading';
import Profile from './Profile';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from '../auth/protected-route';
import axios from 'axios';

let testData = {
  userID: 1234,
  name: "Travis",
  dob: "06/19/1944",
  blurb: "color number one"
};

const App = (props) => {
  // expose the isLoading boolean, informing React app about authentication status when loading auth0
  const { isLoading } = useAuth0();
  // const userID = user.sub.substring(user.sub.indexOf('|') + 1);

  useEffect(() => {
    axios.get('/profile')
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <ProtectedRoute path="/profile" exact component={Profile} />
          <ProtectedRoute path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
    
  // <div>
  //   <div>Hello {testData.name}!</div>
  //   <div>Here is your current info:</div>
  //   <li>Date of birth: {testData.dob}</li>
  //   <li>Quirk: {testData.blurb}</li>
  // </div>
  
};

export default App;
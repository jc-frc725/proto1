import React from 'react';
import NavBar from './NavBar';
import Loading from './Loading';
import Profile from './Profile';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

let testData = {
  userID: 1234,
  name: "Travis",
  dob: "06/19/1944",
  blurb: "color number one"
};

const App = (props) => {
  // expose the isLoading boolean, informing React app about authentication status when loading auth0
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Profile} />
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
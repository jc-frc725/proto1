import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

let testData = {
  userID: 1234,
  name: "Travis",
  dob: "06/19/1944",
  blurb: "color number one"
};

const App = (props) => (
    <div>
      <LoginButton />
      <LogoutButton />
    </div>
  // <div>
  //   <div>Hello {testData.name}!</div>
  //   <div>Here is your current info:</div>
  //   <li>Date of birth: {testData.dob}</li>
  //   <li>Quirk: {testData.blurb}</li>
  // </div>
  
);

export default App;
import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/Loading';

// creation of a protected Route using React Router
// renders the withAuthRequired HOC, but through Router's logic
// component parameter allows creation of other Routes
const ProtectedRoute = ({ component, ...args }) => {
  <Route 
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
};

export default ProtectedRoute;
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Signup = () => {
  // we can redirect right to a sign-up page instead of login by passing a config obj
  // to loginWithRedirect:
  const { loginWithRedirect } = useAuth0();

  return (
    // in the config obj, the 'screen_hint' property specifies where to land
    <button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
      SIGN UP
    </button>
  )
};

export default Signup;
import React from 'react';
import SignupForm from './SignupForm';

class SignupPage extends React.Component {
  render() {
    return(
        <div className="signup">
          <div className="signup-row">
            <SignupForm />
            </div>
        </div>
    )
  }
}

 export default SignupPage;

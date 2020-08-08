import React from 'react';

import SignIn from '../Components/Sign-in/sign-in.component'

import SignUp from '../Components/sign-up/sign-up'

import './sign-in-and-sign-up.styles.scss'
const SignInAndSignUpPage = () => {
    return ( 
        <div className="sign-in-and-sign-up">
          <SignIn/>
          <SignUp/>
        </div>
     );
}
 
export default SignInAndSignUpPage;
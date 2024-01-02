import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '795122473524-qcoc7ij4iu65v85t4k2ueuh69huq577r.apps.googleusercontent.com';

const Login = () => {
    const onSuccess = (res) => {
        console.log("Login success! current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed! res: ", res);
    }
  return (
    <div id ="signInButton">
        <GoogleLogin
        clientId={clientId}
        buttonText='Login With Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
    </div>
  )
}

export default Login
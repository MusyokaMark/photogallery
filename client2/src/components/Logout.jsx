import React from 'react'
import { GoogleLogout } from 'react-google-login';

const clientId = "795122473524-qcoc7ij4iu65v85t4k2ueuh69huq577r.apps.googleusercontent.com";

const Logout = () => {
    const onSuccess = () => {
        console.log("Log out Successfull!");
    }
  return (
    <div id="signOutButton">
        <GoogleLogout
        clientId={clientId}
        buttonText={'Logout'}
        onLogoutSuccess={onSuccess}
        />
    </div>
  )
}

export default Logout
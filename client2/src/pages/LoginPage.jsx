import React, { useState } from 'react'
import Login from '../components/Login';
import Logout from '../components/Logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId="795122473524-qcoc7ij4iu65v85t4k2ueuh69huq577r.apps.googleusercontent.com";
// const clientSecrete = "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";
const LoginPage = () => {

  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "profile email"
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();

        authInstance.isSignedIn.listen(updateSignInStatus);

        updateSignInStatus(authInstance.isSignedIn.get());
      })
    };

    function updateSignInStatus(isSignedIn) {
      if (isSignedIn) {
        const currentUser = gapi.auth2.getAuthInstance().currentUser.get();
        const profile = currentUser.getBasicProfile();
        
        const userData = {
          username: profile.getName(),
          profileImage: profile.getImageUrl()
        };
        
        setUserInfo(userData);
      } else {
        setUserInfo(null);
      }
    }
    gapi.load('client:auth2', start);
  }, []);

  // var accessToken = gapi.auth.getToken().access_token;
  return (
    <>
    <div className='flex justify-center mt-56'>
    {userInfo ? (
          <div>
            <img src={userInfo.profileImage} alt="Profile" className='rounded-full' />
            <p>{userInfo.username}</p>
            <Logout />
          </div>
        ) : (
          <Login />
        )}
    </div>
    </>
    
  )
}

export default LoginPage
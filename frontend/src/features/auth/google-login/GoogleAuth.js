import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { googleLogin } from "../../../entities/user/model/usersActions";

function GoogleAuth() {
  const dispatch = useDispatch();

  const googleResponse = (response) => {
    dispatch(googleLogin(response));
  };
  return (
    <>
      <GoogleLogin
        theme="outline"
        onSuccess={googleResponse}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </>
  );
}

export default GoogleAuth;

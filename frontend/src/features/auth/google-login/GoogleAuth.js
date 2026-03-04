import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function GoogleAuth({text}) {
  const googleResponse = (response) => {
    console.log(response);
  };
  return (
    <>
      <GoogleLogin  theme="outline" text={text}
        onSuccess={(googleResponse) => {
          console.log(googleResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </>
  );
}

export default GoogleAuth;

import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
  } from "@clerk/clerk-react";
  import { Navigate } from "react-router-dom";
  
  const Auth = () => {
    return (
      <div className="sign-in-container">
        <SignedOut>
          <h1> Welcome to Your Own Personal Finance Tracker!</h1>
          <SignUpButton mode="modal" />
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <Navigate to="/accounts" replace />
        </SignedIn>
      </div>
    );
  };
  
  // Export the Auth component
  export default Auth;
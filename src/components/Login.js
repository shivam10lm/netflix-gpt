import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/CA-en-20241111-TRIFECTA-perspective_579f263e-1178-4cc3-850d-f16222e40448_large.jpg"
          alt="background"
          className="w-screen h-screen object-cover"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-black bg-opacity-50 border border-{#909090}"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-black bg-opacity-50 border border-{#909090}"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-black bg-opacity-50 border border-{#909090}"
        />
        <button className="p-4 my-6 bg-red-700 text-white w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex">
          <p> {isSignInForm ? "New to Netflix?" : "Already Registered?"}</p>
          <p className="px-2 hover:underline" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign Up" : "Sign In"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

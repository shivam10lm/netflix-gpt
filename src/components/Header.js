import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {location.pathname !== "/" && (
        <div className="flex p-2 items-center">
          <img
            className="w-[32px] h-[32px] m-2"
            src="https://occ-0-7323-92.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTUt_eoZzVgxEMYWvJluilut_GefunFP0_QvsW5ONUYpCtwY9Zky4_FSTLRErnE4u2U9sClypkf2xjw-seYVsiTs6CKdG00.png?r=a8d"
            alt="account-logo"
          />
          <button className="text-white font-semibold" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

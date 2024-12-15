import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover font-ubermove bg-center bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/c5310f182519763.652f3606b64b0.jpg)] h-screen w-full pt-8 flex justify-between flex-col">
        <img
          className="w-20 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt="uber-logo"
        />
        <div className="bg-white py-4 px-5">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to={"/login"}
            className="flex items-center justify-center text-xl w-full bg-black font-semibold text-white py-4 rounded-lg mt-6"
          >
            Continue &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;

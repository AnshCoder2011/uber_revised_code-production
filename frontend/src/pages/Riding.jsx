import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen font-ubermove bg-gray-50">
      <Link
        to={"/home"}
        className="fixed right-3 top-3 h-16 w-16 bg-white flex items-center justify-center rounded-full"
      >
        <i className="ri-home-5-line text-3xl font-medium"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-5">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <img
              className="h-20"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
              alt=""
            />
            <div className="px-8 text-right">
              <h2 className="text-xl font-medium">Ansh</h2>
              <h4 className="text-2xl font-semibold">UP16 BC 4877</h4>
              <p className="text-sm text-gray-600">Maruti Sizuki Alto</p>
            </div>
          </div>
        </div>
        <div className="bg-white mt-3 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-5 border-b-2 border-gray-100 pb-3">
            <i className="ri-map-pin-5-fill text-xl text-emerald-500"></i>
            <div>
              <p className="text-sm text-gray-500">Drop Location</p>
              <h3 className="text-lg font-medium">562/11A</h3>
              <p className="text-sm text-gray-600">
                Chacha Nagri, IIT Dholakpur
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 pt-3">
            <i className="ri-currency-line text-xl text-emerald-500"></i>
            <div>
              <p className="text-sm text-gray-500">Fare Amount</p>
              <h3 className="text-lg font-medium">₹191.34</h3>
              <p className="text-sm text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold p-4 rounded-xl shadow-md transition-all hover:shadow-lg active:scale-95">
            <span className="flex items-center justify-center gap-2">
              <i className="ri-wallet-3-line"></i>
              Pay Now
            </span>
          </button>
          <button className="w-14 bg-red-100 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-200 transition-all">
            <i className="ri-phone-line text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;

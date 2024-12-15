import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopup = (props) => {

  const [otp, setOtp] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className="p-6 bg-white font-ubermove rounded-t-3xl shadow-lg h-screen overflow-y-auto">
      {/* Draggable Bar */}
      <div
        onClick={() => props.setRidePopupPanel(false)}
        className="flex justify-center mb-4 cursor-pointer"
      >
        <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
      </div>

      {/* Updated Header with new layout */}
      <div className="flex flex-col mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://i.pravatar.cc/300"
              alt="Passenger"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Esther Berry
              </h3>
              <p className="text-sm text-gray-500">2.7 km</p>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-xl font-bold text-gray-900">₹25.00</h4>
          </div>
        </div>

        {/* Payment tags */}
        <div className="flex gap-2">
          <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
            ApplePay • ₹15.00
          </span>
          <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
            Discount • ₹10.00
          </span>
        </div>
      </div>

      {/* Updated Location Cards */}
      <div className="space-y-3 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-xs font-medium text-gray-500 mb-1">PICK UP</p>
          <h3 className="text-base text-gray-900">7958 Swift Village</h3>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-xs font-medium text-gray-500 mb-1">DROP OFF</p>
          <h3 className="text-base text-gray-900">
            105 William St, Chicago, US
          </h3>
        </div>
      </div>

      {/* Notes Section */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="text-xs font-medium text-gray-500 mb-1">NOTES</p>
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisc elit.
        </p>
      </div>
      <br />
      <br />
      <br />

      <form onSubmit={(e) => submitHandler(e)}>
        <div className="mb-6">
          <input 
            type="text" 
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 4-digit OTP" 
            maxLength="4"
            className="w-full px-4 py-3 text-lg font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            pattern="\d{4}"
            required
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <button className="py-3 bg-orange-400 text-white font-medium rounded-lg hover:bg-orange-600 transition-all">
            Call
          </button>
          <button className="py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all">
            Message
          </button>
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(false);
              props.setRidePopupPanel(false);
            }}
            className="py-3 bg-red-400 text-white font-medium rounded-lg hover:bg-red-600 transition-all"
          >
            Cancel
          </button>
        </div>

        <Link
          to={"/captain-riding"}
          className="w-full flex items-center justify-center py-4 mt-4 bg-black text-white font-medium rounded-lg transition-transform transform hover:scale-105"
        >
          GO TO PICK UP
        </Link>
      </form>
    </div>
  );
};

export default ConfirmRidePopup;

import React from "react";

const ConfirmRide = (props) => {
  return (
    <div className="p-6 bg-white rounded-t-3xl shadow-lg max-h-[85vh] overflow-y-auto">
      <div
        className="flex justify-center mb-2 cursor-pointer group"
        onClick={() => props.setConfirmRidePanel(false)}
      >
        <div className="w-12 h-1.5 bg-gray-300 rounded-full group-hover:bg-gray-400 transition-colors" />
      </div>

      <div className="flex items-center mb-4">
        <button
          onClick={() => props.setConfirmRidePanel(false)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <i className="ri-arrow-left-line text-xl"></i>
          <span className="text-lg">Back</span>
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Confirm your Ride
      </h2>

      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-full">
          <img
            className="h-32 object-contain mx-auto hover:scale-105 transition-transform"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
            alt="Vehicle"
          />
        </div>

        <div className="w-full space-y-4 bg-gray-50 rounded-xl p-4">
          {/* Location Details */}
          <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
            <i className="ri-map-pin-2-fill text-2xl text-emerald-500"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">562/11A</h3>
              <p className="text-sm text-gray-600">
                Chacha Nagri, IIT Dholakpur
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
            <i className="ri-map-pin-5-fill text-2xl text-emerald-500"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">562/11A</h3>
              <p className="text-sm text-gray-600">
                Chacha Nagri, IIT Dholakpur
              </p>
            </div>
          </div>

          {/* Fare Details */}
          <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
            <i className="ri-currency-line text-2xl text-emerald-500"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">₹191.34</h3>
              <p className="text-sm text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
          }}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold p-4 rounded-xl shadow-md transition-all hover:shadow-lg active:scale-98"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;

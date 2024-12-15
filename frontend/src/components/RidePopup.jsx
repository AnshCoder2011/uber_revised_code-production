import React from "react";

const RidePopup = (props) => {
  return (
    <div className="p-6 bg-white font-ubermove rounded-t-3xl shadow-lg max-h-[50vh] overflow-y-auto">
      {/* Draggable Bar */}
      <div
        onClick={() => props.setRidePopupPanel(false)}
        className="flex justify-center mb-4 cursor-pointer"
      >
        <div
          onClick={() => props.setRidePopupPanel(false)}
          className="w-12 h-1.5 bg-gray-300 rounded-full"
        ></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://i.pravatar.cc/300"
            alt="Passenger"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-800">Esther Berry</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-emerald-100 text-emerald-600 text-xs font-medium px-2 py-1 rounded-md">
                ApplePay
              </span>
              <span className="bg-emerald-100 text-emerald-600 text-xs font-medium px-2 py-1 rounded-md">
                Discount
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <h4 className="text-xl font-bold text-gray-800">₹191.34</h4>
          <p className="text-sm text-gray-600">2.2 km</p>
        </div>
      </div>

      {/* Pickup and Dropoff Locations */}
      <div className="space-y-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <p className="text-xs text-gray-500">PICK UP</p>
          <h3 className="text-lg font-semibold text-gray-800">
            7958 Swift Village
          </h3>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <p className="text-xs text-gray-500">DROP OFF</p>
          <h3 className="text-lg font-semibold text-gray-800">
            105 William St, Chicago, US
          </h3>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
          className="w-[48%] py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all"
        >
          Ignore
        </button>
        <button
          onClick={() => {
            props.setConfirmRidePopupPanel(true);
          }}
          className="w-[48%] py-3 bg-gradient-to-r from-gray-800 to-black text-white font-semibold rounded-lg shadow-lg hover:shadow-gray-700 hover:-translate-y-1 active:scale-95 transition-all"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default RidePopup;

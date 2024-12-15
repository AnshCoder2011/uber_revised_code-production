import React from 'react'
import { Link } from 'react-router-dom';

const FinishRide = (props) => {
  return (
    <div className="p-6 bg-white font-ubermove rounded-t-3xl shadow-lg h-screen overflow-y-auto">
      {/* Draggable Bar */}
      <div
        onClick={() => props.setFinishRidePanel(false)}
        className="flex justify-center mb-4 cursor-pointer"
      >
        <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
      </div>

      {/* Ride Complete Status */}
      <div className="flex flex-col items-center mb-8">
        <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
          <i className="ri-check-line text-3xl text-white"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Ride Completed!</h2>
        <p className="text-gray-500 mt-1">Thanks for riding with Uber</p>
      </div>

      {/* Fare Details */}
      <div className="bg-gray-50 p-4 rounded-xl mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Fare Details</h3>
          <h4 className="text-2xl font-bold text-gray-900">₹25.00</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Trip Fare</span>
            <span>₹15.00</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount Applied</span>
            <span>-₹10.00</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Platform Fee</span>
            <span>₹20.00</span>
          </div>
        </div>
      </div>

      {/* Passenger Details */}
      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-6">
        <img
          className="h-14 w-14 rounded-full object-cover border-2 border-gray-200"
          src="https://i.pravatar.cc/300"
          alt="Passenger"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Esther Berry</h3>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-500">5.0</span>
          </div>
        </div>
      </div>

      {/* Trip Details */}
      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">PICK UP</p>
            <h3 className="text-base text-gray-900">7958 Swift Village</h3>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">DROP OFF</p>
            <h3 className="text-base text-gray-900">105 William St, Chicago, US</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-xl text-center">
          <p className="text-sm text-gray-500">Distance</p>
          <p className="text-lg font-semibold">2.7 km</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl text-center">
          <p className="text-sm text-gray-500">Duration</p>
          <p className="text-lg font-semibold">15 mins</p>
        </div>
      </div>

      <Link
        to={"/captain-home"}
        className="w-full flex items-center justify-center py-4 bg-black text-white font-medium rounded-xl transition-all hover:bg-gray-800"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default FinishRide
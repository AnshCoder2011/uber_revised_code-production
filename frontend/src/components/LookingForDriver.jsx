import { useState } from "react";

const LookingForDriver = (props) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <div 
        className="flex justify-center mb-4 hover:opacity-75 transition-all duration-300 cursor-pointer"
        onClick={() => props.setVehicleFound(false)}
      >
        <i className="ri-arrow-down-wide-line text-2xl text-gray-400 hover:text-gray-600"></i>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Looking for a Driver
      </h2>

      <div className="flex flex-col items-center space-y-4">
        {loading ? (
          <div className="loader w-16 h-16"></div>
        ) : (
          <div className="relative w-full h-40 mb-4">
            <img
              className="w-full h-full object-cover rounded-lg shadow-md"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
              alt="Uber"
            />
          </div>
        )}

        <div className="w-full space-y-3 mt-2">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200">
            <i className="ri-map-pin-2-fill text-xl text-red-500 mr-4"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">562/11A</h3>
              <p className="text-sm text-gray-600">Chacha Nagri, IIT Dholakpur</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200">
            <i className="ri-map-pin-5-fill text-xl text-red-500 mr-4"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">562/11A</h3>
              <p className="text-sm text-gray-600">Chacha Nagri, IIT Dholakpur</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200">
            <i className="ri-currency-line text-xl text-green-500 mr-4"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">₹191.34</h3>
              <p className="text-sm text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;

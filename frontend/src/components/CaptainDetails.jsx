import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className="bg-white rounded-xl p-4 shadow-md mb-4 font-ubermove mt-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
              src="https://i.pinimg.com/originals/be/a3/49/bea3491915571d34a026753f4a872000.jpg"
              alt="Driver Profile"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Joginder Bhai
              </h2>
              <p className="text-sm text-gray-500">Professional Driver</p>
            </div>
          </div>
          <div className="text-right">
            <h5 className="text-3xl text-black font-bold">₹269.17</h5>
            <p className="text-sm text-gray-600">Today's Earnings</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-emerald-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
          <div className="flex flex-col items-center text-center h-full justify-between">
            <div className="bg-white p-3 rounded-full mb-3 shadow-sm">
              <i className="ri-timer-2-line text-2xl text-emerald-600"></i>
            </div>
            <h5 className="text-2xl font-bold text-gray-800 mb-1">10.2</h5>
            <p className="text-sm font-medium text-gray-600">Hours Online</p>
          </div>
        </div>
        <div className="bg-emerald-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
          <div className="flex flex-col items-center text-center h-full justify-between">
            <div className="bg-white p-3 rounded-full mb-3 shadow-sm">
              <i className="ri-speed-up-line text-2xl text-emerald-600"></i>
            </div>
            <h5 className="text-2xl font-bold text-gray-800 mb-1">15</h5>
            <p className="text-sm font-medium text-gray-600">Trips Completed</p>
          </div>
        </div>
        <div className="bg-emerald-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
          <div className="flex flex-col items-center text-center h-full justify-between">
            <div className="bg-white p-3 rounded-full mb-3 shadow-sm">
              <i className="ri-booklet-line text-2xl text-emerald-600"></i>
            </div>
            <h5 className="text-2xl font-bold text-gray-800 mb-1">4.9</h5>
            <p className="text-sm font-medium text-gray-600">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptainDetails
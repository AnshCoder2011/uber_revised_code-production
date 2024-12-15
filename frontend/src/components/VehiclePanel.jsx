import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-2 text-center w-[93%] absolute top-0"
        onClick={() => props.setVehiclePanel(false)}
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-300"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-3">Choose a Vehicle</h2>
      <div onClick={() => props.setConfirmRidePanel(true)} className="flex w-full mb-3 border-[3.2px] active:border-black rounded-xl p-5 items-center justify-between">
        <img
          className="h-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-xl">
            UberGo{" "}
            <span className="text-lg">
              <i className="ri-user-3-fill"></i>
            </span>
            4
          </h4>
          <h4 className="font-normal text-sm">2 mins away </h4>
          <p className="font-thin text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-[1.44rem] font-semibold">₹193.20</h2>
      </div>
      <div onClick={() => props.setConfirmRidePanel(true)} className="flex w-full border-[3.2px] mb-3 active:border-black rounded-xl p-5 items-center justify-between">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-xl">
            Moto{" "}
            <span className="text-lg">
              <i className="ri-user-3-fill"></i>
            </span>
            1
          </h4>
          <h4 className="font-normal text-sm">3 mins away </h4>
          <p className="font-thin text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-[1.44rem] font-semibold">₹65.17</h2>
      </div>
      <div onClick={() => props.setConfirmRidePanel(true)} className="flex w-full border-[3.2px] mb-3 active:border-black rounded-xl p-5 items-center justify-between">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-xl">
            UberAuto{" "}
            <span className="text-lg">
              <i className="ri-user-3-fill"></i>
            </span>
            3
          </h4>
          <h4 className="font-normal text-sm">2 mins away </h4>
          <p className="font-thin text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-[1.44rem] font-semibold">₹118.21</h2>
      </div>
    </div>
  );
}

export default VehiclePanel
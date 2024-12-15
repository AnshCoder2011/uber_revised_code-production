import React from "react";

const WaitForDriver = (props) => {
  return (
    <div>
      {" "}
      <h5
        className="p-2 text-center w-[93%] absolute top-0"
        onClick={() => props.waitingForDriver(false)}
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-300"></i>
      </h5>
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
      <div className="flex justify-between gap-2 flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="ri-map-pin-2-fill text-xl"></i>
            <div>
              <h3 className="text-xl font-medium">562/11A</h3>
              <p className="text-base text-gray-600">
                Chacha Nagri, IIT Dholakpur
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="ri-map-pin-5-fill text-xl"></i>
            <div>
              <h3 className="text-xl font-medium">562/11A</h3>
              <p className="text-base text-gray-600">
                Chacha Nagri, IIT Dholakpur
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line text-xl"></i>
            <div>
              <h3 className="text-xl font-medium">191.34</h3>
              <p className="text-base text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitForDriver;

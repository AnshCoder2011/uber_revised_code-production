import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="min-h-screen font-ubermove bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="fixed p-4 top-0 flex justify-between items-center w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <Link
          to={"/captain-home"}
          className="h-10 w-10 bg-white hover:bg-red-50 transition-colors flex items-center justify-center rounded-full shadow-sm"
        >
          <i className="ri-logout-box-r-line text-xl text-red-600"></i>
        </Link>
      </div>
      <div className="h-[85vh] relative">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Hero"
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm">
              <div className="flex items-center justify-center h-10 w-10 bg-orange-500 text-white rounded-full">
                A
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-600">Pick up at</p>
                <h4 className="text-lg font-bold text-gray-800">
                  7958 Swift Village
                </h4>
              </div>
            </div>
            <div className="bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-50">
              <i className="ri-arrow-down-s-line text-2xl text-gray-600"></i>
            </div>
          </div>

          <Link
            onClick={() => setFinishRidePanel(true)}
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-md transition-all hover:shadow-lg active:scale-98 text-center"
          >
            Complete Ride
          </Link>
        </div>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-50 bottom-0 bg-white"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;

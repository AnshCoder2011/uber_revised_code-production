import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "24B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
    "15A, Opposite Ravi's Bakery, Green Valley Apartments, Jaipur",
    "78C, Near Suresh's Grocery, Skyline Residency, Kochi",
    "42D, Adjacent to Mehta's Pharmacy, Bright Future Academy, Lucknow",
  ];

  return (
    <div>
      {/* this is sample data */}

      {locations.map((elem, index) => (
        <div
          onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
          key={index}
          className="flex items-center border-2 p-3 border-gray-100 active:border-black rounded-xl justify-start mt-4 gap-2"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill text-xl"></i>
          </h2>
          <h4 className="font-medium text-lg text-gray-800">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;

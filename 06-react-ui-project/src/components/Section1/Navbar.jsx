// It is the navbar of 1st page
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-6 px-16">
        <h4 className="bg-black uppercase text-white px-6 py-2 rounded-full">
          Target Audience
        </h4>
        <button className="uppercase bg-gray-200 px-6 py-2 text-sm rounded-full tracking-wider">
          digital banking platform
        </button>
      </div>
    </>
  );
};

export default Navbar;

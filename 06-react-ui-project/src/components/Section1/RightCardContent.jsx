import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const RightCardContent = (props) => {
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full text-xl font-semibold h-12 w-12 flex justify-center items-center">
          {props.id + 1}
        </h2>
        <div>
          <p className="text-lg leading-relaxed text-white mb-14">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tenetur
            beatae eligendi cumque at autem.
          </p>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className="text-white px-8 py-2 font-medium rounded-full">
              {props.tag}
            </button>
            <button style={{backgroundColor:props.color}} className="text-white px-4 py-2 font-medium rounded-full">
              <RiArrowRightLine size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightCardContent;

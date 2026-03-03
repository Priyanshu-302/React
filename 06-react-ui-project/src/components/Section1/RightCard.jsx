import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 bg-red-600 rounded-4xl">
      <img className="h-full object-cover" src={props.img} alt="Image" />
      <RightCardContent color={props.color} tag={props.tag} id={props.id} />
    </div>
  );
};

export default RightCard;

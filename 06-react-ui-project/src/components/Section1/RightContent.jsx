import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right"  className="h-full rounded-4xl overflow-x-auto flex flex-nowrap gap-10 w-2/3 p-6">
      {props.users.map((user, idx) => {
        return (
          <>
            <RightCard key={idx} id={idx} img={user.img} color={user.color} tag={user.tag} />
          </>
        );
      })}
    </div>
  );
};

export default RightContent;

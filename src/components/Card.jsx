import React from "react";
import Term from "./Term";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="term">
      <Term emoji={props.emoji} term={props.term} />
      <Detail detail={props.det} />
    </div>
  );
}

export default Card;

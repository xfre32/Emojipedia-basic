import React from "react";

function Term(props) {
  return (
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.emoji}
      </span>
      <span>{props.term}</span>
    </dt>
  );
}

export default Term;

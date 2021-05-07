import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <br />
        <strong>Similar: </strong>
        {props.synonyms.map(function (synonym, index) {
          return <div key={index}>{synonym} </div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}

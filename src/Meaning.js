import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <br />
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span className="definition">{definition.definition}</span>
            <br />
            <em className="example">{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}

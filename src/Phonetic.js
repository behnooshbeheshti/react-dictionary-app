import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        className="btn btn-secondary me-3"
        rel="noopener noreferrer"
      >
        {" "}
        <strong> ► </strong>
      </a>
      {props.phonetic.text}
    </div>
  );
}

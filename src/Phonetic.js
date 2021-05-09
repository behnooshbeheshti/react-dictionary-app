import React from "react";
import "./Phonetic.css";

import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="player">
        <ReactAudioPlayer
          src={props.phonetic.audio}
          onPlay
          controls
          volume={0.5}
        />
      </span>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}

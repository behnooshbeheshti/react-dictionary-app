import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  // return (
  //   <div className="">
  //     <a href={props.phonetic.audio} target="_blank" ">
  //       {" "}
  //       <strong> Listen </strong>
  //     </a>
  //     <span className="">{props.phonetic.text}</span>
  //   </div>
  // );

  function playSound() {
    let audio = document.getElementById("audio");
    audio.load();
    audio.play();
  }

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <audio id="audio">
          <source src={props.phonetic.audio} type="audio/mp3" />
        </audio>
        <div className="text">
          <button onClick={playSound}>{props.phonetic.text}</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
